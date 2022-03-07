import { MICROSERVICE_BASE_URL } from 'utils/constant';

export default async function getServerSideProps(req, res) {
  const { sub } = req.query;
  console.log(sub);
  const respond = await fetch(
    MICROSERVICE_BASE_URL + `/recipe?bahan_utama=${sub}`
  );
  const data = await respond.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return res.status(200).json({ data: data });
}
