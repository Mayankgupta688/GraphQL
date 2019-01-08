var express_graphql = require("express-graphql");
var express = require("express");
var app = express();

var schema = require("./schema/schemaBuilder").getApiSchema();

var dataResolver = require("./resolver/dataResolver");

var root = {
    message: () => "Hello World",
    employee: dataResolver.getEmployee,
    employees: dataResolver.getEmployees,
    updateEmployee: dataResolver.updateEmployee
}

app.use("/graphql", express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => "Express GraphQL Server up and running..");
