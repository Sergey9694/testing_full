const validateValue = require("./validateValue");

//* 1-ый арг - 'название теста', 2-й арг - каллбек
// в expect - передаем результат вычислений
// toBe - сравнивает примитивные значения
test("Валидация значения", () => {
    expect(validateValue(50)).toBe(true); //проверили что при 50 функция вернет труе
});

//* describe('название тесткейса) - обертка для тестов, если нужно записать несколько сценариев

describe("validateValue", () => {
    test("Корректное значение", () => {
        expect(validateValue(50)).toBe(true); //проверили что при 50 функция вернет труе
    });
    test("Меньше корректного", () => {
        expect(validateValue(-1)).toBe(false); //проверили что при -1 функция вернет false
    });
    test("Больше корректного", () => {
        expect(validateValue(101)).toBe(false); //проверили что при 101 функция вернет false
    });
    test("Пограничное значение снизу", () => {
        expect(validateValue(0)).toBe(false); //проверили что при 0 функция вернет true
    });
    test("Пограничное значение сверху", () => {
        expect(validateValue(100)).toBe(true); //проверили что при 100 функция вернет true
    });
});
