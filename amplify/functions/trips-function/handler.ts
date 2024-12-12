import type { Handler } from "aws-lambda";
import db from "./db.json";

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: db.trips,
  };
};
