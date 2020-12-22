(function(schemaBuilder) {

    var buildScheme = require("graphql").buildSchema;

    schemaBuilder.getApiSchema = function() {
        return buildScheme(`
            type Query {
                message: String
                employeeList: [Employee]
                employee(id: Int): Employee
                employees(avatar: String, id: Int): [Employee]
            }
            type Mutation {
                updateEmployee(id: Int, newAvatar: String): Employee
            }
            type Employee {
                id: Int,
                name: String,
                avatar: String,
                createdAt: String
            }
        `);
    }

}(module.exports));