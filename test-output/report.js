$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Customer_Contact_Number_Modification_Functionality.feature");
formatter.feature({
  "name": "Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Contact Number Modification functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_that_i_am_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/InvalidLoginFunctionality_usingExcel.feature");
formatter.feature({
  "name": "Verify Customer Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "I Enter User Id from row number \"\u003crownumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rownumber"
      ]
    },
    {
      "cells": [
        "0"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    },
    {
      "cells": [
        "6"
      ]
    },
    {
      "cells": [
        "7"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"6\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in company site",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_am_in_company_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.click_Customer_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter User Id from row number \"7\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_User_Id_from_row_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Enter_Password_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click Login Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.i_Click_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.InvalidLoginFuctionality_usingExcel.verify_Login_Error_Message_from_row_number()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login%20Feaature%20Validations.feature");
formatter.feature({
  "name": "Verify Customer Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the Login Error Message \"\u003cerror_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password",
        "error_message"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "33333",
        "Invalid username or password!"
      ]
    },
    {
      "cells": [
        "kamal@gmail.com",
        "1234",
        "Invalid username or password!"
      ]
    },
    {
      "cells": [
        "kamal@gmail.com",
        "3333",
        "Invalid username or password!"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"33333\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Login Error Message \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_the_Login_Error_Message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"kamal@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Login Error Message \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_the_Login_Error_Message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Customer Login functionality negative Testing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"kamal@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"3333\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Login Error Message \"Invalid username or password!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_the_Login_Error_Message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Customer Login functionality happy path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.step({
  "name": "Enter User Id as \"\u003cuserId\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I Enter Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userId",
        "password"
      ]
    },
    {
      "cells": [
        "david@gmail.com",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Customer Login functionality happy path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login menu",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customer Login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.click_on_customer_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter User Id as \"david@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.enter_User_Id_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter Password as \"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_Enter_Password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that I am in Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.verify_that_i_am_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Verify_The_Orde_List.feature");
formatter.feature({
  "name": "Verify The Customer Order List",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify The Order List",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in landing page http://it.microtechlimited.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.Customer_Contact_Number_Modification_Functionality.i_am_in_landing_page_http_it_microtechlimited_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Clicked on Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.VerifyTheCustomerOrderList.i_clicked_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Clicked on Customer Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.VerifyTheCustomerOrderList.i_clicked_on_customer_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Entered User Id as divid@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.VerifyTheCustomerOrderList.i_entered_user_id_as_divid_gmail_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Entered Password as 1234",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.VerifyTheCustomerOrderList.i_entered_password_as(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Clicked on Loging Button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.VerifyTheCustomerOrderList.i_clicked_on_loging_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Clicked on Order List",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.VerifyTheCustomerOrderList.i_clicked_on_order_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Order List Text",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.VerifyTheCustomerOrderList.i_verify_the_order_list_text()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cOrder [is ]List\u003e but was:\u003cOrder []List\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step_definitions.VerifyTheCustomerOrderList.i_verify_the_order_list_text(VerifyTheCustomerOrderList.java:56)\r\n\tat ✽.I verify the Order List Text(file:///C:/Java/workspace/class39_SkySchool_Frameowrk_Advanced/src/test/resources/features/Verify_The_Orde_List.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I Logged out from The Page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.VerifyTheCustomerOrderList.i_logged_out_from_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("This is my failure message");
formatter.embedding("image/png", "embedded0.png", "Verify The Order List");
formatter.after({
  "status": "passed"
});
});