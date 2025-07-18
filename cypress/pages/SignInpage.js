class SignInPage {

  fillSignInInformation(email,password, confirmPassword) {
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
  }

   clickSignIn(){
     cy.get('#send2').click()
   }
}

export default new SignInPage();