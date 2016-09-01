/**
 * Created by xjy on 8/1/16.
 */
"use strict";
function getMenu(){
  return `1.Translate zip code to bar code\n2.Translate bar code to zip code\n3.Quit\nPlease input your choices(1~3)`;
}
//console.log(getMenu());
function commandFigure1(figure){
  return `Please input zip code`;
}
//console.log(commandFigure1(1));
function transZipcodeToBarcode(zipcode){

}
module.exports={getMenu:getMenu,commandFigure1:commandFigure1};
