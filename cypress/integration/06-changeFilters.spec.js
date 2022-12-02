describe('Change view filtration', ()=>{
    
    beforeEach(() => {
      cy.fixture('validUser.json').as('user');
    })

    it('Should visit the website, and login then go to My Courses View then preview a course, then goes back via breadcrumb', ()=>{
       cy.viewport('macbook-16') ;
       cy.visit('https://dev2.quizplusdev.com/'),{
        failOnStatusCode: false,
        auth:{
          username :  "testuser",
          password : "quiz@123"
    }}
    cy.get('#header-log-in').click();  
    cy.get('form.ng-invalid > .d-flex > .btn').click();
    cy.get('@user').then(user =>{
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    });
    cy.wait(4000);
    cy.get(':nth-child(4) > .j-between > .icon-section > .icon > .filter-dark-primary').trigger('mouseover', 'center').click();
    cy.wait(2000);
    cy.get('.f-row > app-dropdown.ng-tns-c185-0 > .dropdown-comp > .btn > .rotate-z180').click();
    cy.get('.f-row > app-dropdown.ng-tns-c185-0 > .dropdown-comp > .dropdown-body > :nth-child(1)').click();
    cy.get('.j-between > .f-row > span.ng-tns-c185-0').should('have.text','All');
    cy.get('.f-row > app-dropdown.ng-tns-c185-0 > .dropdown-comp > .btn > .rotate-z180').click();
    cy.get('app-dropdown.ng-tns-c185-0 > .dropdown-comp > .dropdown-body > :nth-child(3)').click();
    cy.get('.j-between > .f-row > span.ng-tns-c185-0').should('have.text','Archived');
    cy.get('.f-row > app-dropdown.ng-tns-c185-0 > .dropdown-comp > .btn > .rotate-z180').click();
    cy.get('.f-row > app-dropdown.ng-tns-c185-0 > .dropdown-comp > .dropdown-body > :nth-child(2)').click();
    cy.get('.j-between > .f-row > span.ng-tns-c185-0').should('have.text','Ongoing');


})
})
