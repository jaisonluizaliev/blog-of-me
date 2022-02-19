// import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import db from '../utils/db';
import Content from '../models/Content';
import { convertDate } from '../utils/convertDate';
import { Error } from '../styles/StyledError';
import {
  ContainerLayoutRight,
  Paragraph,
  PostedAt,
  Title,
} from '../styles/StyledContainerRight';

export default function SlugPage({ content }) {
  if (!content) {
    return (
      <Layout>
        <Error>Erro talvez a postagem foi excluída</Error>
      </Layout>
    );
  }

  const { heading, text, createdAt } = content;

  return (
    <Layout title={heading}>
      <ContainerLayoutRight>
        <Title>{heading}</Title>
        <Paragraph>{text}</Paragraph>

        <PostedAt>
          <strong>Postado:</strong> {convertDate(createdAt)}
        </PostedAt>
      </ContainerLayoutRight>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  await db.connect();
  const content = await Content.findOne({ slug }).lean();
  await db.disconnect();

  return {
    props: {
      content: db.convertDocToObj(content),
    },
  };
}
