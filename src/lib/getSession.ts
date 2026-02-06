import {cookies} from "next/headers";
import { scalekit } from "./scalekit";
export async function getSession() {
    const session = await cookies()
    const token=session.get("access_token")?.value
    if(!token){
        return null
    }
    try {
        const result=await scalekit.validateToken(token)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}