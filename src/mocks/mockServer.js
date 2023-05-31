import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const mockServer = () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  return server;
};
