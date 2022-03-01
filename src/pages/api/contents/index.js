import nc from 'next-connect';
import Content from '../../../models/Content';
// import User from '../../../models/User';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const contents = await Content.find({});
  // const users = await User.find({});

  await db.disconnect();
  res.send(contents);
});

export default handler;
