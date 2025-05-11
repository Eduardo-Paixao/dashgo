import { useQuery } from "react-query";
import { getUsersList } from "../fetchers/getUsersList";

export function useUsersList(page?: number) {
  return useQuery(["users-list", page], () => getUsersList(page), {
    staleTime: 1000 * 5,
  });
}
