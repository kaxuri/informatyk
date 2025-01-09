import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O nas - Historia zmian',
  description: 'Zobacz historię rozwoju naszej platformy quizowej dla egzaminów kwalifikacyjnych INF.03 i INF.02.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="relative">
        {children}
        <p className='text-center text-xs text-gray-700 mb-4'>© Akumadev  {new Date().getFullYear()}</p>        
      </div>
    </div>
  )
}

