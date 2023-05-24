import {Form} from "@remix-run/react";
import { redirect } from "@remix-run/node";
import db from "../services/db";
import {z} from "zod";
export default function Login() {
  return (
    <main>
      <div className="absolute grid w-full h-full place-content-center place-items-center ">
          <p className="text-[#faedcd] text-3xl bg-[#283618] p-5 rounded-md ">Form</p>

          <Form method="POST" className="grid relative gap-3">
            {/* username */}
            <label className="text-[#faedcd] text-left rounded-md text-2xl w-full" htmlFor="username">Username</label>
            <input className="h-8 w-full rounded-md bg-[#faedcd]" type="text" name="username"/>
            {/* email */}
            <label className="text-[#faedcd] text-left rounded-md text-2xl w-full" htmlFor="email">Email</label>
            <input className="h-8 w-full rounded-md bg-[#faedcd]" type="email" name="email" required/>
            {/* password */}
            <label className="text-[#faedcd] text-left rounded-md text-2xl w-full" htmlFor="password">Password</label>
            <input className="h-8 w-full rounded-md bg-[#faedcd]" type="password" name="password" required />
            
            <button className="hover:bg-[#132a13] bg-[#283618] rounded-md p-5 text-[#faedcd] text-3xl w-full" type="submit">Register</button>
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
  return redirect("/");
}