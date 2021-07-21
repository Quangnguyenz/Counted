//Get the values from the Page
//Starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //We need to validate input 
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }

}

//Generate numbers from the start value to the end value
//Logic function(s)
function generateNumbers(sValue, eValue) {
    let numbers = [];

    // Want all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {

        //this will execute in a loop untin index = eValue
        numbers.push(index);
    }
    return numbers;
}

//Display the numbers and mark even numbers bolds
//Display or view functions
function displayNumbers(numbers) {
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let className = "even";

        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}