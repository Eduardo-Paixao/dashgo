import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log(`Middleware foi chamado para: ${req.nextUrl.pathname}`);
  const token = req.cookies.get("dashgoToken");

  if (!token && req.nextUrl.pathname !== "/") {
    console.log("🔴 Token não encontrado. Redirecionando para /...");
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (token && req.nextUrl.pathname === "/") {
    console.log("🔴 Usuário já autenticado. Redirecionando para /dashboard...");
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/users", "/"],
};
