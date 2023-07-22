import { NextResponse } from 'next/server';
import { items } from '../../constants/products/data'

export async function GET(req: Request) {
  return NextResponse.json({data: items})
}