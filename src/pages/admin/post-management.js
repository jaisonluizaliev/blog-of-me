import React from 'react';
import Layout from '../../components/Layout';
import Content from '../../models/Content';
import User from '../../models/User';
import { ContainerLayoutRight, Title } from '../../styles/StyledContainerRight';
import db from '../../utils/db';

// eslint-disable-next-line no-unused-vars
export default function PostManagement({ contents, users }) {
  return (
    <Layout>
      <ContainerLayoutRight>
        <Title>Gerenciamento Do Administrador</Title>
        Editar Usuarios Editar Posts Excluir Posts{' '}
      </ContainerLayoutRight>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const allContents = await Content.find({}).lean();
  const allUsers = await User.find({}).lean();
  await db.disconnect();

  return {
    props: {
      contents: allContents.map(db.convertDocToObj),
      users: allUsers.map(db.convertDocToObj),
    },
  };
}
