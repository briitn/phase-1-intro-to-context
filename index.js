// Your code here

const array=[{
    firstName:"prince",
    middleName:"f",
    lastName:"Gobah"
}]

    
function createEmployeeRecord(array){

return{
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
}

}

function createEmployeeRecords(array){return array.map(arrays=>createEmployeeRecord(arrays))

}
function createTimeInEvent(record,date){const timeIn={
    type:"TimeIn",
    hour:parseInt(date.slice(-4)),
    date:date.slice(0,10)
    
};record.timeInEvents.push(timeIn)
return record

}
function createTimeOutEvent(record,date){const timeOut={
    type:"TimeOut",
    hour:parseInt(date.slice(-4)),
    date:date.slice(0,10)
    
};record.timeOutEvents.push(timeOut)
return record

}
function hoursWorkedOnDate(record,date){
    const timeIn=record.timeOutEvents.find(item=>item.date===date)
    const timeOut=record.timeInEvents.find(item=>item.date===date)
return (timeIn.hour-timeOut.hour)/100
}

function wagesEarnedOnDate(record, date){
    
  return hoursWorkedOnDate(record,date)*record.payPerHour
}
function allWagesFor(record) {
    const allWages = record.timeInEvents.map(item => wagesEarnedOnDate(record, item.date));
    return allWages.reduce((total, wage) => total + wage);
  }

function calculatePayroll(records) {
    const allEmptotal = records.map(record => allWagesFor(record))
    return allEmptotal.reduce((total, empTotal) => total + empTotal)
  }
  

console.log(createEmployeeRecord(array))


//console.log("expecting:hey")
//console.log('=>', createEmployeeRecord(['hey','pop','lol']))