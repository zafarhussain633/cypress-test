describe("test button", ()=>{
    it("clicking navigate to dashobard" , ()=>{
        cy.visit("http://localhost:3000/")
        cy.get('[data-cy="submit"]').click()	
        cy.url().should('include', '/dashboard')
        cy.contains("deeplinking")
    })
})