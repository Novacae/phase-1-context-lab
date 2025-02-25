const { it } = require("mocha")

/* Your Code Here */
function createEmployeeRecord(arry) {
    return {
        firstName : arry[0],
        familyName : arry[1],
        title : arry[2],
        payPerHour : arry[3],
        timeInEvents : [],
        timeOutEvents : [],
    }
}
   function createEmployeeRecords (arryData) {
    return arryData.map(function(arry){
        return createEmployeeRecord(arry)

    })
 }
        function  createTimeInEvent (dateStamp) {
        let [date,hour] = dateStamp.split(' ')

        this.timeInEvents.push({
            type: "TimeIn",
            hour : parseInt(hour,10),
            date,
        }
      )
return this
    
    }

    function createTimeOutEvent(dateStamp) {
        let [date,hour] = dateStamp.split(' ')

        
        this.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour, 10),
            date,
        })
        return this
        
    }

    function hoursWorkedOnDate(lookedUpDate) {
        let TimeInsideEv = timeInEvents.find(function(ev){
            return ev.date === lookedUpDate
        })
        let TimeOUuutEv = timeOutEvents.find(function(ev){
            return ev.date === lookedUpDate
        })
        return TimeOUuutEv.hour - TimeInsideEv.hour
    }
         
     function wagesEarnedOnDate(soughtAfterDate){
        let wages = hoursWorkedOnDate.call(this,soughtAfterDate)
        this.payPerHour
        return parseFloat(wages(2))
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
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

