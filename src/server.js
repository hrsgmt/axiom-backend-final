import meRoute from "./routes/me.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });
await app.register(usersRoutes, { prefix: "/api" });
await app.register(authRoutes, { prefix: "/api" });
await app.register(meRoute, { prefix: "/api" });

app.get("/", async () => {
  return { ok: true, service: "axiom-backend-final" };
});

const PORT = process.env.PORT || 4000;
app.listen({ port: PORT, host: "0.0.0.0" }, () => {
  console.log("🚀 Server running on port", PORT);
});
