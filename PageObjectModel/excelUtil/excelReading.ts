
import {Workbook, Worksheet} from "exceljs";

const wb:Workbook= new Workbook();
export class ExcelUtility
{
    public readExcel(path:string,sheetDetails:any,rowNumber:number,colNumber:number)
    {
        return wb.xlsx.readFile(path).then(function(){

            let sheet:Worksheet=wb.getWorksheet(sheetDetails);
            let row=sheet.getRow(rowNumber);
            let cell=row.getCell(colNumber);
            let cellContents=cell.toString();
            return cellContents;
        })
    }

}