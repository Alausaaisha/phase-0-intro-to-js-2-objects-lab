// Write your solution in this file!
let employee = {
    name: 'Aisha',
    streetAddress: '45 Adeoyo',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const Newemployee = {...employee};
    Newemployee[key] = value;
    return Newemployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const Newemployee = {...employee};
    delete Newemployee[key];
    return Newemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}