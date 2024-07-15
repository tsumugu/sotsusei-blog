import axios from "axios";

export const handler = async (event, context) => {
  const query_access_token = event["queryStringParameters"]["access_token"];
  const res = await axios.get(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${query_access_token}`
  );
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(res.data),
  };
  return response;
};
