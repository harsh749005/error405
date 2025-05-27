"use server";
import { NextResponse } from "next/server";
import { sql } from "../../lib/db"; // path as per your project

export async function POST(req) {
    const body = await req.json();
    const {name,email,password} = body;  
    try {
        // const sql = neon(process.env.DATABASE_URL);
        await sql`INSERT INTO app_user (name,email,password) VALUES(${name},${email},${password})`;
        return NextResponse.json({ status: 'success', message:"inserted" });
    } catch (error) {
        return NextResponse.json({ status: 'fail', message: "Error inserting data", error: error.message });
    }

    
}
