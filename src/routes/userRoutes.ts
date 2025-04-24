import type { FastifyInstance } from "fastify";
import { addUser } from "../services/addUser";
import { listUsers } from "../services/listUsers";

type User = {
	email: string;
	nome: string;
};

export async function userRoutes(api: FastifyInstance) {
	api.get("/", async (req, res) => {
		const allUsers = await listUsers();

		return res.status(200).send(allUsers);
	});

	api.post("/", async (req, res) => {
		const { email, nome } = req.body as User;

		const newUser = await addUser({ email, nome });

		return res.status(201).send(newUser);
	});

	api.get("/hello", (req, res) => {
		return res.status(200).send({ message: "Hello user..." });
	});
}
