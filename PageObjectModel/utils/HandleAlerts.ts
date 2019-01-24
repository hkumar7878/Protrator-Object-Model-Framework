import { browser, ElementFinder } from "protractor";

export class HandleAlerts
{
    public static acceptAlerts(ele:ElementFinder)

    {
        browser.sleep(3000)
        ele.click();
        browser.switchTo().alert().accept();
    }

    public static getAlertText()
    {
        return browser.switchTo().alert().getText()
    }
}