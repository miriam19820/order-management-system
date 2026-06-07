import mongoose, { Schema, Document } from 'mongoose';

// הגדרת הממשק (Interface) עבור TypeScript
export interface ISchool extends Document {
  name: string;
  city: string;
  deliveryAddress?: string;
  secretariatPhone?: string;
  secretariatEmail?: string;
}

// יצירת הסכמה (Schema) עבור MongoDB
const SchoolSchema: Schema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  deliveryAddress: { type: String },
  secretariatPhone: { type: String },
  secretariatEmail: { type: String }
}, { 
  timestamps: true // זה יוסיף אוטומטית תאריך יצירה ותאריך עדכון לכל תיכון
});

export default mongoose.model<ISchool>('School', SchoolSchema);