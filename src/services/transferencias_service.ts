import axios from "axios";
import api from "./api";

export type Notas = {
	"2": number;
	"5": number;
	"10": number;
	"20": number;
	"50": number;
	"100": number;
	"200": number;
};

type TransactionsResponse = {
	current_balance: number;
	timestamp: number;
};

export const depositPost = async (
	data: Notas,
): Promise<TransactionsResponse> => {
	const response = await axios.post<TransactionsResponse>("/", data);
	return response.data;
}

export const withdrawPost = async (
	data: Notas,
): Promise<TransactionsResponse> => {
	const response = await axios.post<TransactionsResponse>("/", data);
	return response.data;
};

type Transactions = {
	type: string;
	value: number;
	current_balance: number;
	timestamp: number;
};

type AllTransactions = {
	all_transactions: Transactions[];
};

export async function getHistory(): Promise<AllTransactions> {
	const response = await api.get("/history");

	return response.data;
}
