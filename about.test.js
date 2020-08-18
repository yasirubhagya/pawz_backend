const getAboutUsLink = require("./about");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
    expect(getAboutUsLink("en-SL")).toBe("/about-SL");
});