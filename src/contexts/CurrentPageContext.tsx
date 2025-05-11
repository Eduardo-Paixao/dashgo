import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

interface CurrentPageProviderProps {
  children: ReactNode;
}

interface CurrentPageContextProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

export const CurrentPageContext = createContext({} as CurrentPageContextProps);

export const CurrentPageProvider = ({ children }: CurrentPageProviderProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};
