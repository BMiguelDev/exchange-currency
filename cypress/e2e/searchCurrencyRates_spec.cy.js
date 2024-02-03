/* eslint-disable no-undef */

// End to End test covering the main application feature: starting with an empty list, submitting an 
// input, selecting a currency, and being presented with a list of exchanged currencies, and
// subsequently changing the selected currency and being presented with the new and different list 
// of exchanged currencies
describe('search currency rates', () => {
    it('input a value, select currency, get currency exchange rates, then change selected currency and get new currency exchange rates', () => {
        // Go to App's starting page
        cy.visit('/');

        // Upon first seeing the page, there should be no exchange rates list visible, and informative paragraph should be visible
        cy.findByRole('list').should('not.exist');
        cy.findByText(/enter an amount to check the rates/i).should('be.visible');

        // Type a value in the input element
        cy.findByRole('textbox').should('be.visible').type('123');

        // Choose a currency in the select element
        cy.get('.react-select__control').should('be.visible') // find react-select component     
            .click() // click to open the dropdown
            .get('.react-select__menu') // find open dropdown option menu
            .find('.react-select__option') // find all options
            .first() 
            .click() // click on the first option, which should be "EUR"

        // Assert that a list of exchanged currency rates has been shown and that it has rows of exchanged rates
        cy.findByRole('list').should('be.visible');
        cy.findAllByRole('listitem').should('have.length.of.at.least', 1);

        // Assert that the first row of exchanged rates has a currency info of "USD"
        cy.get(`[aria-label="currency_info"]`).children().first().next().should('contain', 'USD');

        // Now choose the "USD" currency in the select element
        cy.get('.react-select__control') // find react-select component      
            .click() // click to open the dropdown
            .get('.react-select__menu') // find open dropdown option menu
            .find('.react-select__option') // find all options
            .first() 
            .click() // click on the first option, which should now be "USD"

        // After selecting a currency, list should disappear momentarily while it loads new exchange rates
        cy.findByRole('list').should('not.exist');

        // Assert that, after .5s passed (allowing for debounce mechanism to trigger API call) the first row of exchanged rates now has changed to have a currency different than "USD"
        cy.wait(500).get(`[aria-label="currency_info"]`).children().first().next().should('not.contain', 'USD');
    })
})
