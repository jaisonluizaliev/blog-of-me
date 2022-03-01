import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { ContainerLayoutRight, Title } from '../styles/StyledContainerRight';
import { ButtonForm, Form } from '../styles/StyledForm';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Store } from '../utils/store/Store';
import Inputs from '../components/inputs';
import axios from 'axios';
import jsCookie from 'js-cookie';

const Register = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('senhas diferentes');
      return;
    }
    try {
      const { data } = await axios.post('/api/users/register', {
        name,
        email,
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });
      jsCookie.set('userInfo', JSON.stringify(data));
      router.push(redirect || '/');
    } catch (error) {
      alert(error.response.data ? error.response.data.message : error.message);
    }
  };

  return (
    <Layout title="Registrar">
      <ContainerLayoutRight>
        <Title>Registrar</Title>
        <Form onSubmit={submitHandler}>
          <ul>
            <li>
              <Inputs
                label="Nome"
                htmlFor="name"
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li>
              <Inputs
                label="Email"
                htmlFor="email"
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <Inputs
                label="Senha"
                htmlFor="password"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li>
              <Inputs
                label="Confirmar Senha"
                htmlFor="confirmPassword"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </li>
            <li>
              <ButtonForm>
                <button type="submit">Criar Conta</button>
              </ButtonForm>
            </li>
            <li className="not-account">
              Ja tem conta ? &nbsp;
              <NextLink href="/login" passHref>
                <a>
                  <strong>Entrar</strong>
                </a>
              </NextLink>
            </li>
          </ul>
        </Form>
      </ContainerLayoutRight>
    </Layout>
  );
};

export default Register;
