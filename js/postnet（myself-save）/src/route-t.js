/**
 * Created by xjy on 8/2/16.
 */
"use strict";
let {getMenu, commandGoToTranslateZtoB, commandGoToTranslateBtoZ, exit, falseInput, translateZToB, translateBtoZ}=require("../src/command.js");
let mapping = {
  "1": commandGoToTranslateZtoB,
  "2": commandGoToTranslateBtoZ,
  "3": exit,
  "main": getMenu
};
function route(input) {
  let response = "";
  let command = mapping[input];
  let result = "";
  if (command) {
    response = command(input);
    result += response.text;
  }
  else if (mapping["*"]) {
    response = mapping["*"](input);
    result += response.text;
  } else {
    return "Please give right input";
  }



  if (response.reset) {
    route.reset();
  }
  if (response.newMapping) {
    mapping = response.newMapping;
  }

  if (response.next) {
    let newResponse;
    do {
      newResponse = response.next();
      result += newResponse.text;
    } while (newResponse.next);
  }

  return result;
}
route.reset = function () {
  mapping = {
    "1": commandGoToTranslateZtoB,
    "2": commandGoToTranslateBtoZ,
    "3": exit,
    "main": getMenu
  }
};
//console.log(route('1'));
//console.log(route("12345"));
console.log(route('2'));
console.log(route('|:|::|||::::||:::::||::|:|::||::|::|||:::|:|:::::|||'));
//console.log(route("2"));
//console.log(route('main'));
