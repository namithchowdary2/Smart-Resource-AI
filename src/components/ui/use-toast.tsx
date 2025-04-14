
import { useToast as useToastHook, toast as toastHook } from "@/hooks/use-toast";

// Re-export the hooks with different names to avoid circular imports
export const useToast = useToastHook;
export const toast = toastHook;