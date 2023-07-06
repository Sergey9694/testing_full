const mapArrToStrings = (array) => {
    return array
        .filter((item) => Number.isInteger(item)) // проверка на целое число
        .map(String); // приведение к строке
};

module.exports = mapArrToStrings;
