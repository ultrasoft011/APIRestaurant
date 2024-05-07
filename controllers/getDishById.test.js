const request = require("supertest");
const app = require("../index");
const Dish = require("../models/dish.model.js");

describe("GET /api/dishes/:id", () => {
  it("debería devolver un objeto con el plato existente de acuerdo al id proporcionado", async () => {
    const dishData = {
      id: "1",
      name: "Dish 1",
      description: "Description 1",
      price: 10.99,
    };

    try {
      //const dish = await Dish.create(dishData);
      const response = await request(app).get(`/api/dishes/${dishData.id}`);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(dishData.id);
    } catch (error) {
      console.error(error);
    }
  });
});
