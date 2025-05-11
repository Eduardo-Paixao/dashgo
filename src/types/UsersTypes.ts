export type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation?: string;
};

export type UsersList = {
  users: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
  }[];
  meta: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
};
