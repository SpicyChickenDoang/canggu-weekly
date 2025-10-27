'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'canggu-current-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Failed to load favorites from localStorage', error);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage', error);
      }
    }
  }, [favorites, isLoaded]);

  const addFavorite = useCallback((articleId: number) => {
    setFavorites((prev) => {
      if (prev.includes(articleId)) {
        return prev;
      }
      return [...prev, articleId];
    });
  }, []);

  const removeFavorite = useCallback((articleId: number) => {
    setFavorites((prev) => prev.filter((id) => id !== articleId));
  }, []);

  const isFavorite = useCallback(
    (articleId: number) => {
      return favorites.includes(articleId);
    },
    [favorites]
  );

  return { favorites, addFavorite, removeFavorite, isFavorite, isLoaded };
}
