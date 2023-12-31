import { NextResponse } from "next/server";

export const POST = async(req, res) => {
    // Set a cookie with the name "user" and value "123"
    console.log('res', res)
    console.log('req J', req.json())
    console.log('req', req)
    const dataSent = await req.json();
    console.log('data sent', dataSent)
    res.setHeader('Set-CookieApp', 'user=123');
  
    // Respond with a message
    //res.status(200).json({ message: 'Cookie set successfully' });
    try {
        return NextResponse.json({ status: 200});
    } catch (error){
        return NextResponse.json({ status: 500 });
    }
  }