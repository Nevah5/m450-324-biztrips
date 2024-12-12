const { default: TripList } = require("../../src/components/TripList");

describe("TripList.cy.js", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/trips", {
      statusCode: 200,
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
      ],
    });
  });

  it("can render TripList", () => {
    cy.mount(<TripList />);
    cy.get("[data-test='triplist-header']").should(
      "have.text",
      "Triplist-Catalog"
    );
  });

  it("should display trips in catalog", () => {
    cy.mount(<TripList />);
    cy.get("[data-test='trip-item']").should("have.length", 2);
  });

  it("can add trip to wishlist", () => {
    cy.mount(<TripList addToWishlist={cy.stub().as("addToWishlist")} />);
    cy.addWishlist(0);
    cy.get("@addToWishlist").should("have.been.called");
  });

  it("should filter trips by month", () => {
    cy.mount(<TripList />);
    cy.get("[data-test='trip-item']").should("have.length", 2);
    cy.get("[data-test='filter-month']").select(1);
    cy.get("[data-test='trip-item']").should("have.length", 1);
  })
});
