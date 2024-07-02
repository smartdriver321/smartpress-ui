import Link from 'next/link'
import { ArrowLeftCircle } from 'lucide-react'

interface BackButtonProps {
  text: string
  link: string
}

export default function BackButton({ text, link }: BackButtonProps) {
  return (
    <Link
      href={link}
      className='text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5'
    >
      <ArrowLeftCircle size={18} /> {text}
    </Link>
  )
}
