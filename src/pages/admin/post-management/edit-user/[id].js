/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Input from '../../../../components/Input';
import Layout from '../../../../components/Layout';
import User from '../../../../models/User';
import {
  ContainerLayoutRight,
  Title,
} from '../../../../styles/StyledContainerRight';
import { ButtonForm, Form } from '../../../../styles/StyledForm';
import db from '../../../../utils/db';

// eslint-disable-next-line no-unused-vars
export default function EditUser({ user }) {
  const router = useRouter();
  const { _id, name, email, isAdmin } = user;

  const [nameUpdate, setNameUpdate] = useState(name);
  const [emailUpdate, setEmailUpdate] = useState(email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
     if(password === confirmPassword) {
        console.log('atualizou');
      await axios.put('/api/users/update-users', {
        _id,
        nameUpdate,
        emailUpdate,
        password,
      });
      router.push('/');
     } else {
       alert("Senhas não são iguais")
     }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Layout>
      <ContainerLayoutRight>
        <Title>Editar ({isAdmin ? 'GESTOR' : 'Usúario'})</Title>
        <Form>
          <ul>
            <li>
              <Input
                component="input"
                label="Nome"
                htmlFor="name"
                type="text"
                name="name"
                id="name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </li>

            <li>
              <Input
                component="input"
                label="Email"
                htmlFor="email"
                type="email"
                name="email"
                id="email"
                value={emailUpdate}
                onChange={(e) => setEmailUpdate(e.target.value)}
              />
            </li>
            <li>
              <Input
                component="input"
                label="Senha"
                htmlFor="password"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li>
              <Input
                component="input"
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
                <button type="submit" onClick={handleUpdate}>
                  Atualizar
                </button>
              </ButtonForm>
            </li>
          </ul>
        </Form>
      </ContainerLayoutRight>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  console.log(id)

  await db.connect();
  const data = await User.findById(id).lean();

  return {
    props: {
      user: db.convertDocToObj(data),
    },
  };
}
