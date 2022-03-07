async function getStaticProps(req, res) {
  const { detail } = req.query;
  const { method, body } = req;
  const {
    cookies: { AMToken },
  } = req;

  let options = {
    headers: {
      Authorization: `Bearer ${AMToken}`,
      'Content-Type': 'application/json',
    },
  };
  const respond = await fetch(
    `${process.env.API_URL}/rest/default/V1/customer/order/detail/${detail}`,
    options
  );
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}

export default getStaticProps;
