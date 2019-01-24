"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceljs_1 = require("exceljs");
const wb = new exceljs_1.Workbook();
class ExcelUtility {
    readExcel(path, sheetDetails, rowNumber, colNumber) {
        return wb.xlsx.readFile(path).then(function () {
            let sheet = wb.getWorksheet(sheetDetails);
            let row = sheet.getRow(rowNumber);
            let cell = row.getCell(colNumber);
            let cellContents = cell.toString();
            return cellContents;
        });
    }
}
exports.ExcelUtility = ExcelUtility;
//# sourceMappingURL=excelReading.js.map