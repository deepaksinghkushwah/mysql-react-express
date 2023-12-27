import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import createUserSlice from "./createUserSlice";
import createBaseSlice from "./createBaseSlice";

export const useBaseStore = create((set, get) => ({
    ...createBaseSlice(set, get)
}));

export const useUserStore = create(
    persist((set, get) => ({
                ...createUserSlice(set, get)
            }),
  {name: 'userStore',storage: createJSONStorage(() => sessionStorage)}
  ));