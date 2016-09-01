// /**
let BarcodeToZipCodeCommand=require("./barcode-to-zipcode");
let bToZ=new BarcodeToZipCodeCommand();
class GoBarcodeToZipCodeCommand {
  action() {
    return {
      text: "Please input bar code.",
      newMapping: {
        '*': bToZ.action
      }
    }
  }
}
module.exports = GoBarcodeToZipCodeCommand;
