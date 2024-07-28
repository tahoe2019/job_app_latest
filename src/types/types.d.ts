import { ZodIssue } from "zod";

type ActionResul<T> = {status: 'success',data: T} 
|{status: 'error', error: string | ZodIssue[]}