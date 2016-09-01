/**
 * Created by xjy on 8/3/16.
 */
let GoZipCodeToBarcodeCommand = require("./goto-zipcode-to-barcode-page");
let zipCodeToBarcode=new GoZipCodeToBarcodeCommand();

let GoBarcodeToZipCodeCommand = require("./goto-barcode-to-zipcode-page");
let barcodeToZipCode=new GoBarcodeToZipCodeCommand();

let ExitCommand=require("./exit");
let exit=new ExitCommand();

let commandInvalidInput = require("./invalid-input");
let invalidInput=new commandInvalidInput();
class MainPage {
  action() {
    return {
      text: `1. Translate zip code to bar code
       2. Translate bar code to zip code
       3. Quit
       Please input your choices(1~3)`,
      newMapping: {
        "1": zipCodeToBarcode.action,
        "2": barcodeToZipCode.action,
        "3": exit.action,
        "*": invalidInput.action
      }
    };
  }
}
 module.exports=MainPage;
