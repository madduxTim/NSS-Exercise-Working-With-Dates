function howManyDays() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var a = new Date("January 1, 2016");
    var b = new Date();
    var c = b.getTime();
    var d = a.getTime();
    var e = Math.round(d / days);
    var f = Math.round(c / days);
    var g = e - f; 
    var h = g.toString().replace("-", "");
    document.getElementById("daysNum").innerHTML = "Days since 1/1/2016 = " + h;
    document.getElementById("today").innerHTML = "Today is " + b; 
    var response = document.getElementById("input").value;
    var i = new Date(`${response}` + " 2016");
    var j = i.getTime();
    var k = Math.round(j / days);
    var l = k - e;
    var m = l - h;
    if (response === "" || null || undefined || NaN) {
        alert("Let's try that again. Format your birthday like 'October 30'");
        location.reload();
    }
    if (m < 1) {
        document.getElementById("inputResponse").innerHTML = "Days until your birthday = " + (m + 365);
    } 
    if (m == 0) {
        alert("Happy Birthday!");
    } 
    if (m > 1) {
        document.getElementById("inputResponse").innerHTML = "Days until your birthday = " + (l - h);
    }
}