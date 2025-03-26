import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platform: {platform: Platform}[];
  }
  
export interface FetchedGames {
    count: number;
    results: Game[];
  }

const useGames = () => {
     const [games, setGames] = useState<Game[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setIsloading] = useState(false);
    
      useEffect(() => {
        setIsloading(true);
    
        const controller = new AbortController();
    
        apiClient
          .get<FetchedGames>("/games", { signal: controller.signal })
          .then((res) => {
            setGames(res.data.results);
            setIsloading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setIsloading(false);
          });
    
        return () => controller.abort();
      }, []);

      return {games, error, isLoading}
}

export default useGames;