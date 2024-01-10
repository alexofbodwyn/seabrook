import React from "react"
import Link from "next/link"

export default function Footer() {
  return(
    <footer className="bg-stone-700 flex justify-center items-center min-h-[60px] px-4 py-1 mt-auto">
      <p className="text-white text-center  ">Registered in England and Wales: 14823380.  Registered Office: 7 Bell Yard, London WC2A 2JR.<br /><Link className="underline" href="/privacy-policy" title="Privacy Policy">Privacy Policy</Link></p>
    </footer>
  )
}