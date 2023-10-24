'use client'
import Link from "next/link"
import useSWR from "swr"
import Apptable from "./components/app.table"

export default function Home() {
  

  return (
    <div>
      
      <li><Link href={'/facebook'}>Facebook</Link></li>
      <li><Link href={'/youtube'}>Youtube</Link></li>
      
    </div>
  )
}
