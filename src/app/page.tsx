'use client'
import { GoogleButton } from '@/components/GoogleButton'
import { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <h1>Test</h1>
      <button onClick={() => setOpen(!open)}>Show/hide</button>
      {open && (
        <GoogleButton />
      )}
    </div>
  );
}
