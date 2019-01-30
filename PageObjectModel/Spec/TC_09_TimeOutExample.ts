import { browser, element } from "protractor";
import { By } from "selenium-webdriver";

describe("timeoutex", function()
{
    browser.ignoreSynchronization=true
    browser.manage().timeouts().pageLoadTimeout(3000)
    browser.manage().window().maximize();

    it("timeoutex", function(){

        browser.get("http://www.google.com");
        browser.sleep(3000)
        //element(By.id("xyx")).click();

    })
})