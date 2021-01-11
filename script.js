function getHistory() {
    return document.getElementById("history").innerText;
}
function printHistory(num) {
    return document.getElementById("history").innerText=num;
}
function getOutput() {
    return document.getElementById("output").innerText;
}
function printOutput(num) {
    if(num == ""){
       return document.getElementById("output").innerText = num; 
    }
    else{
        return document.getElementById("output").innerText= getFormattedNumber(num);
    }
}


// this funtion is for putting commas in numbers
function getFormattedNumber(num) {
    if(num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
// this funtion is for putting commas in numbers

// this function is for removing commas in numbers
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g ,''));
}

// this function is for removing commas in numbers

var operator = document.getElementsByClassName("operator");
for(i=0; i<operator.length; i++) {
    operator[i].addEventListener('click' , function() {
        // alert("The Operator Clicked"+this.id);
        if(this.id == "clear") {
            printOutput("");
            printHistory("");
        }
        else if(this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if(output) {
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }

        else{
            var output = getOutput();
            var history = getHistory();
            // Once the operator is given , it's unable to cahnge the following will solve that
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
            }
            // Once the operator is given , it's unable to cahnge the above will solve that
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
                history = history + output;
                if(this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }

        
        
    })
}

var number = document.getElementsByClassName("number");
for(i=0; i<number.length; i++) {
    number[i].addEventListener('click' , function() {
        var output = reverseNumberFormat(getOutput());
        if(output != NaN) { // if output is number
            output = output+this.id;
            printOutput(output);
        }
    })
}




