import connectDb from "@/src/lib/db";
import Settings from "@/src/model/settings.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const {ownerId}=await request.json()
          if(!ownerId){
                    return NextResponse.json(
                        {message:"ownerId is required"},
                        {status:400}
                    )
                }
                await connectDb()
                const settings=await Settings.findOne(
                    {OwnerId:ownerId}
                )
                return NextResponse.json(settings)
    } catch (error) {
          return NextResponse.json(
            {message:` get settings error ${error}`},
            {status:500}
        )
    }
}