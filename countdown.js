function StartClock(div) {
    DisplayCalc(div);
}

function Calc(numsecs, num1, num2) {
    s = ((Math.floor(numsecs / num1)) % num2).toString();
    if (s.length < 2) {
        s = "0" + s;
    }
    return (s);
}

function DisplayCalc(div) {
    var todate = new Date("04/08/2023 12:00 AM EST");
    var currentdate = new Date();
    ddiff = new Date(todate - currentdate);
    numsecs = Math.floor(ddiff.valueOf() / 1000);

    var DisplayStr;
    var DisplayFormat = "%%D%% days";
    DisplayStr = DisplayFormat.replace(/%%D%%/g, Calc(numsecs, 86400, 100000));
    if (numsecs >= 0) {
        document.getElementById(div).innerHTML = DisplayStr;
        setTimeout("DisplayCalc('" + div + "'," + (numsecs - 1) + ");", 990);
    }
    else {
        document.getElementById(div).innerHTML = "";
    }
}
