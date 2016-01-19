function ClearSheet1() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet1 = ss.getSheets()[0];
   sheet1.getRange('A2:C2').clearContent();
   sheet1.getRange('F7:H1000').clearContent();
}
