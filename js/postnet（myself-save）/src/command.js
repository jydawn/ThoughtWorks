/**
 * Created by xjy on 8/2/16.
 */
"use strict";
let {zipCodeToBarcode, barcodeToZipCode}=require("../src/best-charge.js");
function getMenu() {
  return {text: `1.Translate zip code to bar code\n2.Translate bar code to zip code\n3.Quit\nPlease input your choices(1~3)`}
}
function commandGoToTranslateZtoB() {
  return {
    text: `Please input zip code`,
    newMapping: {'*': translateZtoB}
  };
}
function commandGoToTranslateBtoZ() {
  return {
    text: `Please input bar code`,
    newMapping: {'*': translateBtoZ}
  };
}
function exit(input) {
  return {text:`Quit`};
}
function translateZtoB(input) {
  let coreResponse = zipCodeToBarcode(input);
  if (coreResponse === false) {
    let result = {
      text: 'please input right input',
      next: commandGoTotranslateZtoB
    };
    return result;
  } else {
    return {
      text: 'the translate result is：' + coreResponse,
      reset: true
    };
  }
}
function translateBtoZ(input) {
  let result = barcodeToZipCode(input);
  if (result === false) {
    return {
      text: `please give right input:`,
      next: commandGoToTranslateBtoZ
    }
  } else {
    return {
      text: 'the translate result is ：' + result,
      reset: true
    }
  }
}
module.exports = {
  getMenu: getMenu,
  commandGoToTranslateZtoB: commandGoToTranslateZtoB,
  commandGoToTranslateBtoZ: commandGoToTranslateBtoZ,
  exit: exit,
  falseInput: falseInput,

  translateZtoB: translateZtoB,
  translateBtoZ: translateBtoZ
};
