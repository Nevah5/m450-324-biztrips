import { defineBackend } from "@aws-amplify/backend";
import { tripsFunction } from "./functions/trips-function/resource";
import { Cors, LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Stack } from "aws-cdk-lib";

const backend = defineBackend({
  tripsFunction,
});

const apiStack = backend.createStack("api-stack");
const restApi = new RestApi(apiStack, "RestApi", {
  restApiName: "myRestApi",
  deploy: true,
  // deployOptions: {
  //   stageName: "dev",
  // },
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS,
    allowMethods: Cors.ALL_METHODS,
    allowHeaders: Cors.DEFAULT_HEADERS,
  },
});

// Add trips resource
const tripsLambdaIntegration = new LambdaIntegration(
  backend.tripsFunction.resources.lambda
);
const tripsPath = restApi.root.addResource("trips");
tripsPath.addMethod("GET", tripsLambdaIntegration);

backend.addOutput({
  custom: {
    API: {
      [restApi.restApiName]: {
        endpoint: restApi.url,
        region: Stack.of(restApi).region,
        apiName: restApi.restApiName,
      },
    },
  },
});
