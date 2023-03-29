import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { createJWT, hashPassword, MAX_COOKIE_AGE } from "@/lib/auth";
import { serialize } from "cookie";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await db.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });

    const jwt = await createJWT(user);
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME || "default_cookie_name", jwt, {
        httpOnly: true,
        path: "/",
        maxAge: MAX_COOKIE_AGE,
      })
    );
    res.status(201);
    res.end();
  } else {
    res.status(402);
    res.end();
  }
}
