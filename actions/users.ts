"use server";

import bcrypt from "bcrypt";
import { Resend } from "resend";

import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/types";
import EmailTemplate from "@/components/emails/email-template";

export async function createUser(formData: RegisterInputProps) {
   const { email, fullName, phone, password, role } = formData;
   const resend = new Resend(process.env.RESEND_API_KEY);
   try {
      const existingUser = await prismaClient.user.findUnique({
         where: {
            email,
         },
      });

      if (existingUser) {
         return {
            data: null,
            message: "User already exists!",
            status: 409,
            success: false,
         };
      }

      // Encrypt the Password =>bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
      //Generate Token
      const generateToken = () => {
         const min = 100000; // Minimum 6-figure number
         const max = 999999; // Maximum 6-figure number
         return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const userToken = generateToken();

      const newUser = await prismaClient.user.create({
         data: {
            name: fullName,
            email,
            phone,
            password: hashedPassword,
            role,
            token: userToken,
         },
      });

      //Send an Email with the Token on the link as a search param
      const token = newUser.token;
      const userId = newUser.id;
      const firstName = newUser.name.split(" ")[0];
      const linkText = "Verify your Account ";
      const message =
         "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
      const sendMail = await resend.emails.send({
         from: "Medical App <contact@stanfosys.com>",
         to: email,
         subject: "Verify Your Email Address",
         react: EmailTemplate({ name: firstName, token, linkText, message }),
      });
      console.log(token);
      console.log(sendMail);

      return {
         data: newUser,
         message: "User created successfully!",
         success: true,
         status: 201,
      };
   } catch (error) {
      return {
         message: "Something went wrong, try again!",
         success: false,
      };
   }
}
