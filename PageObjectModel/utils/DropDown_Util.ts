import { ElementFinder,By } from "protractor";

export class DropDown_Util
{
    public actualDropDown: ElementFinder
    constructor(dropDown:ElementFinder)
    {
        this.actualDropDown=dropDown
    }

    public selectByVisibleText(txt:String)
    {
        this.actualDropDown.click()
        this.actualDropDown.element(By.xpath("//option[text()='"+txt+"']")).click()

    }
}