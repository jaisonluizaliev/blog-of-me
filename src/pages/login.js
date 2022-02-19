import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { ContainerLayoutRight, Title } from '../styles/StyledContainerRight';
import { ButtonForm, FieldSetText, Form } from '../styles/StyledForm';
import NextLink from 'next/link';
import { Store } from '../utils/store/Store';
import { useRouter } from 'next/router';
import jsCookie from 'js-cookie';

const Login = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state , dispatch} = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      });
      dispatch({type: 'USER_LOGIN', payload: data});
      jsCookie.set('userInfo', JSON.stringify(data));
      router.push(redirect || '/')
    } catch (error) {
      alert(error.response.data ? error.response.data.message : error.message);
    }
  };

  return (
    <Layout title="Entrar">
      <ContainerLayoutRight>
        <Title>Entrar</Title>
        <Form onSubmit={submitHandler}>
          <ul>
            <li>
              <FieldSetText>
                <label htmlFor="email">Email </label>

                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FieldSetText>
            </li>
            <li>
              <FieldSetText>
                <label htmlFor="password">Senha </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FieldSetText>
            </li>
            <li>
              <ButtonForm>
                <button type="submit">Entrar</button>
              </ButtonForm>
            </li>
            <li className="not-account">
              Não tem Conta? &nbsp;
              <NextLink href="/register" passHref>
                <a>
                  <strong>Registre-se</strong>
                </a>
              </NextLink>
            </li>
          </ul>
        </Form>
      </ContainerLayoutRight>
    </Layout>
  );
};

export default Login;
