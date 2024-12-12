const { default: Wishlist } = require("../../src/components/Wishlist");

describe("Wishlist.cy.jsx", () => {
  it("can render Wishlist", () => {
    cy.mount(
      <Wishlist
        key={1}
        wishlist={[
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
        ]}
      />
    );
    cy.get("[data-test='wishlist-header']").should("contain.text", "Wishlist");
  });

  it("should display business trips in wishlist", () => {
    cy.mount(
      <Wishlist
        key={1}
        wishlist={[
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
        ]}
      />
    );
    cy.get("[data-test='wishlist-body']").find("[data-test='wishlist-item']").should("have.length", 1);
  });

  it("can remove a business trip from the wishlist", () => {
    cy.mount(
      <Wishlist
        key={1}
        wishlist={[
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
        ]}
        removeFromWishlist={cy.stub().as("removeFromWishlist")}
      />
    );
    cy.removeWishlist(0);
    cy.get("@removeFromWishlist").should("have.been.called");
  });

  it("can remove all business trips from the wishlist", () => {
    cy.mount(
      <Wishlist
        key={1}
        wishlist={[
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
        ]}
        clearWishlist={cy.stub().as("clearWishlist")}
      />
    );

    cy.get("[data-test='clear-wishlist']").click();
    cy.get("@clearWishlist").should("have.been.called");
  });
});
