import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    // Return the response with the same status code
    return NextResponse.json(data, { status: response.status });
  } catch (error: unknown) {
    if (process.env.NODE_ENV === "development") {
      console.error("Login API proxy error:", (error as Error).message);
    }
    
    return NextResponse.json(
      { message: "Failed to process login request" },
      { status: 500 }
    );
  }
}
