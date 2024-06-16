import type { NextApiRequest, NextApiResponse } from "next";
import {Subscriber} from "db";
import jwt from "jsonwebtoken";
import { dbConnection } from "@/lib/dbConnect";
const SECRET = "S3CR38";
type Data = {
  message: String;
  token?:String;
  username?:string;
}


export default async function subscribeHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
  ) {

      await dbConnection();
      const username = req.body.username;
      const existingSubscriber = await Subscriber.findOne({username});
      if(existingSubscriber) {
        res.status(403).json({message : 'Subscriber already exists'});
      }
      else {
        const obj = {username}
        const newSubscriber = new Subscriber(obj);
        newSubscriber.save();

        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Admin created successfully', token });
      

        res.status(200).json({message:'User subscribed', token, username})
      }
  
}
