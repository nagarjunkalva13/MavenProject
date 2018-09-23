$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/SeleniumTrg/MavenProject/src/test/java/POMM/MavenProject/L2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "##@tag"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "title-of-your-feature;login-as-a-authenticated-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "When "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;login-as-a-authenticated-user;",
  "rows": [
    {
      "cells": [
        "username",
        "Password"
      ],
      "line": 31,
      "id": "title-of-your-feature;login-as-a-authenticated-user;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 32,
      "id": "title-of-your-feature;login-as-a-authenticated-user;;2"
    },
    {
      "cells": [
        "admin1",
        "admin1"
      ],
      "line": 33,
      "id": "title-of-your-feature;login-as-a-authenticated-user;;3"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 34,
      "id": "title-of-your-feature;login-as-a-authenticated-user;;4"
    },
    {
      "cells": [
        "admin1",
        "admin1"
      ],
      "line": 35,
      "id": "title-of-your-feature;login-as-a-authenticated-user;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "title-of-your-feature;login-as-a-authenticated-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \"admin\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_url()"
});
formatter.result({
  "duration": 18362998161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin",
      "offset": 25
    }
  ],
  "location": "StepDefination.user_enters_username_and_Password(String,String)"
});
formatter.result({
  "duration": 1640994970,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.success_message_is_displayed()"
});
formatter.result({
  "duration": 132805,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1477604632,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "title-of-your-feature;login-as-a-authenticated-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \"admin1\" and \"admin1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_url()"
});
formatter.result({
  "duration": 16786458521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin1",
      "offset": 13
    },
    {
      "val": "admin1",
      "offset": 26
    }
  ],
  "location": "StepDefination.user_enters_username_and_Password(String,String)"
});
formatter.result({
  "duration": 1823561689,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.success_message_is_displayed()"
});
formatter.result({
  "duration": 77509,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 329831409,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "title-of-your-feature;login-as-a-authenticated-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "Enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \"admin\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "close the browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.enter_url()"
});
