'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function revalidate(validate) {
  console.log('worked fine')
  revalidateTag(validate)
}