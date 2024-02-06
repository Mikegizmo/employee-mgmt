const { getModulesPluginNames } = require("@babel/preset-env");
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  }, 
  hometown: {
    type: String,
    required: true,
  },
  famousQuote: {
    type: String,
    required: true,
  },
  activeEmployee: {
    type: Boolean,
    required: true,
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;