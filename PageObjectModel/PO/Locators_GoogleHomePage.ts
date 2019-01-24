import { element, by } from "protractor";

export class Locators_GoogleHomePage
{
    // using variable
    public static searchElement=element(by.name("q"));
   

    // using method

    public static searchElementByNameMethod()
    {
        console.log("Searching bar element");
        return element(by.name("q"))
    }
}