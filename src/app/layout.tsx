import type { Metadata } from 'next';import './globals.css';import Header from '@/components/Header';import Footer from '@/components/Footer';
export const metadata:Metadata={title:{default:'PICTORESCU — Arta merită să fie văzută',template:'%s | PICTORESCU'},description:'Galerie de artă, înrămări profesionale și shop pentru artiști. PICTORESCU by ART JUNKIE.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ro"><body><Header/><main className="min-h-[65vh]">{children}</main><Footer/></body></html>}
