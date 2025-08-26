import z from "zod";

const createBlog = z.object({
	title: z
		.string({ error: "Title is required" })
		.nonempty({ error: "Title can not be empty" })
		.min(5, "Min length is 5")
		.max(50, "Max length is 50")
		.trim(),
	content: z
		.string({ error: "Content is required" })
		.nonempty({ error: "Content can not be empty" })
		.min(10, "Min length is 10")
		.trim(),
	author: z
		.string({ error: "Author is required" })
		.nonempty({ error: "Author can not be empty" })
		.trim(),
});

export const blogValidation = { createBlog };
