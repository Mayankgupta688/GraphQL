var express = require("express");
var express_graphql = require("express-graphql");
var dataResolver = require("./resolver/dataResolver");
var schema = require("./schema/schemaBuilder").getApiSchema();

var app = express();
const cors = require('cors');
app.use(cors());

app.use("/graphql", express_graphql({
    schema: schema,
    rootValue: {
        message: () => "Hello World",
        employee: dataResolver.getEmployee,
        employees: dataResolver.getEmployees,
        employeeList: dataResolver.employeeList,
        updateEmployee: dataResolver.updateEmployee
    },
    graphiql: true
}));

app.listen(4000, () => "Express GraphQL Server up and running..");
