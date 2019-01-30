import { ElementFinder, browser, element, by } from "protractor";
import {ExpectedConditions as ec} from "protractor";

export class genericUtil
{

    public static clickElement(ele:ElementFinder)
        {
             browser.wait(ec.presenceOf(ele),15000)
             element(ele).click;
        }

        public static clickUsingXpath(xp:string)
        {
            browser.wait(ec.presenceOf(element(by.xpath(xp))),8000)
            element(by.xpath(xp)).click
        }

}