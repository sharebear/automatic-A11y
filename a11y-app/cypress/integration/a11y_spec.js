beforeEach(() => {
  cy.visit("http://localhost:3000");

  cy.injectAxe();
  cy.configureAxe({
    rules: [
      {
        id: "landmark-one-main",
        enabled: false,
      },
      {
        id: "page-has-heading-one",
        enabled: false,
      },
    ],
  });
});

describe("Todo app", () => {
  it("Should be accessible", () => {
    cy.checkA11y();
  });

  it("Should still be accessible after adding todos", () => {
    cy.get('.input').type('First TODO')
    cy.get('[type="submit"]').click()

    cy.get('.input').type('Another TODO')
    cy.get('[type="submit"]').click()

    cy.checkA11y();
  });
});
