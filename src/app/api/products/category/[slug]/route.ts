import { NextResponse } from 'next/server';
import { items } from '../../../../constants/products/data'

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug
  const data = items.filter((product: any) => product.slug === slug);
  return data.length > 0 ? 
    NextResponse.json({data}) : 
    NextResponse.json({message: `Product with category of ${slug} not found.`})
}