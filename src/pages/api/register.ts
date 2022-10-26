import prisma from '../../../lib/prisma';
import { encryptValue } from '@utils/encryption';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from '@prisma/client';
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ sucess: false });
    }

    let newUser = {
        phoneNumber: "",
        Address: "",
        createdOn: "",
        modifiedOn: "",
        password: encryptValue(req.body.password, "q263fWjTOqPh"),
        email: req.body.email,
        fullName: req.body.fullName
    }

    try {
        await prisma.user.create({
            data: newUser
        });
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError)
            if (e.code === 'P2002') {
                return res.status(401).json({ sucess: false, error: "Email already exists" });
            }
        return res.status(500).json({ sucess: false, error: "Error in database" });
    }

    return res.redirect(307, process.env.NEXT_PUBLIC_REST_API_ENDPOINT + API_ENDPOINTS.LOGIN)
}