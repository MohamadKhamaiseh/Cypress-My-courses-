describe('Add a new course ', ()=>{
    
    beforeEach(() => {
      cy.fixture('validUser.json').as('user');
    })

    it('Should visit the website, and login then go to My Courses View then add a new course', ()=>{
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
    cy.get('.add-course-btn').click()
    cy.wait(4000);
    cy.get('[placeholder= "Please Enter your University/School name"]').last().type('s');
    cy.wait(2000);
    cy.get('[id= "option_Smith College"]').click();
    cy.get('[placeholder= "Please Enter course number"]').last().type('s');
    cy.get('[id= "option_ARS 268"]').click();
    cy.get('qp-dropdown.ng-tns-c182-2 > .sm-scroll > .select-body > .arrow').click();
    cy.get('qp-dropdown.ng-tns-c182-2 > .sm-scroll > .options-container > .options > :nth-child(1) > .ellipsis').click();
    cy.get('app-calender.ng-tns-c182-2 > .input-wrapper > img').click();
    cy.get('app-calender.ng-tns-c182-2 > .calender > .months-body > :nth-child(1)').click();
    cy.get('app-add-new-course.ng-tns-c182-2 > .add-course-modal > :nth-child(2) > .remaining-section > .course-btn').click();
    cy.get('.msg-title').should('have.text','ARS 268 Course was added successfully to Fall Semester');    
})
})


