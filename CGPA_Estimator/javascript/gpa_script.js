function convert() {
    var y = "";
    var x = document.value.cgpa.value;
    if (x > 8.5)
    y = ">3.7";
    if (x < 8.4 && x > 8.0)
    y = "3.7"
    if (x < 7.9 && x > 7.5)
    y = "3.3";
    if (x < 7.4 && x > 7.0)
    y = "3.0";
    if (x < 6.9 && x > 6.5)
    y = "2.7";
    if (x < 6.4 && x > 6.0)
    y = "2.3";
    if (x < 5.9 && x > 5.5)
    y = "2.0";
    if (x < 5.4 && x > 5.0)
    y = "1.7";
    if (x < 5.0)
    y = "0 - 1.3";
    if(!Number.isNaN(y))
    alert('Your expected GPA is ' + y);
	else
    alert("Please enter all values.")
}