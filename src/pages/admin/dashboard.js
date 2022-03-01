import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import { ContainerLayoutRight, Title } from '../../styles/StyledContainerRight';
import { Store } from '../../utils/store/Store';

export default function Dashboard() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();

  useEffect(() => {
    if (!userInfo.isAdmin) {
      return router.push('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ContainerLayoutRight admin>
        <Title admin>Administrador Logado ( {userInfo?.name.toUpperCase()} )</Title>
        Painel do Admin <br /> Posts 6 <br />Gerenciar <br />Novas Postagem Editar Usuarios Editar Posts
        Excluir Posts{' '}
      </ContainerLayoutRight>
    </Layout>
  );
}
