Feature: Account Creation and Sign In

  Scenario: Successful account creation
    Given I navigate to the page
    When I click on the Create an Account button on the homepage
    And I enter a valid first name, last name in personal information
    And I enter email address, password, and confirm the password in sign in information
    And I click on the Create account button
    Then I should see a confirmation message 'Thank you for registering'
    And I should be redirected to the My Account page

  Scenario: User attempts to sign up with an existing email address
    Given I navigate to the page
    When I click on the Create an Account button on the homepage
    When I enter a previously used email address and valid first name, last name, and password
    And I click on the Create account button
    Then I should see an error message "There is already an account with this email address."

  Scenario: User tries to create an account with a password that is too short
    Given I am on the Create an Account page
    And I enter a valid first name, last name in personal information
    And I enter a password "123" which is shorter than the minimum required length
    And I click on the Create account button
    Then I should see an error message for password "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored."

  Scenario: User tries to create an account with a weak password
    Given I am on the Create an Account page
    When I enter a valid email address, first name, and last name
    And I enter a weak password "passwordPassword" that doesn't meet complexity requirements
    And I click on the Create account button
    Then I should see an error message for password "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."

  Scenario: User tries to create an account with a medium password
    Given I am on the Create an Account page
    When I enter a valid email address, first name, and last name
    And I enter a medium password "Pass@123" that doesn't meet the complexity requirements but is still valid
    And I click on the Create account button
    Then I should see a confirmation message 'Thank you for registering'
    And I should be redirected to the My Account page

  Scenario: User attempts to sign up with an invalid email address
    Given I am on the Create an Account page
    When I enter an invalid email address format and valid first name, last name, and password
    And I click on the Create account button
    Then I should see an error message for email "Please enter a valid email address (Ex: johndoe@domain.com)."

  Scenario: User attempts to sign up with mismatched passwords
    Given I am on the Create an Account page
    When I enter a valid email address, first name, and last name
    And I enter a password and a different password in the Confirm Password field
    And I click on the Create account button
    Then I should see an error message for confirm password "Please enter the same value again."

  Scenario: User attempts to register without filling required fields
    Given I am on the Create an Account page
    When I leave the required first field empty
    And I click on the Create account button
    Then I should see an error message for first name "This is a required field."

  Scenario: User tries to create an account with special characters in the name
    Given I am on the Create an Account page
    When I enter an invalid first name and a valid last name, email address, and password
    And I click on the Create account button
    Then I should see an error message "First Name is not valid!"

  Scenario: User successfully logs in after registration
    Given I navigate to the page
    And I click on the Sign In button
    And I enter already registered mail and password
    And I click on Sign In after filling the details
    Then I should be redirected to the My Account page

  Scenario: User attempts to sign in with a non-registered email address
    Given I navigate to the page
    And I click on the Sign In button
    And I enter new email address, password, and confirm the password in sign in information
    And I click on Sign In after filling the details
    Then I should see an error message "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
