describe('Navigate to My Courses View', ()=>{
    
    beforeEach(() => {
      cy.fixture('validUser.json').as('user');
    })

    it('Should visit the website, and login then go to My Courses View', ()=>{
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
    cy.get(':nth-child(4) > .j-between > .icon-section > .icon > .filter-dark-primary').trigger('mouseover', 'center').click()
    cy.wait(4000);
    cy.get('span').contains('My Courses').should('have.text', 'My Courses');
    cy.get('.j-between > .f-row > span.ng-tns-c185-0').should('have.text', 'Ongoing');
    cy.get('.add-course-btn > .ng-tns-c185-0').should('have.text', '+ Add Course');
})
})


