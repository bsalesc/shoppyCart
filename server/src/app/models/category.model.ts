import { Document, Model, model } from 'mongoose';
import { ICategory } from '../../interfaces/category.interface';
import { CategorySchema } from '../schema/category.schema';

export type ICategoryModel = ICategory & Document;

export const Category: Model<ICategoryModel> = model<ICategoryModel>('Category', CategorySchema);
