// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connection from "./db/connection" 
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if(req.method == "GET"){
    connection()
    console.log(process.env.MongoUrl)
    res.status(200).json({ name: "John Doe" });
  }

}
