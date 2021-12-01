"use strict";

// Containers
const cntOne = document.querySelector(".cnt__one");
const cntTwo = document.querySelector(".cnt__two");
const cntThree = document.querySelector(".cnt__three");
const cntFour = document.querySelector(".cnt__four");
const cntFive = document.querySelector(".cnt__five");

// Error validation
const errorChar = document.querySelector(".error__char");
const errorSym = document.querySelector(".error__sym");
const errorShort = document.querySelector(".error__short");
const errorMatch = document.querySelector(".error__match");
const errorEmail = document.querySelector(".error__email");
const errorWhite = document.querySelector(".error__white");

// Input
const fullname = document.querySelector(".input__name");
const userName = document.querySelector(".input__userName");
const pass = document.querySelector(".input__pass");
const repass = document.querySelector(".input__repass");
const email = document.querySelector(".input__email");
const signup = document.querySelector(".btn__signup");

// Flag
let flag = [false, false, false, false, false];

// Checker function
const checker = function(){
    console.log("Checking!");
    if(flag[0] === true && flag[1] === true && flag[2] === true && flag[3] === true && flag[4] === true){
        signup.disabled = false; // Enabling signup
        signup.classList.remove("cursor-default");
        signup.classList.add("cursor-pointer");
        signup.classList.remove('opacity-70');
        signup.classList.add('opacity-100');
    }else{
        signup.disabled = true; // Disabling signup
        signup.classList.add("cursor-default");
        signup.classList.remove("cursor-pointer");
        signup.classList.add('opacity-70');
        signup.classList.remove('opacity-100');
        console.log("Not entered");
    }
}

fullname.addEventListener("input", ()=>{
    const fname = fullname.value;
    if(fname === ""){
        cntOne.classList.add("border-gray-200");
        cntOne.classList.remove("border-red-500");
        errorChar.classList.add("invisible");
        flag[0] = false;
    }else if(!fname.match(/^[a-z ]+$/i)){
        cntOne.classList.remove("border-gray-200");
        cntOne.classList.add("border-red-500");
        errorChar.classList.remove("invisible");
        flag[0] = false;
    }else{
        cntOne.classList.add("border-gray-200");
        cntOne.classList.remove("border-red-500");
        errorChar.classList.add("invisible");
        flag[0] = true;
    }
    console.log(flag);
    console.log(signup);
    checker();
});

userName.addEventListener("input", ()=>{
    const user = userName.value;

    if((/\s/).test(user)){
        errorWhite.classList.remove("invisible");
        errorSym.classList.add("invisible");
        cntTwo.classList.add("border-red-500");
        cntTwo.classList.remove("border-gray-200");
        flag[1] = false;
    }else if(user !== "" && !user.match(/^[a-z.@_0-9]+$/i)){
        console.log("White 1st");
        errorSym.classList.remove("invisible");
        errorWhite.classList.add("invisible");
        cntTwo.classList.add("border-red-500");
        cntTwo.classList.remove("border-gray-200");
        flag[1] = false;
    } else if(user === ""){
        console.log("Empty of 1st");
        errorWhite.classList.add("invisible");
        errorSym.classList.add("invisible");
        cntTwo.classList.remove("border-red-500");
        cntTwo.classList.add("border-gray-200");
    }else{
        console.log("Final");
        errorWhite.classList.add("invisible");
        errorSym.classList.add("invisible");
        cntTwo.classList.remove("border-red-500");
        cntTwo.classList.add("border-gray-200");
        flag[1] = true;
    }
    console.log(flag);
    console.log(signup);
    checker();
});

pass.addEventListener("input", ()=>{
    let password = "", repassword = "";
    password += pass.value;
    repassword += repass.value;
    if(password === "" && repassword === "" || password === "" && repassword !== "" || password !== "" && repassword === ""){
        console.log(flag[2], flag[3]);
        errorShort.classList.add("invisible");
        cntThree.classList.add("border-gray-200");
        cntThree.classList.remove("border-red-500");
        flag[2] = 0;
        flag[3] = 0;
    }
    if(password.length === 0){
        errorShort.classList.add("invisible");
        cntThree.classList.add("border-gray-200");
        cntThree.classList.remove("border-red-500");
    }else if(password.length >= 6){
        errorShort.classList.add("invisible");
        cntThree.classList.add("border-gray-200");
        cntThree.classList.remove("border-red-500");
        flag[2] = true;
    }else{
        errorShort.classList.remove("invisible");
        cntThree.classList.remove("border-gray-200");
        cntThree.classList.add("border-red-500");
        flag[2] = false;
    }
    if(password !== repassword){
        errorMatch.classList.remove('invisible');
        cntFour.classList.remove("border-gray-200");
        cntFour.classList.add("border-red-500");
        flag[3] = false;
    }else{
        errorMatch.classList.add('invisible');
        cntFour.classList.add("border-gray-200");
        cntFour.classList.remove("border-red-500");
        flag[3] = true;
    }
    console.log(flag);
    console.log(signup);
    checker();
});

repass.addEventListener("input", ()=>{
    let password = "", repassword = "";
    password += pass.value;
    repassword += repass.value;

    if(repassword.length === 0){
        errorMatch.classList.add('invisible');
        cntFour.classList.add("border-gray-200");
        cntFour.classList.remove("border-red-500");
    }
    else if(password !== repassword){
        errorMatch.classList.remove('invisible');
        cntFour.classList.remove("border-gray-200");
        cntFour.classList.add("border-red-500");
        flag[3] = false;
    }else if (password === repassword && password !== ""){
        errorMatch.classList.add('invisible');
        cntFour.classList.add("border-gray-200");
        cntFour.classList.remove("border-red-500");
        flag[3] = true;
    }
    console.log(flag);
    console.log(signup);
    checker();
});

email.addEventListener("input", ()=>{
    let mail = "";
    mail += email.value;

    if(mail.length == 0){
        errorEmail.classList.add("invisible");
        cntFive.classList.add("border-gray-200");
        cntFive.classList.remove("border-red-500");
    }else if(mail.match(/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/)){ 
        // Regex for email validation
        errorEmail.classList.add("invisible");
        cntFive.classList.add("border-gray-200");
        cntFive.classList.remove("border-red-500");
        flag[4] = true;
    }else if(mail.match(/^[0-9]+$/i)){
        if(mail.length == 10){
            errorEmail.classList.add("invisible");
            cntFive.classList.add("border-gray-200");
            cntFive.classList.remove("border-red-500");
            flag[4] = true;

        }else{
            errorEmail.classList.remove("invisible");
            cntFive.classList.remove("border-gray-200");
            cntFive.classList.add("border-red-500");
            flag[4] = false;
        }
        
    }else{
        errorEmail.classList.remove("invisible");
        cntFive.classList.remove("border-gray-200");
        cntFive.classList.add("border-red-500");
        flag[4] = false;
    }
    console.log(flag);
    console.log(signup);
    checker();
});

signup.addEventListener("click", ()=>{
    fullname.value = "";
    userName.value = "";
    pass.value = "";
    repass.value = "";
    email.value = "";
});