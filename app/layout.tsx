import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ROSTOVA - Professional Trading Terminal',
  description: 'Advanced trading platform for Deriv',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}