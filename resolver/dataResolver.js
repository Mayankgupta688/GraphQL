(function(dataResolver) {

    var EmplArray = require("../data/employeeData").getEmployeeData();

    dataResolver.getEmployee = function(args) {
        var id = args.id;
        return EmplArray.filter(emp => emp.id == id)[0];
    }
    
    dataResolver.getEmployees = function(args) {
        return EmplArray.filter(emp => (emp.designation == args.designation && emp.id == args.id));
    }

    dataResolver.updateEmployee = function(args) {

        var returnEmployee = null;
        EmplArray.forEach(emp => {
            if(emp.id == args.id) {
                emp.designation = args.newDesignation;
                returnEmployee = emp;
            }
        });

        return returnEmployee;
    }

}(module.exports));