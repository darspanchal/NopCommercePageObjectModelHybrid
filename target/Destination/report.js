$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/Features/addtocart.feature");
formatter.feature({
  "name": "verify Add To Cart Button Is Present On All Featured Product",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Add To Cart Button Is Present On All Featured Product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addtocart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "verify Add To Cart Button Is Present On All Featured Product",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.verifyAddToCartButtonIsPresentOnAllFeaturedProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All product has add to cart option",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.allProductHasAddToCartOption()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/Features/comapre.feature");
formatter.feature({
  "name": "User Should be Able to Compare Two Different Product Successfully,",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User Should Able To Compare Products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@compare"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userisOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on DigitalDownloads button",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnDigitalDownloadsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on add to compare list for item",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnAddToCompareListForItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on add to compare list for item",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnAddToCompareListForItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on product comparision from green navigation bar",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnProductComparisionFromGreenNavigationBar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to compare product page",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userShouldNavigateToCompareProductPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/Features/comment.feature");
formatter.feature({
  "name": "guestUserShouldBeAbleToAddNewComment",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "guestUserShouldBeAbleToAddNewComment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@comment"
    }
  ]
});
formatter.uri("file:src/test/Resources/Features/currencychange.feature");
formatter.feature({
  "name": "user should be able to verify currency change successfully",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user should be able to see currency change in products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@currencyChange"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user can change currency",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userCanChangeCurrency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see price changed with symbol change",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userShouldBeAbleToSeePriceChangedWithSymbolChange()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\t$ not foundЂ1032.00 expected [true] but found [false],\n\t$ not foundЂ1548.00 expected [true] but found [false],\n\t$ not foundЂ210.70 expected [true] but found [false],\n\t$ not foundЂ21.50 expected [true] but found [false]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:47)\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:31)\r\n\tat WebTest9.ChangeCurrency.verifyCurrency(ChangeCurrency.java:26)\r\n\tat WebTest9.MyStepdefs.userShouldBeAbleToSeePriceChangedWithSymbolChange(MyStepdefs.java:166)\r\n\tat ✽.user should be able to see price changed with symbol change(file:///C:/Users/pdars/IdeaProjects/NopCommercePageObjectModelHybrid/./src/test/Resources/Features/currencychange.feature:5)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/Features/guestusercheckout.feature");
formatter.feature({
  "name": "verifyGuestUserShouldBeAbleToCheckOutSuccessfully",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify Guest User Should Be Able To Checkout Successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@guestusercheckout"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click on jewelry on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnJewelryOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on add to cart on any product",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnAddToCartOnAnyProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the guest details",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.enterTheGuestDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Shipping Address",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.enterShippingAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter choose payment detail \u0026 checkout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.enterChoosePaymentDetailCheckoutSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/Features/hightolow.feature");
formatter.feature({
  "name": "UserShouldBeAbleToSortProductHighToLowByPrice",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "UserShouldBeAbleToSortProductHighToLowByPrice",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hightolow"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on computer categories",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnComputerCategories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see price arranged from High To low",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userAbleToSeePriceArrangedFromHighToLow()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/Features/nonuserrefer.feature");
formatter.feature({
  "name": "Non Registered user can not refer product to friend",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Non Registered user can not refer product to friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@nonuserrefer"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on notebooks from sub-categories",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnNotebooksFromSubCategories()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User refer to a friend",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userReferToAFriend()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Non register user can not refer a friend",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.nonRegisterUserCanNotReferAFriend()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/Features/registeruserreffering.feature");
formatter.feature({
  "name": "Registered user refer product to friend Successfully",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Registered user refer product to friend",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@registeruserreffering"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on registration button",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnRegistrationButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter email address \u0026 password",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userEnterEmailAddressPassword()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"FirstName\"}\n  (Session info: chrome\u003d78.0.3904.70)\n  (Driver info: chromedriver\u003d78.0.3904.70 (edb9c9f3de0247fd912a77b7f6cae7447f6d3ad5-refs/branch-heads/3904@{#800}),platform\u003dWindows NT 6.2.9200 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JAF229B\u0027, ip: \u0027192.168.0.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49203}, handlesAlerts: true, hasMetadata: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 78.0.3904.70, webStorageEnabled: true, webdriver.remote.sessionid: 5785ddb6f92a4015ba92250837a...}\nSession ID: 5785ddb6f92a4015ba92250837af4936\n*** Element info: {Using\u003did, value\u003dFirstName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat WebTest9.Utils.sendText(Utils.java:41)\r\n\tat WebTest9.RegistrationPage.userEntersRegistrationDetails(RegistrationPage.java:27)\r\n\tat WebTest9.MyStepdefs.userEnterEmailAddressPassword(MyStepdefs.java:100)\r\n\tat ✽.User enter email address \u0026 password(file:///C:/Users/pdars/IdeaProjects/NopCommercePageObjectModelHybrid/./src/test/Resources/Features/registeruserreffering.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on computers",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnComputers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on item",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnItem()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on email a friend button",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.clickOnEmailAFriendButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter friend\u0027s email address \u0026 password",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.enterFriendSEmailAddressPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is able to refer successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userIsAbleToReferSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/Features/registration.feature");
formatter.feature({
  "name": "User should able to register successfully,",
  "description": "  So that he can use all user features from our website",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should able to register",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on register page",
  "keyword": "Given "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userIsOnRegisterPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters all registration details",
  "keyword": "When "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userEntersAllRegistrationDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on registration button",
  "keyword": "And "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userClicksOnRegistrationButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "WebTest9.MyStepdefs.userShouldAbleToRegisterSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});