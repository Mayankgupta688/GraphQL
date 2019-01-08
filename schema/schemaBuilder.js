(function(schemaBuilder) {

    var buildScheme = require("graphql").buildSchema;

    schemaBuilder.getApiSchema = function() {
        return buildScheme(`
            type Query {
                message: String
                employee(id: Int): Employee
                employees(designation: String, id: Int): [Employee]
            }

            type Employee {
                id: Int,
                name: String
                designation: String
            }
        `);
    }

}(module.exports));