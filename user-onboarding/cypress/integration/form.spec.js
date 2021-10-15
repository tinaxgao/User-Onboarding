describe("user onboarding app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  const foobarInput = () => cy.get("input[name=foobar]");
  const nameInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const tosInput = () => cy.get("input[name=tos]");
  const passwordInput = () => cy.get("input[name=password]");
  const submitBtn = () => cy.get("button");

  it("sanity check", () => {
    //"it" is a test. "expect" is an assertion
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({}); //strict ===
    expect({}).to.eql({}); //not strict ==
  });

  it("the proper elements are showing", () => {
    nameInput().should("exist");
    foobarInput().should("not.exist");
    emailInput().should("exist");
    submitBtn().should("exist");
    tosInput().should("exist");
    cy.contains("Submit").should("exist");
    cy.contains(/submit/i).should("exist");
  });

  it("can type in & submit each input type", () => {
    nameInput()
      .should("have.value", "")
      .type("itsamemario")
      .should("have.value", "itsamemario");
    emailInput()
      .should("have.value", "")
      .type("mario@plumber.com")
      .should("have.value", "mario@plumber.com");
    passwordInput()
      .should("have.value", "")
      .type("password123")
      .should("have.value", "password123");
    tosInput().check();
    submitBtn().click();
    cy.contains("itsamemario");
  });

  it('you cannot submit if form is empty', () => {
    nameInput().type('tina');
    submitBtn().should('be.disabled');
})

});
