    // Toggle Between Metric and Standard
    function toggle() {
        var x = document.getElementById("Standard");
        var y = document.getElementById("Metric");
        var a = document.getElementById("b1");
        var b = document.getElementById("b2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        a.style.visibility = "visible";
        b.style.visibility = "hidden";
        document.getElementById("Result").innerHTML = "";
    }
    else {
        x.style.display = "none";
        y.style.display = "block";
        a.style.visibility = "hidden";
        b.style.visibility = "visible";
        document.getElementById("Result").innerHTML = "";
    }
    }
    // Computation and Result Text


    // For Standard
    function computeStandard() {
        var ft = document.getElementById("feet").value;
        var i = document.getElementById("inches").value;
        var height = Number(i) + (ft * 12);
        var weight = document.getElementById("pounds").value;
        var bmi = weight / (height * height) * 703;
        var classification = "";
        if (bmi.toFixed(1) < 18.5){
            classification= "Underweight";
            }
        else if (bmi.toFixed(1) >= 18.5){
            classification= "Normal";
            }
        else if (bmi.toFixed(1) >= 25){
            classification= "Overweight";
            }
        else if (bmi.toFixed(1) >= 30){
            classification= "Obese";
          }
        document.getElementById("Result").innerHTML = "Your BMI is: " + bmi.toFixed(1) + "\t Classification: " + classification;

    }

    //For Metric
    function computeMetric() {
        var weight = document.getElementById("kilograms").value;
        var cm = document.getElementById("centimeters").value;
        var height = cm / 100;
        var bmi = weight / (height * height);
        var bmiClass;
        var classification = "";
        if (bmi.toFixed(1) < 18.5){
            classification= "Underweight";
            }
        else if (bmi.toFixed(1) >= 18.5){
            classification= "Normal";
            }
        else if (bmi.toFixed(1) >= 25){
            classification= "Overweight";
            }
        else if (bmi.toFixed(1) >= 30){
            classification= "Obese";
          }
        document.getElementById("Result").innerHTML = "Your BMI is: " + bmi.toFixed(1) + "\t Classification: " + classification;

    }
