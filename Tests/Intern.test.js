const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
       it("should create a new intern object with name, email, and school properties", () => {

        const name = "Scott";
        const id = 102;
        const email = "scott@company.com";
        const school = "University of Alabama";
        const scott = new Intern(name, id, email, school);

        expect(scott.name).toEqual(name);
        expect(scott.id).toEqual(id);
        expect(scott.email).toEqual(email);
        expect(scott.school).toEqual(school);
       });
    });

    describe("getSchool()", () => {
        it("Should input school property when getSchool function is called", () => {

            const school = "Duke University";
            const Kevin = new Intern("Kevin", 110, "kevin@company.com", school);

            expect(Kevin.getSchool()).toEqual(school);
        });
    });

    describe("getRole()", () => {
        it("Should input 'Intern' when getRole function is called", () => {
            
            const role = "Intern";
            const vicky = new Intern("Vicky", 120, "vicky@company.com", "Northwestern");

            expect(vicky.getRole()).toEqual(role);
        });
    });
});