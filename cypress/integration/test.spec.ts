describe('Check domains', () => {
    it('Home page', () => {
        cy.visit('https://google.com');
        cy.contains('body');
        cy.matchImageSnapshot();
    });
});
