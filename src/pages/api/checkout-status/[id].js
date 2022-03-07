export default async function handler(req, res) {
  const { query } = req;
  const { id } = query;

  const {
    cookies: { AMToken },
  } = req;

  let options = {
    headers: {
      Authorization: `Bearer ${AMToken}`,
      'Content-Type': 'application/json',
    },
  };

  let response, data;

  response = await fetch(
    `${process.env.API_URL}/rest/default/V1/carts/mine/get-success-data/${id}`,
    options
  );

  data = await response.json();

  if (response?.status !== 200) {
    if (response?.status)
      return res
        .status(response.status)
        .json({ error: data, status: response.status });

    return res.status(400).json({ error: data });
  }

  return res.status(200).json({ data: data });
}
