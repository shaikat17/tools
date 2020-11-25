//jshint esversion:6

var b_year, b_month, b_date, p_year, p_month, p_date, age_date, age_month, age_year, calc_age;

/*var m_dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function checkLeapYear(val)
{
    if(val%4===0 || (val%400===0 && val%100!=0)) return 1;
    else return 0;
}*/

function show_age() {
    /*calc_age = "";*/
    //user inputs
    b_year = document.getElementById('year').value;
    b_month = document.getElementById('month').value;
    b_date = document.getElementById('date').value;

    b_month -= 1;

    //current dates
    /*if(checkLeapYear(b_year)){
        m_dates[1] += 1;
    }
    var d = new Date();
    p_year = d.getFullYear();
    p_month = d.getMonth();
    p_date = d.getDate();
    
    p_month += 1;
    
    if(b_date > p_date){
        p_date += m_dates[b_month-1];
        p_month -= 1;
    }
    
    if(b_month > p_month){
        p_year -= 1;
        p_month += 12;
    }
    
    age_date = p_date - b_date;
    age_month = p_month - b_month;
    age_year = p_year - b_year;*/

    /*var tday = age_date + (age_year*365) + (age_month*30);
    var tMonth = Math.round(tday/30);
    tMonth += " Months " + tday%30 + " Days";
    var tWeek = Math.round(tday/7) + " Weeks " + tday%7 + " Days";
    var tHours = tday*24;
    var tminutes = tHours*60 + " Minutes";
    var tSecond = tday*60*60 + " Seconds";
    
    calc_age += age_year.toString();
    calc_age += " Years " + age_month.toString();
    calc_age += " Months " + age_date.toString() + " Days";*/


    var mls = new Date();
    mls.setFullYear(b_year, b_month, b_date);

    var present = new Date();

    var dif = present.getTime() - mls.getTime();

    var fullAge = Math.floor(dif / (1000 * 365.25 * 60 * 60 * 24)) + " Years " + Math.floor((dif % (1000 * 365.25 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24 * 30)) + " Months " + Math.floor(((dif % (1000 * 365.25 * 60 * 60 * 24)) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)) + " Days ";

    var months = Math.floor(dif / (1000 * 60 * 60 * 24 * 30)) + " Months " + Math.floor((dif % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)) + " Days";

    var days = Math.floor(dif / (1000 * 60 * 60 * 24)) + " Days";

    var hours = Math.floor(dif / (1000 * 60 * 60)) + " Hours";

    var minutes = Math.floor(dif / (1000 * 60)) + " Minutes";

    var Seconds = Math.floor(dif / (1000)) + " Seconds"

    document.getElementById("show").innerHTML = "= " + fullAge + "\r\n= " + months + "\r\n= " + days + "\r\n= " + hours + "\r\n= " + minutes + "\r\n= " + Seconds;
}


//GPA Calculator

let grade, grade_show, result;

function show_grade() {
    grade = document.getElementById("gpa_grade").value;
    grade_show = document.getElementById("grade_show");

    grade = Number(parseFloat(grade).toFixed(2));

    switch (true) {
        case grade === 5.00:
            result = `<p>A<sup>+</sup></p>`;
            break;
        case grade >= 4.00 && grade <= 4.99:
            result = `<p>A</p>`;
            break;
        case grade >= 3.50 && grade <= 3.99:
            result = `<p>A<sup>-</sup></p>`;
            break;
        case grade >= 3.00 && grade <= 3.49:
            result = `<p>B</p>`;
            break;
        case grade >= 2.00 && grade <= 2.99:
            result = `<p>C</p>`;
            break;
        case grade >= 1.00 && grade <= 1.99:
            result = `<p>D</p>`;
            break;
        case grade >= 0.00 && grade <= 0.99:
            result = `<p>F</p>`;
            break;
        default:
            result = `Opps! Wrong input.`;
            break;
    }

    grade_show.innerHTML = result;
    
}
