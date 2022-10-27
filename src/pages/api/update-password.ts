import prisma from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'
import moment from 'moment';
import { verifyEncryptedValue, encryptValue } from '@utils/encryption';
const jwt = require("jsonwebtoken");

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST")
        return res.status(405).json({ sucess: false });

    const email = jwt.verify(req.body.cookie, process.env.JWT_SECRET, function (err: any, decoded: any) {
        if (err) return undefined
        return decoded.email
    })

    if (!email)
        return res.status(401).json({ sucess: false });

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user)
        return res.status(401).json({ sucess: false });

    if (!verifyEncryptedValue(req.body.oldPassword, user.password))
        return res.status(401).json({ sucess: false });

    await prisma.user.update({
        where: {
            email: email,
        },

        data: {
            modifiedOn: moment().format("DD/MM/YYYY-HH:MM:SS"),
            password: encryptValue(req.body.newPassword, "q263fWjTOqPh")
        }
    })

    return res.status(200).json({ sucess: true, });
}