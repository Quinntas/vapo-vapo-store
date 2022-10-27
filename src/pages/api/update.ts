import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment';
const jwt = require("jsonwebtoken");

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST")
        return res.status(405).json({ sucess: false });

    const date = moment().format("DD/MM/YYYY-HH:MM:SS");

    const email = jwt.verify(req.body.cookie, process.env.JWT_SECRET, function (err: any, decoded: any) {
        if (err) return undefined
        return decoded.email
    })

    if (!email)
        return res.status(401).json({ sucess: false });

    await prisma.user.update({
        where: {
            email: email,
        },

        data: {
            modifiedOn: date,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            fullName: req.body.fullName,
            Address: req.body.address
        }
    })

    return res.status(200).json({ sucess: true, });
}