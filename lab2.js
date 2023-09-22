function makeCalendar() {
    const monthsValue = {
        "January": 1,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12
    };

    for (let [key, value] of Object.entries(monthsValue)) {
        if ( value == 2) {
            for (let day = 1; day <= 28; day++) {
                const date = `${key}-${day}-2023`;
                const dayOfWeek = getDayOfTheWeek(2023, key, day);
                console.log(`${date} is a ${dayOfWeek}.`);
            }
        } else if (value == 4 || value == 6 || value == 9 || value == 11) {
            for (let day = 1; day <= 30; day++) {
                const date = `${key}-${day}-2023`;
                const dayOfWeek = getDayOfTheWeek(2023, key, day);
                console.log(`${date} is a ${dayOfWeek}.`);
            }
        } else {
            for (let day = 1; day <= 31; day++) {
                const date = `${key}-${day}-2023`;
                const dayOfWeek = getDayOfTheWeek(2023, key, day);
                console.log(`${date} is a ${dayOfWeek}.`);
            }
        }
    }
}

function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
        return true;
    } else {
        return false;
    }
}

function getDayOfTheWeek(year, month, day) {
    const monthsCode = [ 1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const index = months.indexOf(month); 

    var step5 = monthsCode[index];

    if (isLeapYear(year) == true && (index == 0 || index == 1)) {
        step5 -= 1;
    }

    special = 0;
    if (year >= 1600 && year < 1700) {
        special = 6;
    } else if (year >= 1700 && year < 1800) {
        special = 4;
    } else if (year >= 1800 && year < 1900) {
        special = 2;
    } else if (year >= 2000 && year < 2100) {
        special = 6;
    } else if (year >= 2100 && year < 2200) {
        special = 4;
    } else {
        special = 0;
    }

    const twoDigit = (year % 100);
    const step1 = Math.floor(twoDigit / 12);
    const step2 = twoDigit - (step1 * 12);
    const step3 = Math.floor(step2 / 4);
    const step4 = day;
    const weekday = (step1 + step2 + step3 + step4 + step5 + special) % 7;

    return daysOfWeek[weekday];
}
//console.log(getDayOfTheWeek(2023, "September", 20));
module.exports = {getDayOfTheWeek, makeCalendar, isLeapYear};