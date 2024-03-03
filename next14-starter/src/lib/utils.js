import mongoose from "mongoose";

const connection = {};

export async function connectToDb()
{
    console.log(`current connection status => ${connection.isConnected}`);
    try
    {
        if (connection.isConnected)
        {
            console.log("Using Existing Connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        console.log(`current connection status => ${connection.isConnected}`);
    }
    catch(error)
    {
        console.log(error);
        console.log("ERROR CONNECTING TO DATABASE")
        // throw new Error("ERROR CONNECTING TO DATABASE");
    }
}