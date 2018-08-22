import { Schema as SchemaMongoose, SchemaDefinition } from 'mongoose';

export const Schema = (definition: SchemaDefinition) => {
  const schema: SchemaMongoose = new SchemaMongoose(definition, {
    timestamps: true,
  });

  schema.set('toJSON', {
    transform(doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  });

  return schema;
};
