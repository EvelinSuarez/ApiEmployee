const {model, Schema} = require('mongoose')

const EmployeeSchema = new Schema({
    document: {
        type: Number,
        unique:true,
        required:[true, 'The field document is required'],
        maxLength :[6, 'Max 6 characters'],
        minLength :[5, 'Max 5 characters'],
    },
    names: {
        type: String,
        required:[true, 'The field names is required'],
        minLength :[2, 'Min 3 characters'],
    },
    dateOfOntry: {
        type: Date,
        required:[true, 'The field date of ontry is required'],
    },
    dateOfExit: {
        type: Date,
        required:[true, 'The field date of exit is required'],
    },
    salario: {
        type: Number,
        required:[true, 'The fiel salary is required'],
    },
    diasLaborados: {
        type: Number
    },
    cesantias: {
        type: Number,
        required:[true, 'The field severance pay is required'],
    }
    
}) 

module.exports = model('Employee',EmployeeSchema,'employee')//primero define la clase, el segundo al nombre de la esquema, tercero nombre de la collection