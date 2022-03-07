export default async function getStaticProps(req, res) {
  const {
    cookies: { AMToken },
  } = req;

  try {
    const response = await fetch(
      `${process.env.API_URL}/rest/default/V1/bookmark/mine/showall`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AMToken}`,
        },
      }
    ).then((res) => res.json());

    return res.status(200).json({ response });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
}
