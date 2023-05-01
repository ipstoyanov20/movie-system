import {Form} from "@remix-run/react";
import { redirect } from "@remix-run/node";
import db from "../services/db";
import {z} from "zod";
export default function Login() {
  return (
    <main>
      <div className="grid place-content-center place-items-center grid-rows-3 gap-">
        <h1 className="text-center">
          <p className="text-white text-5xl bg-green-700 p-5 rounded-2xl ">My Login Form</p>
        </h1>
          <Form method="POST" className="grid gap-2">
            <label className="text-white text-left rounded-md text-2xl w-full" htmlFor="email">Username</label>
            <input className="h-8 w-full rounded-md" type="email" name="email" required/>
            <label className="text-white text-left rounded-md text-2xl  w-full" htmlFor="password">Password</label>
            <input className="h-8 w-full rounded-md" type="password" name="password" />
            <br />
            <button className="hover:bg-green-950 bg-green-700 rounded-2xl p-4 text-white text-3xl w-full" type="submit">Login</button>
          </Form>
      </div>
    </main>
  );
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
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