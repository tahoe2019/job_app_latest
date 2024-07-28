



import Credential from "next-auth/providers/credentials"
import NextAuth from "next-auth"

import type { NextAuthConfig } from "next-auth"
import { loginschem } from "./app/lib/loginschema"
import { getUserByEmail } from "./app/actions/authactions"
import { compare } from "bcryptjs"
export default{
    providers: [Credential({
        name: 'credentials',
        async authorize(creds){
            const  validated = loginschem.safeParse(creds);

            if(validated.success){

                const {email,password}= validated.data;

                const user = await getUserByEmail(email);

                if (!user || !(await compare(password, user.passwordHash))) return null;


                return user;


            }
        

        return null;
        }
    })],
}satisfies NextAuthConfig
