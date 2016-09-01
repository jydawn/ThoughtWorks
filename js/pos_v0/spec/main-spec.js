/**
 * Created by xjy on 7/27/16.
 */
const fn=require("../src/main.js");
describe(("totalChangTocodes"),()=>{
    "use strict";
    it(("1-(1) checkNumber"),()=>{
        let inputs = '45056-1234';
        let finalString=fn.totalChangTocodes(inputs);
        const expectText='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        expect(finalString).toEqual(expectText);
    });
    it(("1-(2) checkNumber"),()=>{
        let inputs = '95713';
        let checkResult = checkNumber(inputs);
        const expectText=true;
        expect(checkResult).toEqual(expectText);
    });
    it(("1-(3) checkNumber"),()=>{
        let inputs = '450561234';
        let checkResult = checkNumber(inputs);
        const expectText=true;
        expect(checkResult).toEqual(expectText);
    });
    // it(("(2)-change"),()=>{
    //     let inputs = '45056-1234';
    //     let checkResult=true;
    //     let finalString=totalChangTocodes(inputs)
    //     const expectText='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
    //     expect(finalString).toEqual(expectText);
    // });
});
describe(("test changToCodes"),function(){
    it(("2-1 getReducedArray"),function(){
        let inputs='45056-1234';
        let checkResult='true';
        let arr=getReducedArray(inputs,checkResult);
        const expectText=[ '4', '5', '0', '5', '6', '1', '2', '3', '4' ];
        expect(arr).toEqual(expectText);
    });
    it(("2-2  getCheckCode"),function(){
        let arr=[ '4', '5', '0', '5', '6', '1', '2', '3', '4' ];
        let allCodes=['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
        let checkCode = getCheckCode(arr, allCodes);
        const expectText=0;
        expect(checkCode).toEqual(expectText);
    });
    it(("2-3 getSubCodes"),function(){
        let arr=[ '4', '5', '0', '5', '6', '1', '2', '3', '4' ];
        let allCodes=['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
        let checkCode =0;
        let subCodes = getSubCodes(arr, allCodes,checkCode);
        const expectText=[ ':|::|',
            ':|:|:',
            '||:::',
            ':|:|:',
            ':||::',
            ':::||',
            '::|:|',
            '::||:',
            ':|::|',
            '||:::' ]
        expect(subCodes).toEqual(expectText);
    });

    it(("2-4 getCodeString"),function(){
        let subCodes=[ ':|::|',
            ':|:|:',
            '||:::',
            ':|:|:',
            ':||::',
            ':::||',
            '::|:|',
            '::||:',
            ':|::|',
            '||:::' ];
        let codeString=getCodeString(subCodes);
        const expectText='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        expect(codeString).toEqual(expectText);
    });
});
describe(("test changeToNumber"),function(){
    it(("4-1 getPostCodes"),function(){
        let temp='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        let checkNode='true';
        let postCodes=getPostCode(temp,checkNode);
        const expectText=':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|';
        expect(postCodes).toEqual(expectText);
    });
    it(("4-2 getNumberCodes"),function(){
        let postCodes=':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|';
        let allCodes=['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
        let numberCodes=getNumberCode(postCodes,allCodes);
        const expectText=[ 4, 5, 0, 5, 6, 1, 2, 3, 4 ]
        expect(numberCodes).toEqual(expectText);
    });
    it(("4-3 getCodeString"),function(){
        let numberCodes=[ 4, 5, 0, 5, 6, 1, 2, 3, 4 ];
        let codeString=getCodeToNumber(numberCodes);
        const expectText='45056-1234';
        expect(codeString).toEqual(expectText);
    });
    it(("4-4 getCodeString"),function(){
        let numberCodes=[ 9, 5, 7, 1, 3 ];
        let codeString=getCodeToNumber(numberCodes);
        const expectText='95713';
        expect(codeString).toEqual(expectText);
    });
});
