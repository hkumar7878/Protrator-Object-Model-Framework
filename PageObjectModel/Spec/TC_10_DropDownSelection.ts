import { browser, element, By } from "protractor";
import {DropDown_Util} from "..//utils//DropDown_Util"


describe("Drop down ex", function(){


    it("drop down ex", function(){
        browser.manage().window().maximize()

        browser.ignoreSynchronization=true;
        browser.get('http://www.globalsqa.com/demo-site/select-dropdown-menu/');
        //element(By.xpath("//select")).click
        let dropDown_Obj= new DropDown_Util(element(By.xpath("//select")));

        dropDown_Obj.selectByVisibleText("Cyprus")

        browser.sleep(5000)
    })
})