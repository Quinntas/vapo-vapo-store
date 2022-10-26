import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';
import { verifyEncryptedValue } from '@utils/encryption';
const jwt = require("jsonwebtoken");


export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {
    return res.status(405).json({ sucess: false });
  }

  if (req.body.email == undefined || req.body.password == undefined) {
    return res.status(400).json({ sucess: false });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (!user)
    return res.status(401).json({ sucess: false });

  if (!verifyEncryptedValue(req.body.password, user.password))
    return res.status(401).json({ sucess: false });


  const token = jwt.sign({ email: user.email, remember: req.body.remember_me }, process.env.JWT_SECRET, {
    expiresIn: req.body.remember_me ? "168h" : "1h",
  });

  return res.status(200).json({ token: token });

}
