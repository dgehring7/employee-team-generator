const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should create a Manager object with the name, id, email, and office number properties", () => {

            const name = "Frank";
            const id = 600;
            const email = "frank@company.com";
            const officeNumber = 520;
            const frank = new Manager(name, id, email, officeNumber);

            expect(frank.name).toEqual(name);
            expect(frank.id).toEqual(id);
            expect(frank.email).toEqual(email);
            expect(frank.officeNumber).toEqual(officeNumber);
        });
    });

    describe("getRole()", () => {
        it("Should input 'Manager' when the getRole function gets called", () => {

            const role = "Manager";
            const frank = new Manager("Frank", 75, "frank@company.com", 620);

            expect(frank.getRole()).toEqual(role);
        });
    });
});