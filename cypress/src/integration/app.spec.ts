export const app =
  'Step: ' +
  Cypress.config()
    .integrationFolder.split('\\')
    .find(pathSegment => /[0-9]/.test(pathSegment));

describe(app, () => {
  before(() => {
    cy.visit('/');
  });
  it('should display a proper heading', () => {
    cy.get('h1').contains('My First Angular App');
  });
});
