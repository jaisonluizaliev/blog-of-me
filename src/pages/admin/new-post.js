import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Input from '../../components/Input';
import { Title } from '../../styles/StyledContainerRight';
import { ButtonForm, Form } from '../../styles/StyledForm';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Store } from '../../utils/store/Store';

export default function NewPost() {
  const router = useRouter();
  const { state: userInfo } = useContext(Store);
  const [heading, setHeading] = useState('');
  const [slug, setSlug] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (userInfo?.isAdmin) {
      router.push('/');
    }
    setSlug(heading.toLowerCase().split(' ').join('-'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heading]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/contents', {
        heading,
        slug,
        text,
      });
      router.push(`/${slug}`)
    } catch (error) {
      alert(error.response.data ? error.response.data.message : error.message);
    }
  };

  return (
    <Layout>
      <Title>Nova Postagem</Title>
      <Form onSubmit={submitHandler}>
        <ul>
          <li>
            <Input
              component="input"
              label="Titulo"
              htmlFor="heading"
              type="text"
              name="heading"
              id="heading"
              onChange={(e) => setHeading(e.target.value)}
            />
          </li>
          <li>
            <Input
              component="textarea"
              label="Texto"
              htmlFor="text"
              type="text"
              name="text"
              id="text"
              onChange={(e) => setText(e.target.value)}
            />
          </li>
          <li>
            <ButtonForm>
              <button type="submit">Enviar</button>
            </ButtonForm>
          </li>
        </ul>
      </Form>
    </Layout>
  );
}
