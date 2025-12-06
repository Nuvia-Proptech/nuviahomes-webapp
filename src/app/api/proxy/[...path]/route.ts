import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Generic API proxy route that forwards ALL requests to the backend API
 * This solves CORS issues by making requests server-side
 * Supports: GET, POST, PUT, PATCH, DELETE
 */

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params, "GET");
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params, "POST");
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params, "PUT");
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params, "PATCH");
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleRequest(request, params, "DELETE");
}

async function handleRequest(
  request: NextRequest,
  params: { path: string[] },
  method: string
) {
  try {
    // Reconstruct the API path from the catch-all route
    const apiPath = params.path.join("/");
    const fullUrl = `${API_BASE_URL}/${apiPath}`;

    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const queryString = searchParams.toString();
    const urlWithQuery = queryString ? `${fullUrl}?${queryString}` : fullUrl;

    // Prepare headers
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // Forward Authorization header if present
    const authHeader = request.headers.get("authorization");
    if (authHeader) {
      headers["Authorization"] = authHeader;
    }

    // Prepare request options
    const options: RequestInit = {
      method,
      headers,
    };

    // Add body for methods that support it
    if (method !== "GET" && method !== "DELETE") {
      const body = await request.json();
      options.body = JSON.stringify(body);
    }

    // Make the request to the backend API
    const response = await fetch(urlWithQuery, options);

    // Get the response data
    const data = await response.json();

    // Return the response with the same status code
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    // Only log errors in development mode
    if (process.env.NODE_ENV === "development") {
      console.error("Proxy error:", error.message);
    }

    return NextResponse.json(
      { message: "Failed to process request" },
      { status: 500 }
    );
  }
}
