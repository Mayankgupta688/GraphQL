(function(employeeData) {

    var axios = require("axios");

    employeeData.getEmployeeData = function() {
        return [{
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
        }];
    }

    employeeData.getAsyncData = function() {
        return axios.get("http://localhost:3000/employeeList").then(res => res.data);
    }

}(module.exports));