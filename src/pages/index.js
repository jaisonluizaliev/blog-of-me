import Layout from '../components/Layout';
import { Container } from '../components/SlugPageStyles';
import Content from '../models/Content';
import db from '../utils/db';

export default function Home({ contents }) {
  return (
    <Layout title="Home" contents={contents}>
      <Container>
        <h3>contruido</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minus
          rem, ipsam amet placeat, alias dolor sint dolorem facere, sunt quasi
          deleniti eveniet at consequuntur vero exercitationem velit! Itaque,
          odio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          minus rem, ipsam amet placeat, alias dolor sint dolorem facere, sunt
          quasi deleniti eveniet at consequuntur vero exercitationem velit!
          Itaque, odio.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          In minus rem, ipsam amet placeat, alias dolor sint dolorem facere,
          sunt quasi deleniti eveniet at consequuntur vero exercitationem velit!
          Itaque, odio.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          In minus rem, ipsam amet placeat, alias dolor sint dolorem facere,
          sunt quasi deleniti eveniet at consequuntur vero exercitationem velit!
          Itaque, odio.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          In minus rem, ipsam amet placeat, alias dolor sint dolorem facere,
          sunt quasi deleniti eveniet at consequuntur vero exercitationem velit!
          Itaque, odio.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          In minus rem, ipsam amet placeat, alias dolor sint dolorem facere,
          sunt quasi deleniti eveniet at consequuntur vero exercitationem velit!
          Itaque, odio.
        </p>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const allContent = await Content.find({}).lean();
  await db.disconnect();
  const contentPolited = allContent.map(db.convertDocToObj);

  return {
    props: {
      contents: contentPolited,
    },
  };
}
