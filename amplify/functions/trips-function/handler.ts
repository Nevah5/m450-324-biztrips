import type { Handler } from "aws-lambda";

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: [
      {
        id: 1,
        title: "BT01",
        description:
          "San Francisco World Trade Center on new Server/IOT/Client ",
        startTrip: [2021, 1, 13, 0, 0],
        endTrip: [2021, 2, 15, 16, 56],
        meetings: [
          {
            id: 1,
            title: "One Conference",
            description: "Key Note on One Conference",
          },
          {
            id: 2,
            title: "Zero Conference",
            description: "Workshop Zero on One Conference",
          },
        ],
      },

      {
        id: 2,
        title: "BT02",
        description: "Santa Clara Halley on new Server/IOT/Client",
        startTrip: [2021, 3, 23, 9, 0],
        endTrip: [2021, 6, 27, 16, 56],
        meetings: [
          {
            id: 3,
            title: "One Conference",
            description: "HandsOn on One Conference",
          },
          {
            id: 4,
            title: "One Conference",
            description: "Key Note on One Conference",
          },
        ],
      },
      {
        id: 3,
        title: "BT03",
        description: "San Cose City Halley on Docker/IOT/Client",
        startTrip: [2021, 2, 13, 9, 0],
        endTrip: [2021, 3, 15, 16, 56],
        meetings: [
          {
            id: 5,
            title: "One Conference",
            description: "Key Note on One Conference",
          },
        ],
      },

      {
        id: 4,
        title: "BT04",
        description: "San Mateo City Halley on Docker/IOT/Client",
        startTrip: [2023, 1, 13, 9, 0],
        endTrip: [2023, 2, 15, 16, 56],
        meetings: [
          {
            id: 6,
            title: "One Conference",
            description: "Key Note on One Conference",
          },
        ],
      },
    ],
  };
};
