import { prisma } from "../lib/prisma";

export async function listUsers() {
	const allUsers = await prisma.user.findMany();

	return allUsers;
}
