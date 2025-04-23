import { fastify } from "fastify";

const api = fastify();

api.get("/", (req, resp) => {
	return "Hello world";
});

const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000;
// Escutar em '0.0.0.0' é crucial para ambientes containerizados/serverless
const host = "0.0.0.0";

api.listen({ port, host }, (err, address) => {
	console.log(`Deu certo no endereço ${address} 🚀`);
});
