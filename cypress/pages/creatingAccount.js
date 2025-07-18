
class CreateAccountPage {

  fillPersonalInformation(firstName, lastName) {
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
   
  }

  fillSignInInformation(email,password, confirmPassword) {
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(confirmPassword);
  }

  submitForm() {
    cy.get('[title="Create an Account"]').click();
  }

  getErrorMessage(errorMessage) {
    return  cy.get('.message-error').should('contain', errorMessage)
  }
getPasswordErrorMessage(errorMessage){
  return cy.get('#password-error').should('contain', errorMessage)
}

getFirstNameError(errorMessage){
  return cy.get('#firstname-error').should('contain', errorMessage)
}

getMailErrorMesage(errorMessage){
  return cy.get('#email_address-error').should('contain', errorMessage)
}
gertPasswordConformationError(errorMessage){
  return cy.get('#password-confirmation-error').should('contain', errorMessage)
}

  getConfirmationMessage(successMessage) {
    return cy.get('.message-success').should('contain', successMessage)
  }

  getEmailErrorMessage(errorMessage) {
    return cy.get('#email_address-error').should('contain', errorMessage)
  }

  getConfirmPasswordErrorMessage(errorMessage) {
    return cy.get('#password-confirmation-error').should('contain', errorMessage);
  }

  getFirstNameErrorMessage(errorMessage) {
    return cy.get('#firstname-error').should('contain', errorMessage);
  }
}

export default new CreateAccountPage();
