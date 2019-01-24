import { Actions_GoogleHomePage } from "../Lib/Actions_GoogleHomePage";
import { ExcelUtility } from "../excelUtil/excelReading";
import { browser, element, by } from "protractor";
import { Logger } from "../../Logging/logUtility";

describe("Google Search item feature", function() {
browser.ignoreSynchronization=true

it("Google Serach", function(){
    browser.get("http://google.com");
    element(by.css(".gLFyf.gsfi")).sendKeys("testing css selector")
    browser.sleep(5000)

})

})