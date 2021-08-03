/* eslint-disable no-undef */

describe('Shortener page', () => {
    it('displays input field and a submit button', () => {
        cy.visit('http://localhost:3000/');

        cy.get('[data-testid="shorten-input"]').should('exist').should('have.attr', 'placeholder', 'Url to shorten');
        cy.get('[data-testid="button-submit"]').should('exist').contains('Shorten and copy URL');
    });

    it('validates input of user', () => {
        cy.get('[data-testid="shorten-input"]').type('link');
        cy.get('[data-testid="button-submit"]').click();
        cy.get('[data-testid="message-component"]').should('exist').contains('This URL is not valid');
    });

    it('shortens the link', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-testid="shorten-input"]').type('https://airbnb.com/experiences/921570?_set_bev_on_new_domain=1627567197_MDEwOGU0ZjBlYjJh');
        cy.get('[data-testid="button-submit"]').click();
        cy.get('[data-testid="message-component"]').should('exist').contains('Congrats! Your short link is ready and copied in clipboard!');
    });
});
