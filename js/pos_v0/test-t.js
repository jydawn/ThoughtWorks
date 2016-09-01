/**
 * Created by xjy on 7/27/16.
 */
"use strict";
//let _=require('lodash');
describe(("test changToCodes"),function(){
    it(("getReducedArray"),function(){
        let inputs='45056-1234';
        let checkResult='true';
        let arr=getReducedArray(inputs,checkResult);
        const expectText=[ '4', '5', '0', '5', '6', '1', '2', '3', '4' ];
        expect(arr).toEqual(expectText);
    });
    it(("getReducedArray"),function(){
        let inputs='95713';
        let checkResult='true';
        let arr=getReducedArray(inputs,checkResult);
        const expectText=[ '9', '5', '7', '1', '3' ];
        expect(arr).toEqual(expectText);
    });
    it(("ggetCheckCode"),function(){
        let arr=[ '4', '5', '0', '5', '6', '1', '2', '3', '4' ];
        let allCodes=['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
        let checkCode = getCheckCode(arr, allCodes);
        const expectText=0;
        expect(checkCode).toEqual(expectText);
    });
    it(("ggetCheckCode"),function(){
        let arr=[ '9', '5', '7', '1', '3' ];
        let allCodes=['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
        let checkCode = getCheckCode(arr, allCodes);
        const expectText=5;
        expect(checkCode).toEqual(expectText);
    });
    it(("ggetSubCodes"),function(){
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
    it(("ggetSubCodes"),function(){
        let arr=[ '9', '5', '7', '1', '3' ];
        let allCodes=['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
        let checkCode =5;
        let subCodes = getSubCodes(arr, allCodes,checkCode);
        const expectText=[ '|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:' ];

        expect(subCodes).toEqual(expectText);
    });

    it(("getCodeString"),function(){
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
    it(("getCodeSring"),function(){
        let subCodes=[ '|:|::', ':|:|:', '|:::|', ':::||', '::||:', ':|:|:' ];
        let codeString=getCodeString(subCodes);
        const expectText='||:|:::|:|:|:::|:::||::||::|:|:|';
        expect(codeString).toEqual(expectText);
    });
});
describe(("test changeToNumber"),function(){
    it(("getPostCodes"),function(){
        let temp='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        let checkNode='true';
        let postCodes=getPostCode(temp,checkNode);
        const expectText=':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|';
        expect(postCodes).toEqual(expectText);
    });
    it(("getPostCodes"),function(){
        let temp='||:|:::|:|:|:::|:::||::||::|:|:|';
        let checkNode='true';
        let postCodes=getPostCode(temp,checkNode);
        const expectText='|:|:::|:|:|:::|:::||::||:';
        expect(postCodes).toEqual(expectText);
    });
    it(("getNumberCodes"),function(){
        let postCodes=':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|';
        let allCodes=['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
        let numberCodes=getNumberCode(postCodes,allCodes);
        const expectText=[ 4, 5, 0, 5, 6, 1, 2, 3, 4 ]
        expect(numberCodes).toEqual(expectText);
    });
    it(("getNumberCodes"),function(){
        let postCodes='|:|:::|:|:|:::|:::||::||:|';
        let allCodes=['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];
        let numberCodes=getNumberCode(postCodes,allCodes);
        const expectText= [ 9, 5, 7, 1, 3 ];
        expect(numberCodes).toEqual(expectText);
    });
    it(("getCodeString"),function(){
        let numberCodes=[ 4, 5, 0, 5, 6, 1, 2, 3, 4 ];
        let codeString=getCodeToNumber(numberCodes);
        const expectText='45056-1234';
        expect(codeString).toEqual(expectText);
    });
    it(("getCodeString"),function(){
        let numberCodes=[ 9, 5, 7, 1, 3 ];
        let codeString=getCodeToNumber(numberCodes);
        const expectText='95713';
        expect(codeString).toEqual(expectText);
    });
});
// describe(("test"),()=>{
//     it(("test 1"),()=>{
//         let inputs='45056-1234';
//         let codes=changToCodes(inputs);
//         const expectText='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
//         expect(codes).toEqual(expectText);
//     });
//     it(("test 2"),()=>{
//         let temp='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
//         let numberString=changeToNumber(temp);
//         const expectText='45056-1234';
//         expect(numberString).toEqual(expectText);
//     });
// });
