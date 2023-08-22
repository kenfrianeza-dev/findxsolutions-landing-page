import { NextResponse } from 'next/server';
import { items } from '../../../constants/products/data'

export async function GET(req: Request, { params }: { params: { category: string } }) {
  const category = params.category
  const data = items.filter((product: any) => product.slug === category);
  return data.length > 0 ? 
    NextResponse.json({data}) : 
    NextResponse.json({message: `Product with category of ${category} not found.`})
}