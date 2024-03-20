import clientPromise from "@/mondoDB/mongo/clientPromise";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, id: { params: { id: string } }) {
    const MongodbClient = await clientPromise;
    const db = MongodbClient.db("Anantya");
    const collection = db.collection("appointment");
    const data = await collection.find({ id: id.params.id }).toArray();
    console.log(data);
    return NextResponse.json(data);
}