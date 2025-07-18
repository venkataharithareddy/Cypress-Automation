
class HomePage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  }

  clickCreateAccount() {
    cy.contains("Create an Account").click()
  }
  
  clickSignIn(){
    cy.contains('Sign In').click()
  }
}

export default new HomePage();
