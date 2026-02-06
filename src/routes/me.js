import jwt from "jsonwebtoken";

const SECRET = "axiom-secret";

export default async function meRoute(app) {

  app.get("/me", async (req, reply) => {
    const auth = req.headers.authorization;
    if (!auth) {
      return reply.code(401).send({ error: "No token" });
    }

    try {
      const token = auth.replace("Bearer ", "");
      const decoded = jwt.verify(token, SECRET);
      return { user: decoded };
    } catch {
      return reply.code(401).send({ error: "Invalid token" });
    }
  });

}
