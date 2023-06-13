const Equation = require('../models/equation.js');

const addEquation = (userId, equation, next) => {
  return Equation.create({userId, equation, next});
}

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

module.exports.addEquation = addEquation;
module.exports.getEquationsForUserByUserId = getEquationsForUserByUserId;
module.exports.getEquationById = getEquationById;
module.exports.updateEquationById = updateEquationById;
module.exports.deleteEquationById = deleteEquationById;