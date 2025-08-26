import mongoose = require("mongoose");
import { envConfig } from "./config/envConfig";
import app from "./app";
async function main() {
	try {
		const connection = await mongoose.connect(
			envConfig.mongo_uri as string
		);

		app.listen(envConfig.port, () => {
			console.log(
				`App is running on port ${envConfig.port} \nDatabase is connected on ${connection.connection.host}`
			);
		});
	} catch (error) {
		console.log(error);
	}
}

main();
