import React from 'react'
import Link from 'next/link'

export default function Cabecalho() {
  return (
    <div><ul>
    <li><Link href="/produtos/tenis">tenis</Link></li>
    <li><Link href="/produtos/calca">calca</Link></li>
    <li><Link href="/produtos/camiseta">camiseta</Link></li>
    
    </ul>
    </div>
  )
}



