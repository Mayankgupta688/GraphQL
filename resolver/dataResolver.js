(function(dataResolver) {

    var axios = require("axios");

    var EmplArray = require("../data/employeeData").getEmployeeData();

    dataResolver.getEmployee = function(args) {
        var id = args.id;
        return EmplArray.filter(emp => emp.id == id)[0];
    }

    dataResolver.employeeList = function() {
        return axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(res => res.data);
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