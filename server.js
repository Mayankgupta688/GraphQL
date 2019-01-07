var express_graphql = require("express-graphql");
var express = require("express");
var http = require("http");
var app = express();

var buildScheme = require("graphql").buildSchema;


var EmplArray = [{
    id: 0,
    name: "Mayank",
    designation: "Developer"
}, {
    id: 1,
    name: "Meha",
    designation: "Developer"
}, {
    id: 2,
    name: "Anshul",
    designation: "Business"
}]

var scheme = buildScheme(`
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

function getEmployee(args) {
    var id = args.id;
    return EmplArray.filter(emp => emp.id == id)[0];
}

function getEmployees(args) {
    return EmplArray.filter(emp => (emp.designation == args.designation && emp.id == args.id));
}

// Defining a resolver:

var root = {
    message: () => "Hello World",
    employee: getEmployee,
    employees: getEmployees
}

app.use("/graphql", express_graphql({
    schema: scheme,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => "Express GraphQL Server up and running..");
