let signsColection = [
    {"Name": "Aquarius", "startDate": "01-20","endDate":"02-18"},
    {"Name": "Pisces", "startDate": "02-19","endDate":"03-20"},
    {"Name": "Aries", "startDate": "03-21","endDate":"04-19"},
    {"Name": "Taurus", "startDate": "04-20","endDate":"05-20"},
    {"Name": "Gemini", "startDate": "05-21","endDate":"06-21"},
    {"Name": "Cancer", "startDate": "06-22","endDate":"07-23"},
    {"Name": "Leo", "startDate": "07-24","endDate":"08-22"},
    {"Name": "Virgo", "startDate": "08-23","endDate":"09-22"},
    {"Name": "Libra", "startDate": "09-23","endDate":"10-22"},
    {"Name": "Scorpio", "startDate": "10-23","endDate":"11-21"},
    {"Name": "Sagittarius", "startDate": "11-22","endDate":"12-21"},
    {"Name": "Capricorn", "startDate": "12-22","endDate":"01-19"}
];

const date_range = (date, startDate, endDate, kindOfComparison) => {

    if ( kindOfComparison == "and" ){
        return (date >= startDate && date <= endDate);
    } else if( kindOfComparison == "or" ){
        return (date >= startDate || date <= endDate);
    }

}

const retorna_signo = (signos, date) => {

    let ano = date.getFullYear();

    for ( const signo of signos ){

        let startDateSign =
         new Date(ano + "-" + signo["startDate"] + " 00:00:00");
        let endDateSign =
         new Date(ano + "-" + signo["endDate"] + " 23:59:59");

        let kindOfComparison = signo["startDate"] == "12-22" ? "or" : "and";

        if (date_range(date, startDateSign, endDateSign, kindOfComparison)){
            return signo["Name"];
        }

    }

}

let dateApp = new Date();

const signName = retorna_signo(signsColection, dateApp);

alert("Today's Zodiac Sign is: " + signName);

