export const handler = async (event) => {
  const body = JSON.parse(event.body);
  console.log("api received!", body);

  const response = {
    statusCode: 200,
    body: JSON.stringify([body.username, body.emoji, body.text]),
  };
  return response;
};
