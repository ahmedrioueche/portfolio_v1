import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { ReviewUpdate } from "@/types/reviews";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const review = await db
      .collection("reviews")
      .findOne({ _id: new ObjectId(params.id) });

    if (!review) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json({
      ...review,
      _id: review._id.toString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch review" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const sessionCookie = req.cookies.get("review_session")?.value;
    if (!sessionCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const session = JSON.parse(sessionCookie);
    const { reviewId, timestamp } = session;

    if (
      reviewId !== params.id ||
      Date.now() - timestamp > 24 * 60 * 60 * 1000
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const updates: ReviewUpdate = await req.json();

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const result = await db
      .collection("reviews")
      .updateOne({ _id: new ObjectId(params.id) }, { $set: { ...updates } });

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Review updated" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update review" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const sessionCookie = req.cookies.get("review_session")?.value;
    if (!sessionCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const session = JSON.parse(sessionCookie);
    const { reviewId, timestamp } = session;

    if (
      reviewId !== params.id ||
      Date.now() - timestamp > 24 * 60 * 60 * 1000
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    const result = await db
      .collection("reviews")
      .deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    // Clear the session cookie after deletion
    const response = NextResponse.json({ message: "Review deleted" });
    response.cookies.set("review_session", "", { maxAge: 0 });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete review" },
      { status: 500 }
    );
  }
}
