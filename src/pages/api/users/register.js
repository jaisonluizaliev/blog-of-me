import nc from 'next-connect';
import bcryptjs from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcryptjs.hashSync(req.body.password),
    isAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();

  const token = signToken(user);

  res.send({
    token,
    _id: user._id,
    email: user.email,
    password: user.password,
    isAdmin: user.isAdmin,
  });
});

export default handler;
