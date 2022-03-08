import Layout from '../components/Layout';
import {
  ContainerLayoutRight,
  Paragraph,
  Title,
} from '../styles/StyledContainerRight';
import Content from '../models/Content';
import db from '../utils/db';
// import { useContext, useEffect } from 'react';
// import { Store } from '../utils/store/Store';
// import { useRouter } from 'next/router';

export default function Home({ contents }) {

  // const {state: {userInfo}} = useContext(Store);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!userInfo) {
  //     router.push('/login');
  //   }
    
    
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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

  return {
    props: {
      contents: allContent.map(db.convertDocToObj),
    },
  };
}
