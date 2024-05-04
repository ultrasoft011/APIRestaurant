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

const createDish = async (req, res) => {
  try {
    const dish = await Dish.create(req.body);
    console.log(req.body);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findByIdAndUpdate(id, req.body);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDish = async (req, res) => {
  try {
    // Obtener el ID del plato a eliminar desde los parámetros de la solicitud
    const id = req.params.id;

    // Buscar y eliminar el plato por su ID utilizando Mongoose
    const deletedDish = await Dish.findByIdAndDelete(id);

    // Si el plato no existe, responder con un código de estado 404
    if (!deletedDish) {
      return res.status(404).json({ error: "Dish not found" });
    }

    // Si el plato se elimina correctamente, responder con el plato eliminado
    res.status(200).json(deletedDish);
  } catch (error) {
    // Si ocurre un error, responder con un código de estado 500 y el mensaje de error
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMenu,
  getDishById,
  createDish,
  updateDish,
  deleteDish,
};
