import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../../../components/Layout';
import Content from '../../../models/Content';
import User from '../../../models/User';
import Link from 'next/link';
import {
  ContainerLayoutRight,
  Title,
} from '../../../styles/StyledContainerRight';
import db from '../../../utils/db';
import { Store } from '../../../utils/store/Store';

// eslint-disable-next-line no-unused-vars
function PostManagement({ contents, users }) {
  const router = useRouter();
  const {
    state: {
      userInfo: { isAdmin },
    },
  } = useContext(Store);

  useEffect(() => {
    if (!isAdmin) {
      router.push('/admin/dashboard');
    }
    if(isAdmin === null) {
      router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <ContainerLayoutRight>
        <Title>Gerenciamento Do Administrador</Title>
        Editar Usuarios
        {users.map((user) => (
          <div key={user._id}>
            <Link href={`/admin/post-management/edit-user/${user._id}`}>
              {user.name}
            </Link>
          </div>
        ))}
        <br /> Editar Posts
        {contents.map((content) => (
          <div key={content._id}>
            <Link href={`/admin/post-management/edit-post/${content._id}`}>
              {content.heading}
            </Link>
          </div>
        ))}
        <br />
        Excluir Posts{' '}
        {contents.map((content) => (
          <div key={content._id}>{content.heading} X</div>
        ))}
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

export default dynamic(() => Promise.resolve(PostManagement), { ssr: false });
