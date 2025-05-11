import { CurrentPageContext } from "@/src/contexts/CurrentPageContext";
import { useContext } from "react";


export const useCurrentPage = () => useContext(CurrentPageContext);
