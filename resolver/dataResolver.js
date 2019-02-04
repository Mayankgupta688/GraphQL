(function(dataResolver) {

    var axios = require("axios");

    var EmplArray = require("../data/employeeData").getEmployeeData();

    dataResolver.getEmployee = function(args) {
        var id = args.id;
        return EmplArray.filter(emp => emp.id == id)[0];
    }

    dataResolver.employeeList = function() {
        return axios.get("http://localhost:3000/employeeList").then(res => res.data);
    }
    
    dataResolver.getEmployees = function(args) {
        return EmplArray.filter(emp => (emp.designation == args.avatar && emp.id == args.id));
    }

    dataResolver.updateEmployee = function(args) {

        var returnEmployee = null;
        EmplArray.forEach(emp => {
            if(emp.id == args.id) {
                emp.avatar = args.newAvatar;
                returnEmployee = emp;
            }
        });

        return returnEmployee;
    }

}(module.exports));