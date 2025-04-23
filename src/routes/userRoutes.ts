import type { FastifyInstance } from "fastify";

export async function userRoutes(api: FastifyInstance) {
	api.get("/", (req, res) => {
		return res.status(200).send({ message: "Hello user..." });
	});
}
