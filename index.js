/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
	const employee = {
		firstName,
		familyName,
		title,
		payPerHour,
		timeInEvents: [],
		timeOutEvents: [],
	};
	return employee;
}
function createEmployeeRecords(employees) {
	return employees.map((employee) => createEmployeeRecord(employee));
}
function createTimeInEvent(dateStamp) {
	const [date, time] = dateStamp.split(" ");

	this.timeInEvents.push({
		type: "TimeIn",
		hour: parseInt(time, 10),
		date: date,
	});

	return this;
}

function createTimeOutEvent(dateStamp) {
	const [date, time] = dateStamp.split(" ");

	this.timeOutEvents.push({
		type: "TimeOut",
		hour: parseInt(time, 10),
		date: date,
	});

	return this;
}
function hoursWorkedOnDate(date) {
	const timeIn = this.timeInEvents.find((d) => d.date === date);
	const timeOut = this.timeOutEvents.find((d) => d.date === date);

	return (timeOut.hour - timeIn.hour) / 100;
}
function wagesEarnedOnDate(date) {
	const total = hoursWorkedOnDate.call(this, date) * this.payPerHour;
	return total;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
	const eligibleDates = this.timeInEvents.map(function (e) {
		return e.date;
	});

	const payable = eligibleDates.reduce(
		function (memo, d) {
			return memo + wagesEarnedOnDate.call(this, d);
		}.bind(this),
		0
	); // <== Hm, why did we need to add bind() there? We'll discuss soon!

	return payable;
};

function findEmployeeByFirstName(srcArray, firstName) {
	return srcArray.find((e) => e.firstName === firstName);
}

function calculatePayroll(employees) {
	const total = employees.reduce((prev, employee) => {
		return prev + allWagesFor.call(employee);
	}, 0);
	return total;
}
