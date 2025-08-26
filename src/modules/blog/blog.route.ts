import { Router } from "express";
import { blogController } from "./blog.controller";
import validateRequest from "../../middleware/validateRequest";
import { blogValidation } from "./blog.validation";

const router = Router();

router
	.route("/:id")
	.get(blogController.getById)
	.patch(blogController.updateDoc)
	.delete(blogController.deleteDoc);

router
	.route("/")
	.post(
		validateRequest(blogValidation.createBlog),
		blogController.createIntoDB
	)
	.get(blogController.getAllFromDB);

export const blogRouter = router;
