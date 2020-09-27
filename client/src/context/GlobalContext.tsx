import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

const GlobalContext = createContext<{
  state?: { wordList: string[]; permutations: string[]; currentBuffer: string };
  setState?: React.Dispatch<React.SetStateAction<any>>;
}>({});

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState();

  const value = useMemo(
    () => ({
      state,
      setState,
    }),
    [setState, state]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
