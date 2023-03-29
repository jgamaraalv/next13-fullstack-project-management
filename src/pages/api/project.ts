import { NextApiRequest, NextApiResponse } from "next";
import type { User } from "@prisma/client";

import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = (await validateJWT(
    req.cookies[process.env.COOKIE_NAME || "default_cookie_name"]!
  )) as User;

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id,
    },
  });

  res.json({ data: { message: "ok" } });
}
