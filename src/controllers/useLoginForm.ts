import { useState, type FormEvent } from 'react'

export function useLoginForm() {
  const [notice, setNotice] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setNotice(
      'Sign-in is a preview only. No credentials were sent or saved.',
    )
  }

  return { notice, handleSubmit }
}
