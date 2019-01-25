import {Config,browser} from "protractor"

export let config : Config ={

    framework:"jasmine",
    capabilities :{
        browserName :'chrome'
    },

    onPrepare : function(){
        var ChercherTechJasmineReporter = require('chercher-tech-jasmine-reporter');
        jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
            reportName:'Protractor Test Report',
            showSkipped:true,
            showLineChart:true
        }));
    },

    //specs:["./specs/Calculator_Script1.js"],
    specs:["./PageObjectModel/Spec/TC_07_Wait.js"],
    seleniumAddress : 'http://localhost:4444/wd/hub'

}