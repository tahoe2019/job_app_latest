import {z} from 'zod';

export const loginschem = z.object({

    email: z.string().email(),
    password: z.string().min(6,{
        message: 'Das Passwort muss mindestens 6 Zeichen lang sein'
    }),

})


export type loginschem = z.infer<typeof loginschem>