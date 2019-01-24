"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        var ChercherTechJasmineReporter = require('chercher-tech-jasmine-reporter');
        jasmine.getEnv().addReporter(new ChercherTechJasmineReporter({
            reportName: 'Protractor Test Report',
            showSkipped: true,
            showLineChart: true
        }));
    },
    //specs:["./specs/Calculator_Script1.js"],
    specs: ["./PageObjectModel/Spec/TC_06_Test_Alerts.js"],
    seleniumAddress: 'http://localhost:4444/wd/hub'
};
//# sourceMappingURL=conf.js.map