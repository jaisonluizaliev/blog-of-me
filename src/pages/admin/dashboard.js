import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import { ContainerLayoutRight, Title } from '../../styles/StyledContainerRight';
import { Store } from '../../utils/store/Store';
import NextLink from 'next/link';
import { ButtonForm } from '../../styles/StyledForm';
import { toCapitalize } from '../../utils/stringsManipulate';
// import dynamic from 'next/dynamic';
// const { toCapitalize } = dynamic(
//   () => import('../../utils/stringsManipulate'),
//   { ssr: false }
// );

export default function Dashboard() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      return router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ContainerLayoutRight>
        <Title> 
          Painel do Admin ( logado como{' '}
          {userInfo?.isAdmin
            ? `${userInfo?.name.toUpperCase()} `
            : `${toCapitalize(userInfo.name)} `}{' '}
          )
        </Title>
        Painel do Admin <br /> Meus Posts (descobrir como mostrar apenas deste
        usuario) <br />
        Gerenciar <br />
        <NextLink href="/admin/new-post">
          <ButtonForm>
            <button type="button">+ Nova Postagem</button>
          </ButtonForm>
        </NextLink>{' '}
        {userInfo?.isAdmin && (
          <NextLink href="/admin/post-management">
            <ButtonForm>
              <button type="button">Gerenciar Postagens</button>
            </ButtonForm>
          </NextLink>
        )}{' '}
        
      </ContainerLayoutRight>
    </Layout>
  );
}
