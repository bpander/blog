'use client'
import { useState } from 'react'
import { GoogleButton } from './GoogleButton'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(!open)}>Show/hide</button>
      {open && (
        <GoogleButton />
      )}
      <h1>Test</h1>
    </>
  )
}
