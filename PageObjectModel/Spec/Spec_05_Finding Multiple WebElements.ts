import { Actions_GoogleHomePage } from "../Lib/Actions_GoogleHomePage";
import { ExcelUtility } from "../excelUtil/excelReading";
import { browser, element, by } from "protractor";
import { Logger } from "../../Logging/logUtility";

describe("Google Search item feature", function() {
browser.ignoreSynchronization=true

beforeAll(function(){

    console.log("BEFORE ALL THE SCENARIOS")
})

afterAll(function(){

    console.log("AFTER ALL THE SCENARIOS")
}
)

beforeEach(function(){
    browser.get("http://google.com");

})



it("Google Serach mulitple elements", function(){
    
    element.all(by.tagName("a")).getText().then(function(texts) {
        //console.log(texts)
        for(let i=0;i<texts.length;i++)
        {
            console.log(texts[i])
        }

        expect("testing").toBe("test")
        
    })
    browser.sleep(5000)

})

})