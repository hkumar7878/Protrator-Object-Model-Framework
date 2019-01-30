import { browser, element,by } from "protractor";
import {ExpectedConditions as ec} from "protractor";
import { genericUtil } from "../utils/genericUtil";

describe("Explicit wait ex" , function(){


browser.ignoreSynchronization=true    
it("Explicit wait example", function(){

    browser.get("https://chercher.tech/practice/explicit-wait-sample-selenium-webdriver");
    browser.manage().window().maximize();
   // element(by.id("populate-text")).click()
   // browser.wait(ec.textToBePresentInElement(element(by.className('target-text')),"Selenium Webdriver")
    //,11000)
   
    //element(by.id("display-other-button")).click()
    //browser.wait(ec.elementToBeClickable(element(by.id("hidden"))),11000)
    
        genericUtil.clickElement(element(by.id("ch")))


})
})