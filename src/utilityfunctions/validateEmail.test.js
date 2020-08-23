const validateEmail = require("../utilityfunctions/validateEmail");
test("check for valid email formats", () => {
    expect(validateEmail.validateEmail("yasirubhagya@gmail.com")).toBe(true);
    expect(validateEmail.validateEmail("yasirubhagya.gmail.com")).toBe(false);
});