const square = require("./square");

describe("square", () => {
    // ВЫЗОВЕТСЯ ПЕРЕД КАЖДЫМ ТЕСТОМ, Позволяет проводить какие-то функции перед запуском теста
    beforeEach(() => {
        // что-то добавили в БД
    });

    // ВЫЗОВЕТСЯ ОДИН РАЗ ПЕРЕД ВСЕМИ ТЕСТАМИ
    beforeAll(() => {});

    test("Корректное значение ", () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5); // toBeLessThan -  определяем что число которое получилось < 5
        expect(square(2)).toBeGreaterThan(3); // toBeGreaterThan -  определяем что число которое получилось > 3
        expect(square(2)).not.toBeUndefined(); // .not.toBeUndefined -  определяем что возвращаемое значение не равно undefined
    });

    // ВЫЗОВЕТСЯ ПОСЛЕ КАЖДОГО ТЕСТА, Позволяет проводить какие-то функции перед запуском теста
    afterEach(() => {
        // Удалили из БД
    });

    // ВЫЗОВЕТСЯ ОДИН РАЗ ПОСЛЕ ВСЕх ТЕСТОВ
    afterAll(() => {});
});
