/**
 * Created by xjy on 8/3/16.
 */
"use strict";
let ZipCodeToBarcodeCommand=require('./zipcode-to-barcode');
let zToB=new ZipCodeToBarcodeCommand();
class GoZipCodeToBarcodeCommand {
  action() {
    return {
      text: "Please input zip code.",
      newMapping: {
        "*": zToB.action
      }
    }
  }
}
module.exports=GoZipCodeToBarcodeCommand;
