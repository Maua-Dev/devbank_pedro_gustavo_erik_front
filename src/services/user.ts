import api from "./api";
export type User = {
	name: string,
	agency: string,
	account: string,
	current_balance: number
}
export default async function getUser():Promise<User> {
	const response = await api.get("/");
	return response.data
}
