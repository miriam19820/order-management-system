import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ITeacher extends Document {
  schoolId: Types.ObjectId;
  fullName: string;
  mobilePhone: string;
  email?: string;
}

const TeacherSchema = new Schema<ITeacher>({
  schoolId: { 
    type: Schema.Types.ObjectId, 
    ref: 'School', 
    required: true 
  },
  fullName: { type: String, required: true },
  mobilePhone: { type: String, required: true },
  email: { type: String }
}, { 
  timestamps: true 
});

export default mongoose.model<ITeacher>('Teacher', TeacherSchema);