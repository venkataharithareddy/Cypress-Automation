
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../pages/homePage';
import CreateAccountPage from '../../pages/creatingAccount';

Given('I navigate to the page', () => {
  HomePage.visit();
});

When('I click on the Create an Account button on the homepage', () => {
  HomePage.clickCreateAccount();
});

When('I enter a valid first name, last name in personal information', () => {
  CreateAccountPage.fillPersonalInformation('John', 'Doe');
});

When('I enter email address, password, and confirm the password in sign in information', () =>{
  const randomEmail = `john.doe.${Math.random().toString(36).substring(2, 15)}@example.com`;
  CreateAccountPage.fillSignInInformation(randomEmail,'Password@1234', 'Password@1234');
  cy.writeFile('cypress/fixtures/testData.json', {
    existingUser: {
      firstName: 'John',
      lastName: 'Doe',
      email: randomEmail,
      password: 'Password@1234'
    }
  });
})

When('I click on the Create account button', () => {
  CreateAccountPage.submitForm();
});

Then('I should see a confirmation message {string}', (msg) => {
  CreateAccountPage.getConfirmationMessage(msg)
});

Then('I should be redirected to the My Account page', () => {
  cy.url().should('include', '/customer/account');
});



When('I enter a previously used email address and valid first name, last name, and password', () => {
  cy.fixture('testData').then((data) => {
    CreateAccountPage.fillPersonalInformation(data.existingUser.firstName, data.existingUser.lastName);
    CreateAccountPage.fillSignInInformation( data.existingUser.email,data.existingUser.password, data.existingUser.password);
  });
});

When('I am on the Create an Account page', () =>{
   HomePage.visit();
   HomePage.clickCreateAccount();
})

When('I enter a valid email address, first name, and last name', () => {
  const randomEmail = `john.doe.${Math.random().toString(36).substring(2, 15)}@example.com`;
  CreateAccountPage.fillPersonalInformation('John', 'Doe', randomEmail);
});

When('I enter a password {string} which is shorter than the minimum required length', (password) => {
  const randomEmail = `john.doe.${Math.random().toString(36).substring(2, 15)}@example.com`;
  CreateAccountPage.fillPersonalInformation('John', 'Doe');
  CreateAccountPage.fillSignInInformation(randomEmail,password, password);
});

When('I enter a weak password {string} that doesn\'t meet complexity requirements', (password) => {
  const randomEmail = `john.doe.${Math.random().toString(36).substring(2, 15)}@example.com`;
  CreateAccountPage.fillPersonalInformation('John', 'Doe');
  CreateAccountPage.fillSignInInformation(randomEmail,password, password);
});

When('I enter a medium password {string} that doesn\'t meet the complexity requirements but is still valid', (password) => {
  const randomEmail = `john.doe.${Math.random().toString(36).substring(2, 15)}@example.com`;
  CreateAccountPage.fillPersonalInformation('John', 'Doe');
  CreateAccountPage.fillSignInInformation(randomEmail,password, password);
});

When('I enter an invalid email address format and valid first name, last name, and password', () =>{
  CreateAccountPage.fillPersonalInformation('John', 'Doe');
  CreateAccountPage.fillSignInInformation('abc@.com','Pass@1234', 'Pass@1234');
})     

When('I enter a password and a different password in the Confirm Password field', () =>{
  const randomEmail = `john.doe.${Math.random().toString(36).substring(2, 15)}@example.com`;
  CreateAccountPage.fillPersonalInformation('John', 'Doe');
  CreateAccountPage.fillSignInInformation(randomEmail,'Pass@1234', 'Pass@14');
})

When('I leave the required first filed empty', () =>{
  const randomEmail = `john.doe.${Math.random().toString(36).substring(2, 15)}@example.com`;
  CreateAccountPage.fillSignInInformation(randomEmail,'Pass@1234', 'Pass@1234');
})


Then('I should see an error message {string}', (errorMessage) => {
  CreateAccountPage.getErrorMessage(errorMessage)
});

Then('I should see an error message for first name {string}', (errorMessage) =>{
  CreateAccountPage.getFirstNameError(errorMessage)
})

Then('I should see an error message for password {string}', (errorMeaage) =>{
    CreateAccountPage.getPasswordErrorMessage(errorMeaage)

})

Then('I should see an error message for email {string}', (errorMessage) =>{
  CreateAccountPage.getMailErrorMesage(errorMessage)
})

Then('I should see an error message for confirm password {string}',(errorMessage) =>{
  CreateAccountPage.gertPasswordConformationError(errorMessage);
})

Then('the account should not be created', () => {
  cy.url().should('not.include', '/customer/account');
});

When('I enter a invalid first name and a valid last name, email address, and password', ()=>{
 const randomEmail = `john.doe.${Math.random().toString(36).substring(2, 15)}@example.com`;
  CreateAccountPage.fillPersonalInformation('John@#$', 'Doe');
  CreateAccountPage.fillSignInInformation(randomEmail,'Pass@1234', 'Pass@1234');
})

