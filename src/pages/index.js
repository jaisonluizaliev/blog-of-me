import Layout from '../components/Layout';
import {
  ContainerLayoutRight,
  Paragraph,
  Title,
} from '../styles/StyledContainerRight';
import Content from '../models/Content';
import db from '../utils/db';

export default function Home({ contents }) {
  return (
    <Layout title="Home" contents={contents}>
      <ContainerLayoutRight>
        <Title>Apresentação</Title>
        <Paragraph>Este Blog  sera aprimorado muito ainda</Paragraph>
      </ContainerLayoutRight>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const allContent = await Content.find({}).lean();
  await db.disconnect();
  // allContent._id = allContent._id.toString();
  // allContent.createdAt = allContent.createdAt.toString();
  // allContent.updatedAt = allContent.updatedAt.toString();

  return {
    props: {
      contents: allContent.map(db.convertDocToObj),
    },
  };
}
