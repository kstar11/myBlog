module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const InformationSchema = new Schema(
    {
      description: { type: String, index: true, unique: true, required: true },
      platform: { type: String, index: true },
      room: { type: String },
      prize: { type: String },
      category: { type: Number, index: true },
      type: { type: Number },
      startTime: { type: Date, default: Date.now },
    },
    { timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' } },
  );

  return mongoose.model('Informations', InformationSchema);
};
