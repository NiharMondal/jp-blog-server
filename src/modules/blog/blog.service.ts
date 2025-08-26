import QueryBuilder from "../../lib/QueryBuilder";
import CustomError from "../../utils/CustomError";
import { IBlog } from "./blog.interface";
import Blog from "./blog.model";

const createIntoDB = async (payload: IBlog) => {
	const blog = await Blog.create(payload);
	return blog;
};
const getAllFromDB = async (query: Record<string, string>) => {
	const res = new QueryBuilder(Blog.find(), query)
		.search(["title", "author"])
		.filter()
		.sort()
		.pagination();
	const blogs = await res.getQuery();
	const meta = await res.countTotal();
	return { meta, blogs };
};
const getById = async (id: string) => {
	const blog = await Blog.findById(id);
	if (!blog) {
		throw new CustomError(404, "Blog is not found");
	}
	return blog;
};
const updateDoc = async (id: string, payload: Partial<IBlog>) => {
	const blog = await Blog.findByIdAndUpdate(
		id,
		{ ...payload },
		{ new: true }
	);

	if (!blog) {
		throw new CustomError(404, "Blog is not found");
	}
	return blog;
};
const deleteDoc = async (id: string) => {
	const blog = await Blog.findByIdAndDelete(id);
	if (!blog) {
		throw new CustomError(404, "Blog is not found");
	}
	return blog;
};

export const blogServices = {
	createIntoDB,
	getAllFromDB,
	getById,
	updateDoc,
	deleteDoc,
};
