"use client"
 
import { z } from "zod"
 
export const FormSchema = z.object({
  email: z.string().email({
    message:"Email is required"
  }),
  password:z.string().min(1,{
    message:"Password is required"
  })
});

export const RegisterSchema = z.object({
  mobile:z.string().min(10,{message:"Mobile number is required"}),
  name:z.string().min(1,{message:"Name is required"}),
  email: z.string().email({
    message:"Email is required"
  }),
  password:z.string().min(1,{
    message:"Password is required"
  })
});