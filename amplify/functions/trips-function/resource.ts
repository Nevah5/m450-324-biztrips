import { defineFunction } from "@aws-amplify/backend";

export const tripsFunction = defineFunction({
  name: "tripsFunction",
  entry: "./handler.ts",
});
