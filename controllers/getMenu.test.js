const request = require("supertest");
const app = require("../index"); // Importa tu aplicación Express
const Dish = require("../models/dish.model.js"); // Importa tu modelo Dish

describe("GET /api/dishes", () => {
  beforeEach(async () => {
    // Limpia la colección de platos antes de cada prueba
    await Dish.deleteMany({});
  });

  it("debería devolver un array vacío cuando no hay platos", async () => {
    const response = await request(app).get("/api/dishes");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("debería devolver un array con los platos existentes", async () => {
    // Crea algunos platos de muestra
    const dish1 = new Dish({
      name: "Dish 1",
      description: "Description 1",
      price: 10.99,
    });
    const dish2 = new Dish({
      name: "Dish 2",
      description: "Description 2",
      price: 15.99,
    });
    await dish1.save();
    await dish2.save();

    const response = await request(app).get("/api/dishes");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].name).toBe("Dish 1");
    expect(response.body[1].name).toBe("Dish 2");
  });

  it("debería devolver un error 500 si ocurre un error en el servidor", async () => {
    // Simula un error en el modelo Dish
    const findSpy = jest
      .spyOn(Dish, "find")
      .mockRejectedValue(new Error("Error en el servidor"));

    const response = await request(app).get("/api/dishes");

    expect(response.status).toBe(500);
    expect(response.body.message).toBe("Error en el servidor");

    findSpy.mockRestore(); // Restaura el comportamiento original del método find
  });
});
