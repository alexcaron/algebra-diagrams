const Equation = require('../models/equation.js');

const getEquationsForUserByUserId = (userId) => {
  return Equation.find({userId: userId});
};

const getEquationById = (id) => {
  return Equation.findById(id);
};

const updateEquationById = (id, newEquation) => {
  return Equation.findOneAndUpdate(id, {id: id, equation: newEquation});
};

const deleteEquationById = (id) => {
  return Equation.remove({id: id});
};

module.exports.getEquationsForUserByUserId = getEquationsForUserByUserId;
module.exports.getEquationById = getEquationById;
module.exports.updateEquationById = updateEquationById;
module.exports.deleteEquationById = deleteEquationById;