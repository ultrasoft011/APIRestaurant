const Dish = require("../models/dish.model");

const getMenu = async (req, res) => {
  try {
    // Consulta todos los platos en la base de datos
    const menu = await Dish.find({});
    // Responde con el menú obtenido
    res.status(200).json(menu);
  } catch (error) {
    // Si ocurre un error, responde con un código de estado 500 y el mensaje de error
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getDishById = async (req, res) => {
  try {
    const id = req.params.id;
    const dish = await Dish.findById(id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMenu,
  getDishById,
};
