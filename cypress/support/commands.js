// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("addWishlist", (id) => {
    cy.get("[data-test='add-to-wishlist']").eq(id).click();
});

Cypress.Commands.add("removeWishlist", (id) => {
    cy.get("[data-test='remove-from-wishlist']").eq(id).click();
});

Cypress.Commands.add("checkWishlistEmpty", () => {
    cy.get("[data-test='wishlist-empty']").should("exist").and("be.visible");
    cy.get("[data-test='wishlist-item']").should("not.exist");
});

Cypress.Commands.add("checkWishlistNotEmpty", () => {
    cy.get("[data-test='wishlist-empty']").should("not.exist");
    cy.get("[data-test='wishlist-item']").should("exist").and("be.visible");
});