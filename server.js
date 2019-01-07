var express_graphql = require("express-graphql");
var express = require("express");
var http = require("http");
var app = express();

var buildScheme = require("graphql").buildSchema;

var scheme = buildScheme(`
    type Query {
        message: String
    }
`);

// Defining a resolver:

var root = {
    message: () => "Hello World"
}

app.use("/graphql", express_graphql({
    schema: scheme,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => "Express GraphQL Server up and running..");
