import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container flex items-center justify-between py-4">
                <MainNav />
              </div>
            </header>
            <main className="flex-1 container py-6">
              {children}
            </main>
            <footer className="border-t py-4 text-center text-sm text-muted-foreground">
              © 2023 AlumniConnect. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}