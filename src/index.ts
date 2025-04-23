import fastfyCors from "@fastify/cors";
import { fastify } from "fastify";

const api = fastify();

api.register(fastfyCors, {
	origin: "*", // Permite apenas requisições desta origem
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Métodos permitidos
	allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
	credentials: true, // Se permite envio de cookies/cabeçalhos de autorização
});

api.get("/", (req, resp) => {
	return "Hello world";
});

const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000;
// Escutar em '0.0.0.0' é crucial para ambientes containerizados/serverless
const host = "0.0.0.0";

api.listen({ port, host }, (err, address) => {
	console.log(`Deu certo no endereço ${address} 🚀`);
});
