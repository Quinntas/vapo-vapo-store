import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require("jsonwebtoken");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.token) return res.status(400).json({ sucess: false });

  jwt.verify(req.body.token, process.env.JWT_SECRET, function (err:any, decoded:any) {
    if (err) res.status(401).json({ sucess: false });

    res.status(200).json({ sucess: true, tokenInfo: decoded });
  });
};