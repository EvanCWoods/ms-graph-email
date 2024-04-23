// lib/dbConnect.tsx
import type { Mongoose } from "mongoose";
import { connect } from "mongoose";

/* eslint-disable no-var */

declare global {
  var mongoose: {
    promise: Promise<Mongoose> | null;
    conn: Mongoose | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connects to the MongoDB database using the provided MONGODB_URI.
 * If a connection already exists, returns the existing connection.
 * If a connection does not exist, creates a new connection and returns it.
 *
 * @returns {Promise<Mongoose>} A promise that resolves to the Mongoose connection object.
 * @throws {Error} If the MONGODB_URI environment variable is not defined.
 */
async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
