import { ToastfyContext } from "@/src/contexts/ToastfyContext";
import { useContext } from "react";

export const useToastfy = () => useContext(ToastfyContext);
