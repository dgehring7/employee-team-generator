const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create a new employee with name, email, and id", () => {
            // javascript code
            const name = "Don";
            const id = 100;
            const email = "don@company.com";
            const Don = new Employee(name, id, email);

            expect(Don.name).toEqual(name);
            expect(Don.id).toEqual(id);
            expect(Don.email).toEqual(email);
        });
    });

    describe("getName()", () => {
        it("Should input the employee name when function is called", () => {

            const name = "Steve";
            const Steve = new Employee(name, 20, "steve@company.com");

            expect(Steve.getName()).toEqual(name);
        });
    });

    describe("getId()", () => {
        it("should return the employee id when getId function is called", () => {

            const id = 100;
            const Matt = new Employee("Matt", id, "Matt@company.com");

            expect(Matt.getId()).toEqual(id);
        });
    });

    describe("getEmail()", () => {
        it("should return the employee email when the getEmail function is called", () => {

            const email = "Dennis@company.com";
            const Dennis = new Employee("Dennis", 105, email);

            expect(Dennis.getEmail()).toEqual(email);
        });
    });

    describe("getRole()", () => {
        it("should return 'Employee' when getRole funtion is called", () => {

            const role = "Employee";
            const Jen = new Employee("Jen", 200, "Jen@company.com");

            expect(Jen.getRole()).toEqual(role);
        });
    });
});
