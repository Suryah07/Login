"use strict";

// Selectors

const inputOne = document.querySelector(".input__one");
const inputTwo = document.querySelector(".input__two");
const cntOne = document.querySelector(".cnt__one");
const cntTwo = document.querySelector(".cnt__two");
const login = document.querySelector(".btn__login");
const errorChar = document.querySelector(".error__char");
const errorInvalidUser = document.querySelector(".error__invaid__user");
const errorPass = document.querySelector(".error__short");

const flag = [false, false];

// Event listener for first input

inputOne.addEventListener("input", ()=>{
    let userName = inputOne.value;
    if(userName === ""){
        errorChar.classList.add("invisible");
        cntOne.classList.remove("border-red-500");
        cntOne.classList.add("border-gray-200");
        flag[0] = false;
        console.log(flag[0]);
    }
    else if(!userName.match(/^[a-z0-9.@ ]+$/i)){ // Regex for checking special characters
        errorChar.classList.remove("invisible");
        cntOne.classList.add("border-red-500");
        cntOne.classList.remove("border-gray-200");
        flag[0] = false;
        console.log(flag[0]);
    }else{
        errorChar.classList.add("invisible");
        cntOne.classList.remove("border-red-500");
        cntOne.classList.add("border-gray-200");
        flag[0] = true;
        console.log(flag[0]);
    }
    console.log(userName);
    if(flag[0] === true && flag[1] === true){
        login.disabled = false; // Enabling Login
        login.classList.remove("cursor-default");
        login.classList.add("cursor-pointer");
        login.classList.remove('opacity-70');
        login.classList.add('opacity-100');
    }else{
        login.disabled = true; // Disabling Login
        login.classList.add("cursor-default");
        login.classList.remove("cursor-pointer");
        login.classList.add('opacity-70');
        login.classList.remove('opacity-100');
        console.log("Not entered");
    }
});

// Event listener for second input 

inputTwo.addEventListener("input", ()=>{
    console.log("Inside input two");
    let pass = "", user = "";
    pass += inputTwo.value;
    user += inputOne.value;
    
    if(pass.length === 0){
        cntTwo.classList.add("border-gray-200");
        cntTwo.classList.remove("border-red-500");
        errorPass.classList.add("invisible");
        flag[1] = false;
    }else if(pass.length < 6){
        cntTwo.classList.remove("border-gray-200");
        cntTwo.classList.add("border-red-500");
        errorPass.classList.remove("invisible");
        flag[1] = false;
    }else{
        cntTwo.classList.add("border-gray-200");
        cntTwo.classList.remove("border-red-500");
        errorPass.classList.add("invisible");
        flag[1] = true;
    }
        
    if(flag[0] === true && flag[1] === true){
        login.disabled = false; // Enabling Login
        login.classList.remove("cursor-default");
        login.classList.add("cursor-pointer");
        login.classList.remove('opacity-70');
        login.classList.add('opacity-100');
    }else{
        login.disabled = true; // Disabling Login
        login.classList.add("cursor-default");
        login.classList.remove("cursor-pointer");
        login.classList.add('opacity-70');
        login.classList.remove('opacity-100');
        console.log("Not entered");
    }
    console.log("Username length: ", user.length);
    if(user.length !== 0){
        flag[0] = true;
    }else if(user.length === 0){
        flag[0] = false;
    }

    console.log(flag, inputOne.value, inputTwo.value);
});

login.addEventListener("click", ()=>{
    inputOne.value = "";
    inputTwo.value = "";
});