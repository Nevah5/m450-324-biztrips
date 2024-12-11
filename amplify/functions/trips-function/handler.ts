import type { Handler } from "aws-lambda";

const fs = require("fs");
const path = require("path");

export const handler: Handler = async (event, context) => {
  const filePath = path.resolve(__dirname, "db.json");
  const data = fs.readFileSync(filePath, "utf8");

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };
};
