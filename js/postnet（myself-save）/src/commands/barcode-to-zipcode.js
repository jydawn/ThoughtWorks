/**
 * Created by xjy on 8/3/16.
 */
let BarcodeToZipcodeCore=require("../barcode-to-zipcode-core");
let barcodeToZipCode=new BarcodeToZipcodeCore();
class BarcodeToZipCodeCommand {
  action(barcode) {
    let zipCode = barcodeToZipCode.action(barcode);
    if (zipCode === false) {
      return {
        error: "Please give right input."
      }
    } else {
      return {
        text: zipCode,
        reset: true
      }
    }
  };
}
module.exports = BarcodeToZipCodeCommand;
