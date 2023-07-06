const mapArrToStrings = require("./mapArrToStrings");

//* toEqual - проверяет не равенство объектов, а то что они одинаковые
describe("mapArrToStrings", () => {
    test("Корректное значение", () => {
        expect(mapArrToStrings([1, 3, 5])).toEqual(["1", "3", "5"]);
    });
    test("Мешанина", () => {
        expect(mapArrToStrings([1, 3, null, undefined, "fedor", 5])).toEqual([
            "1",
            "3",
            "5",
        ]);
    });
    test("Пустой массив", () => {
        expect(mapArrToStrings([])).toEqual([]);
    });
    test("Отрицание", () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]); // сравнение что массив [1,2,3] не будет одинаков с массивом [1,2,3,4]
    });
});
