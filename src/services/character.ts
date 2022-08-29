import { RootObjectAPI } from "../models";

const URL = "https://rickandmortyapi.com/api";
export async function characterSerice(
  page: number
): Promise<RootObjectAPI | null> {
  try {
    const res = await fetch(`${URL}/character?page=${page}`);
    const data = (await res.json()) as RootObjectAPI;
    return data;
  } catch {
    return null;
  }
}
