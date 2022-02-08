import nc from 'next-connect';
import Content from '../../../models/Content';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const contents = await Content.find({});
  await db.disconnect();
  res.send(contents);
});

export default handler;
