"use strict";
/**
 * Created by xjy on 8/3/16.
 */
let ZipCodeToBarcodeCore=require("../zipcode-to-barcode-core.js");
let zipCodeToBarcode=new ZipCodeToBarcodeCore();
class ZipCodeToBarcodeCommand {
  action(zipcode) {
    let barcode = zipCodeToBarcode.action(zipcode);
    if (barcode === false) {
      return {
        error: 'Please give right input.',
      }
    } else {
      return {
        text: barcode,
        reset: true
      }
    }
  };
}
module.exports=ZipCodeToBarcodeCommand;
