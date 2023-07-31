import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Testing cypresss deeplinking
        <Link href="/dashboard" data-cy="submit">test cypress</Link>
    </main>
  )
}
