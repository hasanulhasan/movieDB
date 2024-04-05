import { getAllMovie } from "@/app/data/data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getAllMovie();
  return NextResponse.json(data)
}
