Feature: CyclosBank login page

  @Happy
  Scenario: The user logs in with a valid username and password
    Given the user navigates to "https://demo.cyclos.org/#login"
    When the user enters username "demo"
    And the user enters password "1234"
    And the user clicks sign in button
    Then the user views "Welcome to the Cyclos4 Demo"

  @Sad
  Scenario Outline: The user cannot login with an invalid username and/or password
    Given the user navigates to "https://demo.cyclos.org/#login"
    When the user enters username "<username>"
    And the user enters password "<password>"
    And the user clicks sign in button
    Then the user views errorMessage "<errorMessage>"
    Examples:
      | username | password | errorMessage                                               |
      | demo     | 12345    | The given name / password are incorrect. Please, try again |
      | demooo   | 1234     | The given name / password are incorrect. Please, try again |
      | demo     |          | Password is required                                       |
      |          | 1234     | Login name is required                                     |
      |          |          | Login name is required\nPassword is required               |


  Scenario: Demo makes a successful payment to the Coffee corner
    Given the user navigates to "https://demo.cyclos.org/#login"
    When the user enters username "demo"
    And the user enters password "1234"
    And the user clicks sign in button
    And the user clicks pay user
    And the user clicks Contact
    And the user selects "The Coffee corner" from contact
    And the user enters "100" to amount area
    And the user types "haziran bursu, gule gule harca" to description
    And the user clicks submit
    And the user clicks confirm
    Then the user views "The payment was successful" on transfer page


