import type { Metadata } from 'next'
import "../styles/index.scss";

export const metadata: Metadata = {
  title: 'dine | exquisite dining since 1989',
  description: 'Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.',
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
