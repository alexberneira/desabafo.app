import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desabafo.app - Desabafe de forma anônima',
  description: 'Um espaço seguro para desabafos anônimos e respostas acolhedoras. Você não está sozinho(a).',
  keywords: 'desabafo, anônimo, apoio, saúde mental, comunidade',
  authors: [{ name: 'Desabafo.app' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen`}>
        <div className="min-h-screen flex flex-col">
          {/* Header com design glassmorphism */}
          <header className="glass-card sticky top-0 z-50 border-b border-white/20">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <a href="/" className="text-xl font-bold gradient-text hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">
                      desabafo.app
                    </a>
                    <p className="text-white/80 text-xs hidden sm:block">
                      Você não está sozinho(a). Aqui você pode desabafar com segurança.
                    </p>
                  </div>
                </div>
                
                {/* Navigation */}
                <nav className="flex items-center space-x-3">
                  
                  {/* Floating elements for visual appeal */}
                  <div className="hidden md:flex space-x-2">
                    <div className="w-2 h-2 bg-white/30 rounded-full floating-animation" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-white/30 rounded-full floating-animation" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-2 h-2 bg-white/30 rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
          
          {/* Footer simples */}
          <footer className="bg-gray-900 border-t border-white/20 mt-auto">
            <div className="max-w-4xl mx-auto px-4 py-4">
              <div className="text-center">
                <p className="text-white text-xs font-semibold">
                  ❤️ Feito com empatia • 🔒 100% anônimo • 🤝 Comunidade acolhedora
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
