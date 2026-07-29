const request = require("supertest");
const app = require("../server/server");

describe("GET /foods", () => {
  it("should return all foods", async () => {
    const res = await request(app).get("/foods");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(5);
  });
});
