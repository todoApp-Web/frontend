import axios from "axios";
import { afterAll, beforeEach, describe, expect, it } from "vitest";
import { getTodos, postTodos } from "../../src/services";

const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);
const apiUrl = "http://localhost:3000";

describe("Todos api check", () => {
  afterAll(() => {
    mock.restore();
  });
  beforeEach(() => {
    mock.reset();
  });

  it("loads todos", async () => {
    const response = await getTodos(`${apiUrl}`);

    expect(response.status).toBe(200);
  });
  it("post todos", async () => {
    const response = await postTodos(`${apiUrl}`, {
      text: "Test Demo",
    });

    expect(response.status).toBe(201);
  });
});
