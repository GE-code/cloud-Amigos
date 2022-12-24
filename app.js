'use strict';

const switcher = document.querySelector('.btn');
const yes = document.querySelector('.btnyes');
const no = document.querySelector('.btnno');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('pink-theme');
    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});
yes.addEventListener('click',function(){
    /*send the user id,target id, match yes*/
    /*search via lambda*/
    console.log('Yes');
});
no.addEventListener('click',function(){
    /*send the user id,target id, match yes*/
    /*search via lambda*/
    console.log('No');
});