import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
	{
		title: {
			type: String,
			required: [true, "Title is required"],
			min: [5, "Min length is 5"],
			max: [50, "Max length is 50"],
		},
		content: {
			type: String,
			required: [true, "Content is required"],
			min: [10, "Min length is 10"],
		},
		author: {
			type: String,
			required: [true, "Author name is required"],
		},
	},
	{ timestamps: true }
);

const Blog = model<IBlog>("Blog", blogSchema);
export default Blog;
