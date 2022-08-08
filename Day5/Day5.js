//Question1:Create a button,on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button.

function addText(){
    const changeText = document.getElementById("text");
    changeText.innerText = 'MERN STACK';
}

//Question2:Write code to get 1st H1 element from a webpage using DOM.

const valueGet = document.getElementsByTagName("h1")[0].innerHTML
console.log(valueGet);


//Question3:Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.

let hours = document.getElementById("hour");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let session = document.getElementById("ampm");

let clock = setInterval(
    function time() {
        let dateTime = new Date();
        let hr = dateTime.getHours();
        let mins = dateTime.getMinutes();
        let secs = dateTime.getSeconds();

        if(hr >= 12){
            ampm.innerHTML = 'PM';
        }
        else{
            ampm.innerHTML = 'AM';
        }

        if(hr>12){
            hr = hr-12;
        }

        hours.textContent = hr;
        minutes.textContent = mins;
        seconds.textContent = secs;
    },0
)

//Question4:Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy".

function textReplace(){
    const replaceT = document.getElementById('replace');
    replaceT.innerText = "Welcome to prepByte!!"
}

//Qustion5:Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text.
//Doubt
function hideText(){
    let hideHello = document.getElementById("hide");
    hideHello.style.display = "none";

}
//Method2:
$(".btnH").click(function(){
    $("#hide").hide();
});

//Question6:Given an array of 0's and 1's find out number of 0's.

let arr1 = [1,0,0,0,1,0];
let count = 0;
for(let x = 0;x<arr1.length;x++){
    if(arr1[x] === 0){
        count++
    }
}
console.log("Number of zeros's in arrays are:" + count);
  

//Question7:Given an array find out total no. of odd and even nos.

function countOddEven(array,size){
    oddNumber = 0;
    evenNumber = 0;

    for(let i = 0;i<size;i++){
        if(array[i]%2==0){
            evenNumber++
        }
        else{
            oddNumber++;
        }
    }
    console.log("Number of even count = " + evenNumber);
    console.log("Number of odd count = " + oddNumber);
}
let array = [2, 3, 4, 5, 6];
let n = array.length;
countOddEven(array,n);


//Question8:Given a string find out number of vowels.

function countVowel(str){
    let vowelC = 0;
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];

    for (let char of str){
        if(vowels.includes(char)){
            vowelC++;
        }
    }
    console.log("Number of vowel Count:" +  vowelC);
}

let str = ('Arpana')
countVowel(str);

//Question9:Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.

const object1 = {
    id:[1,3,4,5,8],
    name:'Arpana',
}

const object2 = {
    id:[1,3,4,5,8],
    name:'kashyap',
}

const checkFunction = function(object1,object2){
    const object1len = Object.keys(object1).length;
    const object2len = Object.keys(object2).length;

    if(object1len === object2len) {
        return Object.keys(object1).every(
            key => object2.hasOwnProperty(key)
               && object2[key] === object1[key]);
    }
    return false;
}
console.log(checkFunction(object1,object2));







