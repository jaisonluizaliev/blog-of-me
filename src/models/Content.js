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


// // const mongoose = require('mongoose');

// const personSchema = Schema({
//   _id: Schema.Types.ObjectId,
//   name: String,
//   age: Number,
//   stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
// });

// const storySchema = Schema({
//   author: { type: Schema.Types.ObjectId, ref: 'Person' },
//   title: String,
//   fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
// });

// const Story = mongoose.model('Story', storySchema);
// const Person = mongoose.model('Person', personSchema);