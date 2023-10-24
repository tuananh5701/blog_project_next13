'use client'

import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import Appheader from './components/app.header'
import Apptable from './components/app.table'
import Container from 'react-bootstrap/Container';
import Appfooter from './components/app.footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appheader />
        <Container style={{minHeight: 'calc(100vh - 106px)'}}>
          {children}
        </Container>
        <Appfooter />
        <ToastContainer />
        </body>
    </html>
  )
}
