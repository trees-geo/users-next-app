import {users} from "../route"
export async function GET(request:Request, {params}: {params:{user_id:string}}){
const {user_id} = await params;
const user = users.find((u)=>u.id===parseInt(user_id))
return Response.json(user);
}