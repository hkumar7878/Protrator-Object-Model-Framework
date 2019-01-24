import { Actions_GoogleHomePage } from "../Lib/Actions_GoogleHomePage";
import { ExcelUtility } from "../excelUtil/excelReading";
import { browser } from "protractor";
import { Logger } from "../../Logging/logUtility";

describe("Google Search item feature", function() {
let obj_Actions_GoogleHomePage= new Actions_GoogleHomePage();
let obj_excelUtil= new ExcelUtility();
let log=Logger.logger;
browser.ignoreSynchronization=true;
browser.manage().timeouts().implicitlyWait(2000);
browser.manage().window().maximize();

it("Google Serach", function(){
    browser.get("http://google.com");
    log.info("Latest logs to check npm test");
    browser.getTitle().then(function(title)
    {
        expect(title).toBe("Google");
        log.info("The title is " + title);
    })

    obj_excelUtil.readExcel("D:\\Protractor Framework - Page Object Model\\GoogleTestData.xlsx","Sheet1",1,1).then(function(excelValue){
    obj_Actions_GoogleHomePage.setTextInSearchBarWithParameter(excelValue);
    log.info("Searched item is " +excelValue )
    log.log("warn","Latest logs to check npm test")

    })
    browser.sleep(5000);

})

})