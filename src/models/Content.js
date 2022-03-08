import mongoose from 'mongoose';


const contentsSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    slug: { type: String, required: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Content =
  mongoose.models.Content || mongoose.model('Content', contentsSchema);

export default Content;
