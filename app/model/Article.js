module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ArticleSchema = new Schema(
    {
      title: { type: String, index: true, unique: true, required: true },
      category: { type: String, index: true },
      tags: [String],
      description: { type: String },
      content: { type: String },
      createTime: { type: Date, default: Date.now },
      updateTime: { type: Date, default: Date.now },
    },
    { timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' } },
  );

  return mongoose.model('Article', ArticleSchema);
};
