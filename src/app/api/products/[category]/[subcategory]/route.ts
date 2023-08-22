import { NextResponse } from 'next/server';
import { items } from '../../../../constants/products/data'

export async function GET(req: Request, { params }: { params: { subcategory: string } }) {
  const subcategory = params.subcategory
  const data = items.filter((product: any) => product.sub_slug === subcategory);
  return data.length > 0 ? 
    NextResponse.json({data}) : 
    NextResponse.json({message: `Product with category of ${subcategory} not found.`})
}