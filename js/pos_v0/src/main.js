/**
 * Created by xjy on 7/27/16.
 */
"use strict";



let _ = require('lodash');
let inputs = '45056-1234';


function changToCodes(inputs,checkResult) {
    let allCodes = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    let arr = getReducedArray(inputs,checkResult);
    // console.log(arr);
    let checkCode = getCheckCode(arr);
    //  console.log(checkCode);
    let subCodes = getSubCodes(arr, allCodes, checkCode);
    //   console.log(subCodes);
    let codeString = getCodeString(subCodes, checkCode);
    //  console.log(codeString);
    return codeString;
}
changToCodes(inputs);
function finalChangTocodes(inputs){
    let checkResult = checkNumber(inputs);
 //   console.log(checkResult);
    let finalString=changToCodes(inputs,checkResult);
    console.log(finalString);
    return finalString;
}
finalChangTocodes(inputs);
function checkNumber(inputs) {
    let arr = inputs.split("");
    let parttern = /\d/g;
    let isTrue = false;
    if (arr.length === 5 || arr.length === 9) {
        for (let num of inputs) {
            if (parttern.test(parseInt(num))) {
                isTrue = true;
            }
        }
    } else if (arr.length === 10) {
        for (let element of arr) {
            if (arr[5] === '-') {
                arr.splice(5, 1);
                if (parttern.test(arr[element])) {
                    isTrue = true;
                }
            }
        }
    }
    return isTrue;
}
function getReducedArray(inputs,checkResult) {
    let arr=[];
    if(checkResult==='true'){
        arr = inputs.split("");
        if (arr.includes('-')) {
            //_.pullAt(arr, 5);
            arr.splice(5, 1);
        }
    }

    return arr;
}
function getCheckCode(arr) {
    let sum = 0;
    sum = arr.reduce(((temp, num)=> {
        temp += parseInt(num);
        return temp;
    }), 0);
    let code;
    if (sum % 10 === 0) {
        code = 0;
    }
    else {
        code = 10 - sum % 10;
    }
    return code;
}
function getSubCodes(arr, allCodes, checkCode) {
    let result = [];
    arr.push(checkCode);
    result = arr.map((num)=> {
        return allCodes[num];
    });
    return result;
}

function getCodeString(subCodes) {
    let result = subCodes.join('');
    return '|' + result + "|";
}
let temp = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
//let temp='||:|:::|:|:|:::|:::||::||::|:|:|';
function totalChangeToNumber(temp){
    let checkNode = checkBarcodes(temp);
    // console.log(checkNode);
    let changeNUmber=changeToNumber(temp,checkNode);
    console.log(changeNUmber);
}
totalChangeToNumber(temp);
function changeToNumber(temp,checkResult,allCodes) {
    let postCodes = getPostCode(temp,checkResult);
    console.log(postCodes);
    let numberCodes = getNumberCode(postCodes, allCodes);
    // console.log(numberCodes);
    let codeString = getCodeToNumber(numberCodes);
    //console.log(codeString);
    return codeString;

}
changeToNumber(temp);
function finalChangTocodes(temp){
    let allCodes = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
    let checkResult = checkBarcodes(temp,allCodes);
    //   console.log(checkResult);
    let finalString=changeToNumber(temp,checkResult,allCodes);
    console.log(finalString);
    return finalString;
}
function checkBarcodes(temp,allCodes) {
    let isTrue = false;
    let array = temp.split("");
    if (array.length === 52 || array.length === 32) {
        let result = temp.slice(1, temp.length - 6);
        let codeTemps = _.chunk(result, 5);
        codeTemps = codeTemps.map((element)=> {
            return _.sum(element);
        })
        codeTemps.map((code)=> {
            for (let i = 0; i < allCodes.length; i++) {
                if (code === allCodes[i]) {
                    isTrue = true;
                }
            }
        });
    }
    return isTrue;
}
function getPostCode(temp,checkNode) {
    let result='';
    if(checkNode){
        result = temp.slice(1, temp.length - 6);
    }
    return result;
}
function getNumberCode(postCodes, allCodes) {
    let result = [];
    let temps = postCodes.split("");
    let codeTemps = _.chunk(temps, 5);
    codeTemps = codeTemps.map((element)=> {
        return _.sum(element);
    });
    codeTemps.map((code)=> {
        for (let i = 0; i < allCodes.length; i++) {
            if (code === allCodes[i]) {
                result.push(i);
            }
        }
    });
    return result;
}
function getCodeToNumber(numberCodes) {
    let result = '';
    if (numberCodes.length > 5) {
        numberCodes.splice(5, 0, '-');
    }
    result = numberCodes.join("");
    return result;
}
module.exports={
   checkNumber:checkNumber
};