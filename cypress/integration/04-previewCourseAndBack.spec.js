describe('Preview a course, then back', ()=>{
    
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
    cy.get(':nth-child(4) > .j-between > .icon-section > .icon > .filter-dark-primary').trigger('mouseover', 'center').click()
    cy.wait(4000);
    cy.get(':nth-child(2) > .course-card > .add-course > app-dropdown > .dropdown-comp > .btn > .rotate-z180').click();
    cy.get('#semester_154 > .ng-trigger > .course-body > :nth-child(2) > .course-card > .add-course > app-dropdown > .dropdown-comp > .dropdown-body > a.dropdown-item-menu').click();
    cy.get('h1.ng-star-inserted').should('have.text','Topcs/ Printmkng-Beyond Prnt S');
    cy.wait(2000); 
    cy.get('.breadcrumb-link').click();
    cy.get('span').contains('My Courses').should('have.text', 'My Courses');  
})
})


