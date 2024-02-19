import mongoose, { Schema, Document, Model } from "mongoose";

interface UserDocument extends Document {
    username: string;
    password: string;
    purchasedCourses: Schema.Types.ObjectId[];
}

const userSchema: Schema<UserDocument> = new Schema({
    username: { type: String },
    password: String,
    purchasedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

interface AdminDocument extends Document {
    username: string;
    password: string;
}

const adminSchema: Schema<AdminDocument> = new Schema({
    username: String,
    password: String
});

interface CourseDocument extends Document {
    title: string;
    description: string;
    price: number;
    imageLink: string;
    published: boolean;
}

const courseSchema: Schema<CourseDocument> = new Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

export const User: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema);
export const Admin: Model<AdminDocument> = mongoose.model<AdminDocument>('Admin', adminSchema);
export const Course: Model<CourseDocument> = mongoose.model<CourseDocument>('Course', courseSchema);
