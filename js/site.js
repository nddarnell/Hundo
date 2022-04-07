// Code for button click
document.getElementById("btnSubmit").addEventListener("click", getValues);


// get the values from interface
// starts or controller function
function getValues(){
    // get values from the page
    // this is blocked scope instead of having variable names outside of the function
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    

    // You must validate your input like below
    // parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        // we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // we call displayNumbers
        displayNumbers(numbers);

    }else{
        alert("You must enter integers");
    };
    
    

}

// generate numbers from start value to end value
// logic function
function generateNumbers(sValue, eValue){


    let numbers = [];

    // we want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index++){

        //  this will execute in a loop until index = eValue
        numbers.push(index);
    };

    return numbers;


}

// display the numbers and mark the even numbers bold
// display or view function
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];

        // triple equal is type and value are equal
        if(number % 2 == 0){
            className = "even"

        }else{
            className = "odd"

        }
        
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    };
    document.getElementById("results").innerHTML = templateRows;

}