'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import BackButton from '@/components/BackButton'
import posts from '@/data/posts'

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  body: z.string().min(1, {
    message: 'Body is required',
  }),
  author: z.string().min(1, {
    message: 'Author is required',
  }),
  date: z.string().min(1, {
    message: 'Date is required',
  }),
})

interface PostEditPageProps {
  params: {
    id: string
  }
}

export default function PostEditPage({ params }: PostEditPageProps) {
  const post = posts.find((post) => post.id === params.id)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: posts?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    },
  })

  return (
    <>
      <BackButton text='Back To Posts' link='/posts' />
      <h3 className='text-2xl mb-4'>Edit Post</h3>
    </>
  )
}
