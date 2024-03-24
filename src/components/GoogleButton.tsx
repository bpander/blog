'use client'
import { decodeJwt } from '@/util/decodeJwt'
import { useEffect, useRef } from 'react'

const getGoogle = () => new Promise<typeof google>((resolve) => {
  const tryGetGoogle = () => {
    if (window.google) {
      resolve(window.google)
      return
    }
    setTimeout(tryGetGoogle, 100)
  }
  tryGetGoogle()
})

export const GoogleButton = () => {
  const googleButtonRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    getGoogle().then((google) => {
      if (!googleButtonRef.current || !process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) return
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: (response) => {
          console.log(decodeJwt(response.credential))
        },
      });
      google.accounts.id.renderButton(googleButtonRef.current, {
        type: 'standard',
        theme: 'outline',
        size: 'large',
      });
    })
  }, [])

  return <div ref={googleButtonRef} />
}
