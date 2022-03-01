import { RiLoginBoxLine } from 'react-icons/ri';
import Head from 'next/head';
import Image from 'next/image';
import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import {
  Button,
  Container,
  ContentMain,
  FirstChildContent,
  FirstChildFooter,
  FirstChildHeader,
  Footer,
  Header,
  LoginButtonContainer,
  Main,
  SecondChildContent,
  SecondChildFooter,
  SecondChildHeader,
  Span,
} from '../styles/StyledLayout';
import NextLink from 'next/link';
import { Store } from '../utils/store/Store';
import jsCookie from 'js-cookie';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

function Layout({ children, title, contents }) {
  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const handleLogout = () => {
    dispatch({ type: 'USER_LOGOUT' });
    jsCookie.remove('userInfo');
    router.push('/');
  };

  const pushToDashboard = () => {
    router.push('/admin/dashboard');
  };

  const theme = {
    colors: {
      primary: userInfo?.isAdmin ? 'goldenrod' : '#2121e673',
    },
    border: {
      admin: userInfo?.isAdmin ? '1px solid goldenrod' : '',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title ? `${title} - Jaison's Blog` : `Jaison's Blog`}</title>
      </Head>

      <Container primary>
        <Header border>
          <FirstChildHeader>
            <span>
              <div>
                <Image
                  src="/profile.jpg"
                  alt="profile"
                  width={170}
                  height={170}
                />
              </div>
            </span>
            <h1>Jaison&#39;s Blog</h1>
          </FirstChildHeader>
          <SecondChildHeader>
            <p>
              <cite>
                &#34; Sou programador no inicio da carreira, este blog foi feito
                para mostrar desafios que enfrentei e ainda enfrento, e quais
                ferramentas usei para conseguir vencer os obstáculos e por fim
                me chegar onde estou... &#34;
              </cite>
            </p>

            <LoginButtonContainer>
              {userInfo ? (
                <>
                  {/* é a bosta do botão styled coco tenta resolver essa joça */}
                  {userInfo?.isAdmin && (
                    <Button isAdmin onClick={pushToDashboard}>
                      {' '}
                      Gestor
                    </Button>
                  )}
                  {!userInfo?.isAdmin && <Button>Usuario</Button>}

                  <Button type="button" onClick={handleLogout}>
                    Sair
                    <Span>
                      <RiLoginBoxLine />
                    </Span>
                  </Button>
                </>
              ) : (
                <>
                  <NextLink href="/login" passHref>
                    <Button type="button">
                      Entrar
                      <Span>
                        <RiLoginBoxLine />
                      </Span>
                    </Button>
                  </NextLink>
                </>
              )}
            </LoginButtonContainer>
          </SecondChildHeader>
        </Header>
        <Main border>
          <ContentMain>
            <FirstChildContent>
              <h4>Últimas Postagens</h4>
              <NextLink href="/" passHref>
                <div>
                  <a>Página Inicial</a>
                </div>
              </NextLink>
              {contents &&
                contents.map((body) => (
                  <div key={body?._id}>
                    <NextLink href={body.slug} passHref>
                      <div>
                        <a>&#34;{body.heading.substr(0, 10)}...&#34;</a>
                      </div>
                    </NextLink>
                  </div>
                ))}
            </FirstChildContent>
            <SecondChildContent>{children}</SecondChildContent>
          </ContentMain>
        </Main>
        <Footer border>
          <FirstChildFooter>
            <h3>Contato</h3>
            <div>Email: jaison.alieve@gmail.com</div>
            <div className="linkWhats">
              <a
                href="https://bit.ly/jaison-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsLink
              </a>
            </div>
          </FirstChildFooter>
          <SecondChildFooter>
            <h3>
              Github <span>(Alguns Projetos meus)</span>
            </h3>
            <div>
              <div>
                <a
                  href="https://github.com/jaisonluizaliev/canaan-ccb-front-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cannan Project
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/jaisonluizaliev/sabrinashoesapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sabrina Shoes
                </a>
              </div>
              <div>
                <a
                  href=" https://github.com/jaisonluizaliev/JSFilmes-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JS Filmes
                </a>
              </div>
              <div className="linkGithub">
                <a
                  href="https://github.com/jaisonluizaliev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo GitHub
                </a>
              </div>
            </div>
          </SecondChildFooter>
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
