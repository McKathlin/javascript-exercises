const findTheOldest = function(people) {
    const findAge = function(person) {
        const endYear = person.yearOfDeath ?? new Date().getFullYear();
        return endYear - person.yearOfBirth;
    }
    return people.reduce(
        (oldest, me) => findAge(me) > findAge(oldest) ? me : oldest,
        people[0]
    );
};

// Do not edit below this line
module.exports = findTheOldest;
