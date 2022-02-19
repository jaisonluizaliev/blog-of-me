import React from 'react';
import Layout from '../components/Layout';
import { ContainerLayoutRight, Title } from '../styles/StyledContainerRight';
import { ButtonForm, FieldSetText, Form } from '../styles/StyledForm';
import NextLink from 'next/link';

const Register = () => {
  return (
    <Layout title="Registrar">
      <ContainerLayoutRight>
        <Title>Registrar</Title>
        <Form>
          <ul>
            <li>
              <FieldSetText>
                <label htmlFor="username">Nome </label>

                <input type="text" name="username" id="username" />
              </FieldSetText>
            </li>
            <li>
              <FieldSetText>
                <label htmlFor="email">Email </label>

                <input type="email" name="email" id="email" />
              </FieldSetText>
            </li>
            <li>
              <FieldSetText>
                <label htmlFor="password">Senha </label>

                <input type="password" name="password" id="password" />
              </FieldSetText>
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
