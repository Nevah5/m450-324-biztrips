import { defineBackend } from "@aws-amplify/backend";
import { tripsFunction } from "./functions/trips-function/resource";

defineBackend({
  tripsFunction,
});
