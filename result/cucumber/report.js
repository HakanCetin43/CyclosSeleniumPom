$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/LogInPage.feature");
formatter.feature({
  "name": "CyclosBank login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "The user cannot login with an invalid username and/or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad"
    }
  ]
});
formatter.step({
  "name": "the user navigates to \"https://demo.cyclos.org/#login\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "the user views errorMessage \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ]
    },
    {
      "cells": [
        "demo",
        "12345",
        "The given name / password are incorrect. Please, try again"
      ]
    },
    {
      "cells": [
        "demooo",
        "1234",
        "The given name / password are incorrect. Please, try again"
      ]
    },
    {
      "cells": [
        "demo",
        "",
        "Password is required"
      ]
    },
    {
      "cells": [
        "",
        "1234",
        "Login name is required"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Login name is required\nPassword is required"
      ]
    }
  ]
});
formatter.scenario({
  "name": "The user cannot login with an invalid username and/or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"https://demo.cyclos.org/#login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserNavigatesTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters username \"demo\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserClicksSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user views errorMessage \"The given name / password are incorrect. Please, try again\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserViewsErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user cannot login with an invalid username and/or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"https://demo.cyclos.org/#login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserNavigatesTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters username \"demooo\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserClicksSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user views errorMessage \"The given name / password are incorrect. Please, try again\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserViewsErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user cannot login with an invalid username and/or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"https://demo.cyclos.org/#login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserNavigatesTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters username \"demo\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters password \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserClicksSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user views errorMessage \"Password is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserViewsErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user cannot login with an invalid username and/or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"https://demo.cyclos.org/#login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserNavigatesTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters username \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters password \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserClicksSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user views errorMessage \"Login name is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserViewsErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user cannot login with an invalid username and/or password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sad"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"https://demo.cyclos.org/#login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserNavigatesTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters username \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters password \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserEntersPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserClicksSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user views errorMessage \"Login name is required\nPassword is required\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.MyStepdefs.theUserViewsErrorMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});