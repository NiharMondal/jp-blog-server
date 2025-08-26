import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { blogServices } from "./blog.service";

const createIntoDB = asyncHandler(async (req: Request, res: Response) => {
	const result = await blogServices.createIntoDB(req.body);

	sendResponse(res, {
		statusCode: 201,
		message: "Blog created successfully",
		result: result,
	});
});
const getAllFromDB = asyncHandler(async (req: Request, res: Response) => {
	const result = await blogServices.getAllFromDB(req.query as {});

	sendResponse(res, {
		statusCode: 200,
		message: "Blog fetched successfully",
		meta: result.meta,
		result: result.blogs,
	});
});
const getById = asyncHandler(async (req: Request, res: Response) => {
	const result = await blogServices.getById(req.params.id);

	sendResponse(res, {
		statusCode: 200,
		message: "Blog fetched successfully",
		result: result,
	});
});
const updateDoc = asyncHandler(async (req: Request, res: Response) => {
	const result = await blogServices.updateDoc(req.params.id, req.body);

	sendResponse(res, {
		statusCode: 200,
		message: "Blog updated successfully",
		result: result,
	});
});
const deleteDoc = asyncHandler(async (req: Request, res: Response) => {
	const result = await blogServices.deleteDoc(req.params.id);

	sendResponse(res, {
		statusCode: 200,
		message: "Blog deleted successfully",
		result: result,
	});
});

export const blogController = {
	createIntoDB,
	getAllFromDB,
	getById,
	updateDoc,
	deleteDoc,
};
