import { NextResponse } from 'next/server';

const USERNAME = "canggu";
const PASSWORD = "Canggu@2025";
const TEMP_TOKEN = 'dBK9VVVqitvmVYIDHmnjCtKdE';

export async function POST(req: Request) {
    const { username, password } = await req.json();

    if (username === USERNAME && password === PASSWORD) {
        const response = NextResponse.json({
            token: TEMP_TOKEN,
            message: 'Login successful',
        });

        response.cookies.set({
            name: 'temp_token',
            value: TEMP_TOKEN,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60, // 1 hour
            path: '/',
        });

        return response;
    }



    return NextResponse.json(
        { message: 'Invalid username or password' },
        { status: 401 }
    );
}
