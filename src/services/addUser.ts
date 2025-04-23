import { prisma } from "../lib/prisma";

type User = {
	email: string;
	nome: string;
};

export async function addUser({ email, nome }: User) {
	const newUser = await prisma.user.create({
		data: {
			email,
			nome,
		},
	});

	return newUser;
}
