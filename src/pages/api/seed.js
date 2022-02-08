import nc from 'next-connect';
import Content from '../../models/Content';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Content.deleteMany();
  await Content.insertMany(data.contents);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
