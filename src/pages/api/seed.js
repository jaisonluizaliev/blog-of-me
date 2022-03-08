import nc from 'next-connect';
import Content from '../../models/Content';
import User from '../../models/User';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Content.deleteMany();
  // await Content.insertMany(data.contents);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
