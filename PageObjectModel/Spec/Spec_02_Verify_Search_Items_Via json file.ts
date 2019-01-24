import { Actions_GoogleHomePage } from "../Lib/Actions_GoogleHomePage";
import { browser } from "protractor";

describe("Google Search item feature", function() {
let obj_Actions_GoogleHomePage= new Actions_GoogleHomePage();
browser.ignoreSynchronization=true;
browser.manage().timeouts().implicitlyWait(2000);
browser.manage().window().maximize();
it("Google Serach", function(){
    browser.get("http://google.com");
    browser.getTitle().then(function(title)
    {
        expect(title).toBe("Google");
    })
    //googlelib.enterTextInSearchBarWithoutParameters();
    

    // Import json file

    let searchVal=require("googleparameter.json");

    
    obj_Actions_GoogleHomePage.setTextInSearchBarWithParameter(searchVal);
    browser.sleep(5000);

})

})