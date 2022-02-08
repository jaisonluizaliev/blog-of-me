// import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import db from '../utils/db';
import Content from '../models/Content';
import { convertDate } from '../utils/convertDate';
import { Container, Error } from '../components/SlugPageStyles';

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
      <Container>
        <h3>{heading}</h3>
        <p>{text}</p>
        <span>{convertDate(createdAt)}</span>
      </Container>
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
