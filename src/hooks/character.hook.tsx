import { useState, useCallback } from "react";
import { Character } from "../models";
import { characterSerice } from "../services/character";

export function useCharacter() {
  const [data, setData] = useState<Character[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getCharacter = useCallback(async (page: number): Promise<void> => {
    setIsLoading(true);
    try {
      const myData = await characterSerice(page);
      setData(myData?.results ?? []);
    } catch {
      setError("Something wrong happened");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [getCharacter, data, error, isLoading] as const;
}
