describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
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

  it("A user can list all business trips", () => {
    cy.get("[data-test='app-title']").should(
      "have.text",
      "Welcome to biztrips Happy new Year-react - 2024"
    );
    cy.get("[data-test='trip-item']").should("have.length", 2);
  });

  it("A user can filter the list of business trips by month", () => {
    cy.get("[data-test='filter-month']").select("1");
    cy.get("[data-test='trip-item']").should("have.length", 1);
    cy.get("[data-test='filter-month']").select("2");
    cy.get("[data-test='trip-item']").should("have.length", 0);
  });

  it("A user can add a business trip to his wishlist", () => {
    cy.checkWishlistEmpty();
    cy.addWishlist(0);
    cy.checkWishlistNotEmpty();
    cy.get("[data-test='wishlist-item']").eq(0).should("contain.text", "BT01");
  });

  it("A user can remove a business trip from his wishlist", () => {
    cy.addWishlist(1);
    cy.checkWishlistNotEmpty();
    cy.removeWishlist(0);
    cy.checkWishlistEmpty();
  });

  it("A user can remove all business trips from his wishlist", () => {
    cy.addWishlist(0);
    cy.addWishlist(1);
    cy.checkWishlistNotEmpty();
    cy.get("[data-test='clear-wishlist']").click();
    cy.checkWishlistEmpty();
  });

  it("A user can add a business trip just once", () => {
    cy.addWishlist(0);
    cy.addWishlist(0);
    cy.get("[data-test='wishlist-item']")
      .should("contain.text", "BT01")
      .and("have.length", 1);
  });
});
