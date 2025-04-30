import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { IReview, ReviewCreate } from "@/types/reviews";

// Helper function for consistent error logging
function logError(context: string, error: unknown) {
  const timestamp = new Date().toISOString();
  if (error instanceof Error) {
    console.error(`[${timestamp}] ${context}:`, error.message, error.stack);
  } else {
    console.error(`[${timestamp}] ${context}:`, error);
  }
}
export async function GET() {
  console.log("GET /api/reviews initiated");

  try {
    console.log("Attempting to connect to MongoDB...");
    const client = await clientPromise;
    console.log("Successfully connected to MongoDB");

    const dbName = process.env.DB_NAME;
    if (!dbName) {
      throw new Error("DB_NAME environment variable is not set");
    }
    console.log(`Using database: ${dbName}`);

    const db = client.db(dbName);
    const collection = db.collection("reviews");

    console.log("Fetching reviews...");
    const reviews = await collection.find().sort({ createdAt: -1 }).toArray();
    console.log(`Found ${reviews.length} reviews`);

    // Map database fields to match IReview interface exactly
    const formatted: IReview[] = reviews.map((r: any) => ({
      _id: r._id.toString(),
      rating: r.stars, // Map 'stars' to 'rating'
      hire: r.hire,
      comment: r.comment,
      author: r.ownerName, // Map 'ownerName' to 'author'
      createdAt: r.createdAt,
    }));

    console.log("Successfully formatted reviews");
    return NextResponse.json(formatted);
  } catch (error) {
    logError("GET /api/reviews failed", error);
    return NextResponse.json(
      {
        error: "Failed to fetch reviews",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  console.log("POST /api/reviews initiated");

  try {
    console.log("Parsing request body...");
    const body: ReviewCreate = await req.json();
    console.log("Received body:", JSON.stringify(body, null, 2));

    // Use the exact field names from ReviewCreate interface
    const { rating, hire, comment, author = "Anonymous" } = body;

    // Input validation
    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      throw new Error("Invalid rating: must be a number between 1 and 5");
    }
    if (typeof hire !== "boolean") {
      throw new Error("Invalid hire value: must be boolean");
    }
    if (typeof comment !== "string" || comment.trim().length === 0) {
      throw new Error("Invalid comment: must be a non-empty string");
    }

    // Map to database schema while keeping internal types consistent
    const newReview = {
      stars: rating, // Map 'rating' to 'stars' for database
      hire,
      comment: comment.trim(),
      ownerName: author.trim() || "Anonymous", // Map 'author' to 'ownerName' for database
      createdAt: new Date().toISOString(),
    };

    console.log("Attempting to connect to MongoDB...");
    const client = await clientPromise;
    console.log("Successfully connected to MongoDB");

    const dbName = process.env.DB_NAME;
    if (!dbName) {
      throw new Error("DB_NAME environment variable is not set");
    }
    console.log(`Using database: ${dbName}`);

    const db = client.db(dbName);
    console.log("Inserting new review...");
    const result = await db.collection("reviews").insertOne(newReview);
    console.log("Review inserted with ID:", result.insertedId);

    const reviewId = result.insertedId.toString();

    // Return data matching IReview interface
    const responseData: IReview = {
      _id: reviewId,
      rating, // Use original 'rating' field
      hire,
      comment: comment.trim(),
      author: author.trim() || "Anonymous", // Use original 'author' field
      createdAt: newReview.createdAt,
    };

    // Session cookie logic (24h)
    const sessionData = {
      reviewId,
      timestamp: Date.now(),
    };

    console.log("Setting session cookie...");
    const response = NextResponse.json(responseData, { status: 201 });

    response.cookies.set("review_session", JSON.stringify(sessionData), {
      maxAge: 60 * 60 * 24, // 24 hours
      httpOnly: false,
      sameSite: "lax",
      path: "/",
    });

    console.log("Successfully created review and set cookie");
    return response;
  } catch (error) {
    logError("POST /api/reviews failed", error);
    return NextResponse.json(
      {
        error: "Failed to post review",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
