import { Locators_GoogleHomePage } from "../PO/Locators_GoogleHomePage";

export class Actions_GoogleHomePage{
    public enterTextInSearchBarWithoutParameters()
    {
        Locators_GoogleHomePage.searchElement.sendKeys("Protractor testing");
    }

    public setTextInSearchBarWithParameter(searchTerm:string)
    {
        Locators_GoogleHomePage.searchElementByNameMethod().sendKeys(searchTerm);
    }
}