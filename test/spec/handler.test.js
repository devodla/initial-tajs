import assert from "node:assert";
import { EventEmitter } from "node:events";
import { describe, it } from "node:test";
import { handler } from "../../app/api.js";

const mockRequest = ({ url, method, headers, body }) => {
  const options = {
    url: url ?? "/",
    method: method ?? "GET",
    headers: headers ?? {},
  };

  const request = new EventEmitter();

  request.url = options.url;
  request.method = options.method;
  request.headers = options.headers;

  setTimeout(() => request.emit("data", JSON.stringify(body)));

  return request;
};

const mockResponse = ({ mockContext }) => {
  const response = {
    writeHead: mockContext.fn(),
    end: mockContext.fn(),
  };
  return response;
};

const getFirstCallArg = ({ mock }) => mock.calls[0].arguments[0];

describe("api unit test suite", () => {
  describe("/login", () => {
    it("should receive not authorized when user or password is invalid", async (context) => {
      const inputRequest = mockRequest({
        url: "/login",
        method: "POST",
        body: {
          user: "invalid",
          password: "",
        },
      });
      const outputReponse = mockResponse({
        mockContext: context.mock,
      });
      await handler(inputRequest, outputReponse);
      const expected = 401;
      assert.strictEqual(
        getFirstCallArg(outputReponse.writeHead),
        expected,
        `should receive 401 status code, received ${getFirstCallArg(
          outputReponse.writeHead
        )}`
      );

      const expectedResponse = JSON.stringify({ error: "user invalid!" });
      assert.strictEqual(
        outputReponse.end.mock.callCount(),
        1,
        "should call response.end once"
      );
      assert.strictEqual(
        getFirstCallArg(outputReponse.end),
        expectedResponse,
        `should receive ${expectedResponse}, received ${getFirstCallArg(
          outputReponse.end
        )}`
      );
    });
  });
});
