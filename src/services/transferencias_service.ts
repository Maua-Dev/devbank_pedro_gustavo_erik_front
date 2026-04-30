import api from "./api";

export async function postDeposit() {
	api.post("/deposit")
	
}

type Transactions = {
	type: string;
	value: number;
	current_balance: number;
	timestamp: number;
};

type AllTransactions = {
	all_transactions: Transactions[];
}

export async function getHistory(): Promise<AllTransactions>{
	const response = await api.get("/history")

	return response.data
}