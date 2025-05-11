import {
  Factory,
  Model,
  createServer,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { AxiosErrorWithResponse } from "@/src/types/AuthTypes";
type User = {
  name: string;
  email: string;
  created_ad: string;
};
export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.person.fullName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent({ days: 10 });
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.passthrough();
      this.passthrough("http://localhost:3333/**");
      this.namespace = "mock-api";
      this.timing = 750;
      this.get("/users", function (schema, request) {
        const page = Math.max(Number(request.queryParams.page) || 1, 1);
        const per_page = Math.max(Number(request.queryParams.per_page) || 5, 1);
        const allUsers = schema.all("user").models;
        const total = allUsers.length;

        const pageStart = (page - 1) * per_page;
        const pageEnd = pageStart + per_page;

        const users = allUsers.slice(pageStart, pageEnd);

        return new Response(
          200,
          { "x-total-count": String(total) },
          {
            users,
            meta: {
              total,
              page: page,
              per_page: per_page,
              total_pages: Math.ceil(total / per_page),
            },
          }
        );
      });
      this.get("/users/:id");
      this.post("/users");
      this.post("/sessions", async (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        try {
          const response = await axios.post("http://localhost:3333/sessions", {
            email,
            password,
          });
          return response.data;
        } catch (error: unknown) {
          if (error instanceof Error) {
            const { response } = error as AxiosErrorWithResponse;
            return new Response(
              response?.status || 500,
              {},
              {
                message: response?.data?.message || "Erro interno no servidor",
              }
            );
          }
        }
      });
    },
  });
  return server;
}
