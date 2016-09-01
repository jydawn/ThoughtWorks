/**
 * Created by xjy on 8/1/16.
 */
"use strict";
let {getMenu,commandFigure1}=require("../src/commind.js");
fdescribe(("test"),()=>{
  it(("getMenu"),()=>{
    let menu=getMenu();
    const expectText =
      `1.Translate zip code to bar code
2.Translate bar code to zip code
3.Quit
Please input your choices(1~3)`;
    expect(menu).toEqual(expectText);
  });
  it(("getMenu"),()=>{
    let figure=1;
    let command1=commandFigure1(figure);
    const expectText=`Please input zip code`;
    expect(command1).toEqual(expectText);
  });
});
