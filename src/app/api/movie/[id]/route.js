import { getMovieById } from "@/app/data/data";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
  const movieId = params?.id
  const data = await getMovieById(parseInt(movieId));
  return NextResponse.json(data)
}

export async function PATCH(request, {params}){
  const text = await request.json();
  const movieId = parseInt(params?.id)
  const movieToEdit = await getMovieById(parseInt(movieId));
  movieToEdit.title = text.title;
  return NextResponse.json(movieToEdit)
}

export async function DELETE(request, {params}){
  const movieId = parseInt(params?.id)
  const movieToDelete = await getMovieById(parseInt(movieId));
  return NextResponse.json(movieToDelete)
}