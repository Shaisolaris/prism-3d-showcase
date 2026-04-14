import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Prism — Interactive 3D Product Experience',
  description: '3D product visualization',
  icons: {
    icon: [
      {
        url: '/prism-3d-showcase/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/prism-3d-showcase/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/prism-3d-showcase/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/prism-3d-showcase/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
