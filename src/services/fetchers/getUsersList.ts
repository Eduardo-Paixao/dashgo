import { UsersList } from "@/src/types/UsersTypes";
import { api } from "../api";

export async function getUsersList(page?: number): Promise<UsersList> {
  const { data } = await api.get("users", {
    params: {
      page: page,
    },
  });

  const users = data.users.map((user: any) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return { users, meta: data.meta };
}
