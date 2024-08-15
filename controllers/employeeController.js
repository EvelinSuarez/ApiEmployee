const Employee = require('../models/employee')

//Get all documents from Vehicle
const getEmployee = async(req, res)=>{
    const employees = await Employee.find()
    res.json(employees)
}

//Post Create a document in the collection Vehicle
const postEmployee = async(req, res)=>{
    const dateOfOntry = new Date(req.body.dateOfOntry)
    const dateOfExit = new Date(req.body.dateOfExit)

    const diasLaborados = (dateOfExit-dateOfOntry)/(1000 * 60 * 60 *24)
    req.body.diasLaborados = diasLaborados
    
    const cesantias =(req.body.salario *diasLaborados) / 360
    req.body.cesantias=cesantias*1.12
    
    const employee = new Employee(req.body)
    employee.save()
    res.json(employee)
}


module.exports = {
    getEmployee, postEmployee
}