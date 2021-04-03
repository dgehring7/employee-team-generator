const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an Engineer object with name, id, email, and Github name", () => {

            const name = "Rich";
            const id = 300;
            const email = "rich@company.com";
            const github = "github.com/rich";
            const rich = new Engineer(name, id, email, github);

            expect(rich.name).toEqual(name);
            expect(rich.id).toEqual(id);
            expect(rich.email).toEqual(email);
            expect(rich.github).toEqual(github);
        });
    });

    describe("getGithub()", () => {
        it("should input Engineers github name when getGithub function is called", () => {

            const github = "github.com/testcase";
            const Stacy = new Engineer("Stacy", 400, "stacy@company.com", github);

            expect(Stacy.getGithub()).toEqual(github);
        });
    });

    describe("getRole()", () => {
        it("should input Engineer when engineer.getRole is called", () => {

            const role = "Engineer";
            const Rob = new Engineer("Rob", 305, "rob@company.com", "github.com/robisreal");

            expect(Rob.getRole()).toEqual(role);
        });
    });
});