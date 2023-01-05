import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma';


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ sucess: false });
    }

    const categories = await prisma.vapo.findMany().then((res: { categories: any; }[]) => res[0].categories)

    return res.status(200).json(categories);

}