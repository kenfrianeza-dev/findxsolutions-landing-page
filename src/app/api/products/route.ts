import { NextResponse } from 'next/server';
import { products } from '../../constants/products/data'

export async function GET(req: Request) {
  return NextResponse.json({data: products})
}