import { browser, element,by } from "protractor";

describe('protractor wait case', function(){

    it('protractor implicit ex', function(){

        browser.ignoreSynchronization=true
        browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
        browser.manage().window().maximize()
       // browser.manage().timeouts().implicitlyWait(10000)
       // element(by.name("prompt")).click()
       // browser.switchTo().alert().accept()

       for(let i=0;i<60;i++)
       {
           let flag=false
           element.all(by.name("prompt")).count().then(function(num){

            if(num>0)
            {
                element(by.name("prompt")).click()
                flag=true
            }
            else
            {
                browser.sleep(500)
            }
           

           })

           if(flag)
           {
               break;
           }
       }
    })
})