"use server";

import { error } from "console";
import { registerschema } from "../lib/schemas/registerschema";
import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import { Action } from "@prisma/client/runtime/library";

import { loginschem } from "../lib/loginschema";
import { signIn, signOut } from "../auth";
import { AuthError, User } from "next-auth";
import { ActionResult } from "next/dist/server/app-render/types";
export async function signInUser({ data }: { data: loginschem; }): Promise<ActionResult <string> > {
  try {
    const result = await signIn('credentials',{
        email: data.email,
        password: data.password,
        redirect: false
    });
    console.log(result);

    return {status: 'success',data: 'Logged in'}

  } catch (error) {

    console.log(error);

    if(error instanceof AuthError){

        switch (error.type) {
            case 'CredentialsSignin':
                return {status: 'error',error: 'invalid credentials'}
                
               
        
            default:
                return {status: 'error', error : 'something is wrong'}
        }
    }else {
        return {status: 'error', error:'something else went wrong'}
    }
    
  }  
}

export async function signOutUser() {

  await signOut({redirectTo: '/'});
  
}

export async function registerUser(data: registerschema) : Promise<ActionResult<User>>{
  try {
    const validated = registerschema.safeParse(data);

    if (!validated.success) {
      return {status: 'error', error: validated.error.errors };
    }

    const { name, email, password } = validated.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) return {status: 'error', error: "User allready exist" };

   const user =await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
      },
    });
    return {status: 'success', data: user}


  } catch (error) {

    console.log(error);

    return {status: 'error', error: 'something is false'}
  }
}

export async function getUserByEmail(email: string){
    return prisma.user.findUnique({where: {email}});

}

export async function getUserByID(id: string){
    return prisma.user.findUnique({where: {id}});

}
