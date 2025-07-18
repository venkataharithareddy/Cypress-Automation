
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../pages/homePage';
import SignInpage from "../../pages/SignInpage";

When('I entered already registered mail and password',()=>{
cy.fixture('testData').then((data) => {
SignInpage.fillSignInInformation( data.existingUser.email,data.existingUser.password, data.existingUser.password);
})
})
Then('I click on the Sign In button',()=>{
    HomePage.clickSignIn()
})

When('I click on Sign In after filling the details', ()=>{
  SignInpage.clickSignIn()
})

When('I enter new email address, password, and confirm the password in sign in information', () =>{
  const randomEmail = `john.doe.${Math.random().toString(36).substring(2, 15)}@example.com`;
  SignInpage.fillSignInInformation(randomEmail,'Password@1234', 'Password@1234');
 
})