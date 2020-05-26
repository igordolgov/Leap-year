let startYear = prompt('Введите начальный год');
let endYear = prompt('Введите конечный год');
let leapYearCount;

function isLeapYear(year) {
	return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
if (endYear < startYear) {
	for (i = startYear; i <= endYear; i++) {
	if (isLeapYear(i)) {
		console.log(i);
	  leapYearCount++;
	}
  }
} 
else if (startYear < endYear) {
	for (i = startYear; i <= endYear; i++) {
	if (isLeapYear(i)) {
		console.log(i);
		leapYearCount++;
		}
	}
}