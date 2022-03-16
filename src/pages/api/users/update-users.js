import nc from 'next-connect';
import User from '../../../models/User';
import db from '../../../utils/db';
import bcryptjs from 'bcryptjs';

const handler = nc();

handler.put(async (req, res) => {
  const { _id, nameUpdate, emailUpdate, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password);
  await db.connect();
  await User.updateOne(
    { _id },
    { $set: { name: nameUpdate, email: emailUpdate, password: hashedPassword } }
  );
  await db.disconnect();
  res.status(200).send("Update Successfully")
});


export default handler;
