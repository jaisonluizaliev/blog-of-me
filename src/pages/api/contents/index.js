import nc from 'next-connect';
import Content from '../../../models/Content';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const contents = await Content.find({}); 
  // const users = await User.find({});

  await db.disconnect(); 
  res.send(contents);
});



handler.post(async (req, res)=> {
  await db.connect();
  
  

  const newContent = new Content({
    heading: req.body.heading,
    slug: req.body.slug,
    text: req.body.text,
  });

  await newContent.save();

  res.send(newContent)

})

export default handler;
