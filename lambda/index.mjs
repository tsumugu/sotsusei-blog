import axios from "axios";

export const handler = async (event, context) => {
  const query_access_token = event["queryStringParameters"]["access_token"];
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(
      await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${query_access_token}`
      ).data
    ),
  };
  return response;
};
