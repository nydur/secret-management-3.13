// Import the handler
const { handler } = require('./index');

describe('handler', () => {
  it('returns the correct HTTP response', async () => {
    // Call the handler function with a mock event object
    const response = await handler({});

    // Define the expected response
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "THIS IS OUR HTTP RESPONSE!",
      }, null, 2),
    };

    // Expect the handler's response to match the expected response
    expect(response).toEqual(expectedResponse);
  });
});
