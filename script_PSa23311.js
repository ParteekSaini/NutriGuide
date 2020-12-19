
/*******************Page-3(Calorie Guide) Javascript starts from here *****************************************/

// This function is called when submit button is pressed
function calculateCalorie(form){

    // First validateForm is called to validate all the inputs
    if(validateForm(form)){
        // if all the validations are correct then calculateCalorieMen or calculateCalorieWomen function 
        // is called depending upon the gender input by the user
        var gender = form.elements["output"].value;
        // console.log(gender);
        if(gender == "male"){
            calculateCalorieMen(form); 
        }
        else{
            calculateCalorieWomen(form);
        }
        return false;
    }
}

// This is the main Validate function in which validation function for each input is seperated called and
// checked whether all of them are true or not.
function validateForm(form){
    if((validateName(form)) && (validateBodyWeight(form))  && (validateHeight(form)) && (validateAge(form))
     && (validateGender(form)) && (validatephysicalActivity(form)) && (validateweightMaintance(form))){
        return true;
    }
    return false;
}


// This is the function used to calculate the calories for men by using Harries Benedict Equation which is 
// is explained in the documentation file and in the end the output is also displayed.
function calculateCalorieMen(form){
    var fullName = form.elements["fullName"].value;
    var bodyWeight = form.elements["bodyWeight"].value;
    var height = form.elements["height"].value;
    var age = form.elements["age"].value;

    var physicalActivity = form.elements["physicalActivity"].value;
    var calories =0;

    var text ="";
    text +=  "Name: " + fullName;
    text += "<br>"+"Current Body Weight: " + bodyWeight + " Kg";
    text += "<br>" + "Height: " + height + " cm";

    calories = (66.5 + (13.8*bodyWeight) + (5*height))-(6.8*age);

    if(physicalActivity =="Low physical Activity"){
        calories = calories*1.2;
    }else if(physicalActivity == "Average Physical Activity"){
        calories = calories*1.3;
    }
    else{
        calories = calories*1.4;
    }
    calories = parseInt(calories);

    text += "<br>" + "Calories Required to Maintain Current Weight: " + calories + " cal";
    if(weightMaintaince!="Maintain Weight"){
        if(weightMaintaince== "Slow Weight Loose"){
            calories = calories-280;
            text += "<br>"+"As you want to lose your weight at slow rate (0.2Kg per week) Calories intake per day will be: " + calories + " cal"; 
        }else if(weightMaintaince == "Rapid Weight Loose"){
            calories = calories -550;
            text +=  "<br>"+"As you want to lose your weight at rapid rate (0.5Kg per week) Calories intake per day will be: " + calories + " cal";
        }else if(weightMaintaince == "Slow Weight Gain"){
            calories = calories +280;
            text += "<br>"+"As you want to gain weight at slow rate (0.2Kg per week) Calories intake per day will be: " + calories + " cal";
        }else if(weightMaintaince == "Rapid Weight Gain"){
            calories = calories + 550;
            text += "<br>"+"As you want to gain weight at rapid rate (0.5Kg per week) Calories intake per day will be: " + calories + " cal";
        }
    }
    let target = document.getElementById("output");
    //console.log(calories);
    resetData(form);
    target.innerHTML = text;
}


// yhis function is used to  calculate the calories for women by using Harries Benedict Equation which is 
// is explained in the documentation file.
function calculateCalorieWomen(form){
    var fullName = form.elements["fullName"].value;
    var bodyWeight = form.elements["bodyWeight"].value;
    var height = form.elements["height"].value;
    var age = form.elements["age"].value;
    var physicalActivity = form.elements["physicalActivity"].value;
    var weightMaintaince = form.elements["weightMaintance"].value;

    var calories =0;
    var text ="";
    text +=  "Name: " + fullName;
    text += "<br>"+"Current Body Weight: " + bodyWeight + " Kg";
    text += "<br>" + "Height: " + height + " cm";
    

    calories = (665.1 + (9.6*bodyWeight) + (1.9*height))-(4.7*age);

    if(physicalActivity =="Low physical Activity"){
        calories = calories*1.2;
    }else if(physicalActivity == "Average Physical Activity"){
        calories = calories*1.3;
    }
    else{
        calories = calories*1.4;
    }
    calories = parseInt(calories);
    text += "<br>" + "Calories Required to Maintain Current Weight: " + calories + " cal";
    if(weightMaintaince!="Maintain Weight"){
        if(weightMaintaince== "Slow Weight Loose"){
            calories = calories-280;
            text += "<br>"+"As you want to lose your weight at slow rate(0.2Kg per week) Calories intake per day will be : " + calories + " cal";
                   
        }else if(weightMaintaince == "Rapid Weight Loose"){
            calories = calories -550;
            text +=  "<br>"+"As you want to lose your weight at rapid rate(0.5Kg per week) Calories intake per day will be : " + calories + " cal";
        }else if(weightMaintaince == "Slow Weight Gain"){
            calories = calories +280;
            text += "<br>"+"As you want to gain weight at slow rate(0.2Kg per week) Calories intake per day will be : " + calories + " cal";
        }else if(weightMaintaince == "Rapid Weight Gain"){
            calories = calories + 550;
            text += "<br>"+"As you want to gain weight at rapid rate(0.5Kg per week) Calories intake per day will be : " + calories + " cal";
        }
    }
    let target = document.getElementById("output");
    
   // console.log(calories);
    resetData(form);
    target.innerHTML = text;
    
}
//*************** Validation functions for form inputs starts from here ***************** */


// This fuction is for the validation of Name
function validateName(form){
    var fullName = form.elements["fullName"];

    if(fullName.validity.valueMissing){
        fullName.setCustomValidity("Please enter your full name");
        return false;
    }
    else{
        fullName.setCustomValidity("");
        return true;
    }
}


