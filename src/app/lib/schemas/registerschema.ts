import {z} from 'zod';

export const registerschema = z.object({

    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6,{
        message: 'Das Passwort muss mindestens 6 Zeichen lang sein'
    }),

})


export type registerschema = z.infer<typeof registerschema>