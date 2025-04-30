import { MongoClient, MongoClientOptions } from "mongodb";

declare global {
  // Allow global `var` declarations for caching in development
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}
const DB_URI = process.env.DB_URI;

console.log({ DB_URI });
const uri = process.env.DB_URI;
if (!uri) {
  throw new Error(
    "Please define the DB_URI environment variable inside .env.local"
  );
}

const options: MongoClientOptions = {
  connectTimeoutMS: 5000,
  socketTimeoutMS: 30000,
  serverSelectionTimeoutMS: 5000,
  maxPoolSize: 50,
  ...(process.env.NODE_ENV === "production" && {
    ssl: true,
    tlsAllowInvalidCertificates: false,
  }),
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();

    // Add event listeners for debugging
    client.on("serverOpening", () => console.log("MongoDB connection opened"));
    client.on("serverClosed", () => console.log("MongoDB connection closed"));
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, avoid global variables
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise
export default clientPromise;
