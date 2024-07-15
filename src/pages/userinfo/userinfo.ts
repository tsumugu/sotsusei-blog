export async function GET({ params }: { params: { access_token: string } }) {
  return new Response(
    JSON.stringify({
      res: await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${params.access_token}`
      ),
    })
  );
}
