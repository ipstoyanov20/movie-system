import {Form} from "@remix-run/react";
import { redirect } from "@remix-run/node";
import db from "../services/db";
import {z} from "zod";
export default function Login() {
  return (
    <main>
      <div className="absolute grid w-full h-full place-content-center place-items-center ">
          <p className="text-[#EEEEEE] text-3xl bg-[#FFD369] p-5 rounded-md ">Form</p>

          <Form method="POST" className="grid relative gap-3">
            {/* username */}
            <label className="text-[#EEEEEE] text-left rounded-md text-2xl w-full" htmlFor="username">Username</label>
            <input className="h-8 w-full rounded-md bg-[#EEEEEE]" type="text" name="username"/>
            {/* email */}
            <label className="text-[#EEEEEE] text-left rounded-md text-2xl w-full" htmlFor="email">Email</label>
            <input className="h-8 w-full rounded-md bg-[#EEEEEE]" type="email" name="email" required/>
            {/* password */}
            <label className="text-[#EEEEEE] text-left rounded-md text-2xl w-full" htmlFor="password">Password</label>
            <input className="h-8 w-full rounded-md bg-[#EEEEEE]" type="password" name="password" required />
            
            <button className="hover:text-[#EEEEEE] hover:bg-[#222831] transition-all bg-[#FFD369] rounded-md p-5 text-black text-3xl w-full" type="submit">Register</button>
          </Form>
      </div>
    </main>
  );
}

const loginSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8)
});

export async function action({request}: {request: Request}) 
{
  const formData = await request.formData();
  const body = Object.fromEntries(formData.entries())
  console.log(body);
  
  const result = await loginSchema.safeParse(body)
  if (result.success) {
    await db.user.create({
      data: result.data,
    });
  }
  else if (result.error) {
    console.log(result.error.message)
  }
  db.$disconnect()
  return redirect("/")
}