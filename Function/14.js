function isLeapYear(year){
    if((year%4==0) && ((year%100!=0) || (year%400==0))){
        return true;
    }
    return false;
}
var leapYear=isLeapYear(2100);
console.log(leapYear);
var leapYear1=isLeapYear(2004);
console.log(leapYear1);