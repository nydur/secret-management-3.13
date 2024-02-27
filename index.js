module.exports.handler = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "THIS IS OUR HTTP RESPONSE!",
          input: event,
        },
        null,
        2
      ),
    };
  };
  