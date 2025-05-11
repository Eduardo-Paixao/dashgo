import { AuthContext } from "@/src/contexts/AuthContext";
import { useContext } from "react";


export const useAuth = () => useContext(AuthContext);