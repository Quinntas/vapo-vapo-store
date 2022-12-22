import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../lib/prisma';


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({sucess: false});
    }

    const products = await prisma.vapo.findMany().then((res: { products: any; }[]) => res[0].products)

    return res.status(200).json((JSON.parse(products)));

}