const validateBirthday = require("../utilityfunctions/validateBirthday");
test("check for valid email formats", () => {
    expect(validateBirthday.validateBirthday(new Date('2018-02-24'))).toBe(true);
    expect(validateBirthday.validateBirthday(new Date('2020-08-20'))).toBe(false);
});