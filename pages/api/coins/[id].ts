import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database';

const allCoins = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB()

    const id = request.query.id
    const entry = await db.getById(id as string)

    // response.statusCode = 200
    // response.setHeader('Content-type', 'application/json')
    // response.end(JSON.stringify({ data: entry }))

    response.status(200).json({data:entry})
}

export default allCoins