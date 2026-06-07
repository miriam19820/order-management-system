import mongoose, { Schema, Document } from 'mongoose';

// 1. הגדרת הממשק (Interface) עבור TypeScript
export interface IProduct extends Document {
  name: string;
  category: 'השלמה' | 'תרגול' | 'סיכומים' | 'קובץ הדפסה' | 'אחר';
  basePrice: number;
  isSpecialProduct: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 2. הגדרת הסכמה (Schema) עבור Mongoose
const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'חובה להזין את שם החוברת או המוצר'],
    trim: true
  },
  category: {
    type: String,
    enum: ['השלמה', 'תרגול', 'סיכומים', 'קובץ הדפסה', 'אחר'],
    required: true
  },
  basePrice: {
    type: Number,
    required: true,
    min: [0, 'מחיר לא יכול להיות שלילי']
  },
  isSpecialProduct: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// 3. ייצוא המודל עם הטיפוסים שהגדרנו
export default mongoose.model<IProduct>('Product', ProductSchema);