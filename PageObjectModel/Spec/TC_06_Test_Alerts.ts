import {browser,element,by} from "protractor";
import { HandleAlerts } from "../utils/HandleAlerts";

describe('Handling alerts', function()
{
    beforeEach(function(){

    })

    browser.ignoreSynchronization=true;
    it('Alerts testing',function(){

        browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
        browser.manage().window().maximize();
        //browser.switchTo().alert().accept()
        // While creating the object of class
        // let handlealerts= new HandleAlerts()
        HandleAlerts.acceptAlerts(element(by.name("prompt")));
       // HandleAlerts.getAlertText();
        browser.sleep(3000);
    });
});