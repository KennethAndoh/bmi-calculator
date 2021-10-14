const weightGuide = document.getElementById("weight-guide");
function getbmivalue() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    height = height * 12;
    height = height * 0.025; //now height in meter

    var newbmivalue = weight / (Math.pow(height,2));

    newbmivalue =  Math.round(newbmivalue);

    document.getElementById("bmivalue").value = newbmivalue;
   
    // weight guide
    if(newbmivalue > 25){
        weightGuide.innerHTML = "Overweight"
        weightGuide.style.color = "gold"
        weightGuide.style.fontSize = "30px"
        weightGuide.style.fontWeight = "bold"
        weightGuide.style.backgroundColor = "black"
    }
     else if(newbmivalue > 18 && newbmivalue < 26){
         weightGuide.innerHTML = "Normal Weight"
         weightGuide.style.color = "green"
         weightGuide.style.fontSize = "30px"
         weightGuide.style.fontWeight = "bold"
         weightGuide.style.backgroundColor = "white"
     }
    else{
    weightGuide.innerHTML = "Under Weight";
    weightGuide.style.color = "red"
    weightGuide.style.fontSize = "30px"
    weightGuide.style.fontWeight = "bold"
    weightGuide.style.backgroundColor = "white"
}
    
}