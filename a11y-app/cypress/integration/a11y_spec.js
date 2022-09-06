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
});
