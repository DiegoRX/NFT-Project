import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database';

const allCoins = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB()
    const allEntries = await db.getAll()

    // response.statusCode = 200
    // response.setHeader('Content-type', 'application/json')
    // response.end(JSON.stringify({ data: allEntries }))

    
    response.status(200).json({data:allEntries})

}

export default allCoins