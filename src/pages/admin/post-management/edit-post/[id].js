import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Input from '../../../../components/Input';
import Layout from '../../../../components/Layout';
import Content from '../../../../models/Content';
import {
  ContainerLayoutRight,
  Title,
} from '../../../../styles/StyledContainerRight';
import { ButtonForm, Form } from '../../../../styles/StyledForm';
import db from '../../../../utils/db';

export default function EditPost({ content }) {
  const router = useRouter();
  const { _id, heading, text } = content;

  const [headingUpdate, setHeadingUpdate] = useState(heading);
  const [slugUpdate, setSlugUpdate] = useState('');
  const [textUpdate, setTextUpdate] = useState(text);

  useEffect(() => {
    setSlugUpdate(headingUpdate.toLowerCase().split(' ').join('-'));
  }, [headingUpdate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log('atualizou');
      await axios.put('/api/contents', {
        _id,
        headingUpdate,
        slugUpdate,
        textUpdate,
      });
      router.push('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Layout>
      <ContainerLayoutRight>
        <Title>Editar ({heading})</Title>
        <Form>
          <ul>
            <li>
              <Input
                component="input"
                label="Titulo"
                htmlFor="title"
                type="text"
                name="title"
                id="title"
                value={headingUpdate}
                onChange={(e) => setHeadingUpdate(e.target.value)}
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
                value={textUpdate}
                onChange={(e) => setTextUpdate(e.target.value)}
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

  await db.connect();
  const data = await Content.findById(id).lean();

  return {
    props: {
      content: db.convertDocToObj(data),
    },
  };
}
