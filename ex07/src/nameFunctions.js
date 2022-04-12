function firstName(firstName) {
    return firstName.toUpperCase();
}
function lastName(lastName) {
    return lastName.toLowerCase();
}

// console.log(firstName("Ime"));
// console.log(lastName("Prezime"));

exports.firstName = firstName;
exports.lastName = lastName;