// This fuction is for the validation of Weight
function validateBodyWeight(form){
    var bodyWeight = form.elements["bodyWeight"];

    if(!bodyWeight.validity.valueMissing && isNaN(bodyWeight.value)){
        bodyWeight.setCustomValidity("Please enter your body Weight in kgs");
        return false;
    }
    else{
        bodyWeight.setCustomValidity("");
        return true;
    }
}

// This fuction is for the validation of Height
function validateHeight(form){
    var height = form.elements["height"];

    if(!height.validity.valueMissing && isNaN(height.value)){
        height.setCustomValidity("Please enter your height in cm");
        return false;
    }
    else{
        height.setCustomValidity("");
        return true;
    }
}

// This fuction is for the validation of Age
function validateAge(form){
    var input = form.elements["age"];
    var Age = parseFloat(form.elements["age"].value) ;
    
    if(input.validity.valueMissing){
        input.setCustomValidity("Please enter your age in number");
        return false;
    } else if(!Number.isInteger(Age)){
        input.setCustomValidity("Please enter a whole number");
    }
     else if(age.validity.rangeUnderflow || age.validity.rangeOverflow){
        input.setCustomValidity("The value should be between 10 and 90");
        return false;
    }
    else{
        input.setCustomValidity("");
        return true;
    }

}

// This fuction is for the validation of Gender
function validateGender(form){
    var gen = form.elements["gender"];
        //console.log(gen.value);
       // console.log(gen[1].value);
    if((gen[0].checked==false) && (gen[1].checked==false)){
        gen[0].setCustomValidity("Please select one of the following option");
        return false;
    }
    else{
        gen[0].setCustomValidity("");
        return true;
    }
}

// This fuction is for the validation of Physical Activity
function validatephysicalActivity(form){
    var physicalActivity = form.elements["physicalActivity"];

    if(!(physicalActivity.value == "Low physical Activity" || physicalActivity.value == "Average Physical Activity"
        || physicalActivity.value == "Heavy Physical Activity")){
            physicalActivity.setCustomValidity("Please select an option");
            return false
        }else{
            return true;
        }
}

// This fuction is for the validation of Weight Maintainance input
function validateweightMaintance(form){
    var weightMaintance = form.elements["weightMaintance"];

    if(!(weightMaintance.value == "Slow Weight Loose" || weightMaintance.value == "Rapid Weight Loose" ||
    weightMaintance.value == "Maintain Weight" || weightMaintance.value == "Slow Weight Gain" || 
    weightMaintance.value == "Rapid Weight Gain")){
        weightMaintance.setCustomValidity("Please select an option");
        return false;
    }else{
        return true;
    }
    
}

//*************** Validation Functions for form inputs ends here ************************ */

// This function is used to reset all the inputs of the form on third page(Calorie Guide) 
function resetData(form){
    var fullName = form.elements["fullName"];
    var bodyWeight = form.elements["bodyWeight"];
    var height = form.elements["height"];
    var age = form.elements["age"];
    var physicalActivity = form.elements["physicalActivity"];
    var gender = form.elements["gender"];
    var output = form.elements["output"];
    var weightMaintaince = form.elements["weightMaintance"];
    fullName.value="";
    bodyWeight.value="";
    height.value = "";
    age.value = "";
    physicalActivity.value="";
    gender[0].checked = false;
    gender[1].checked = false;
    output.value = "";
    weightMaintaince.value="";
    return false;
}

/*******************Page-3(Calorie Guide) Javascript ends here *****************************************/


/*******************Page-4(Meal Guide) Javascript starts from here *****************************************/

// This fuction is called when submit button is pressed on page 4(Meal Guide)
// This fuction changes the display of the section which is selcted by user
function mealGuide(form){
    var mealChoices = form.elements["mealChoices"];

    var section;
        if(mealChoices.value=="Weight Lose"){
            section = document.getElementById("weightLoss");
            section.style.display = "flex";
        }
        else if(mealChoices.value=="Maintain Weight"){
            section = document.getElementById("maintainWeight");
            section.style.display= "flex";
        }else if(mealChoices.value== "Weight gain"){
            section = document.getElementById("gainWeight");
            section.style.display = "flex";
        }

    return false;
}


// This function is used to reset the form on Pafe-4(Meal Guide)
function resetMealData(form){

    var mealChoices = form.elements["mealChoices"];
    mealChoices.value="";

    var section = document.getElementById("weightLoss");
    section.style.display= "none";

        section = document.getElementById("maintainWeight");
        section.style.display= "none";
        
        section = document.getElementById("gainWeight");
        section.style.display = "none";

        return false;
}

/*******************Page-4(Meal Guide) Javascript ends here *****************************************/


/****** Dyanmic Content Javascript coding Start from here which is used by all Pages *********************/

// This function is used to capture the width of outer div
function captureWidth(){
    var outerDiv = document.getElementById("head");
    var outerDivWidth = outerDiv.clientWidth;
    return outerDivWidth;
}

// Event listener is added to capture the changing width of outer div without refreshing the page
window.addEventListener("resize", captureWidth);

// This function is called onload from the body where text content inside inner div is moved until
// the width of outer div by providing the left padding and making the left padding zero when 
// it reaches the width of outer div
function currentWidth() {
    
        var element = document.getElementById("movingDiv");
        var position = 0;
        element.style.width = "250px";
        var innerDivWidth = element.clientWidth;
        setInterval(moveframe , 10);
        function moveframe(){
            var outerDivWidth = captureWidth();
            var difference = outerDivWidth - innerDivWidth;
            if(position<difference){
                position++;
                element.style.paddingLeft = position + 'px';
                //console.log(difference);
            }
            else if(position>=difference){
                position=0;
            }
        }       

}