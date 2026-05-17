import { create } from "zustand";

type FavoriteStore = {
  favorites: string[];

  toggleFavorite: (id: string) => void;

  isFavorite: (id: string) => boolean;
};

export const useFavoriteStore =
  create<FavoriteStore>((set, get) => ({
    favorites: [],

    toggleFavorite: (id) => {
      const current = get().favorites;

      const exists = current.includes(id);

      if (exists) {
        set({
          favorites: current.filter(
            (item) => item !== id
          ),
        });
      } else {
        set({
          favorites: [...current, id],
        });
      }
    },

    isFavorite: (id) => {
      return get().favorites.includes(id);
    },
  }));