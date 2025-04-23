import type { FastifyInstance } from "fastify";
import { addUser } from "../services/addUser";

type User = {
	email: string;
	nome: string;
};

export async function userRoutes(api: FastifyInstance) {
	api.get("/", (req, res) => {
		return res.status(200).send({ message: "Hello user..." });
	});

	api.post("/", async (req, res) => {
		const { email, nome } = req.body as User;

		const newUser = await addUser({ email, nome });

		return res.status(201).send(newUser);
	});
}
