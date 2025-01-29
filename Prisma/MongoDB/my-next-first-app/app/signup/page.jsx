"use client"
import React, { useState } from 'react'
import prisma from '@/lib/prisma'

async function submitUser(name, email) {
  return await prisma.user.create({
    data: {
      name: name,
      email: email
    },
  });
}

function Page() {
  // const user = await prisma.user.findMany()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitUser(name, email);
    // Optionally reset the form or handle success
  }

  return (
    <main>
      <form>
        <div>SignUp User</div>
        <input
          autoFocus
          onChange={e => setName(e.target.value)}
          placeholder='Name'
          type='text'
          value={name} />

        <input
          autoFocus
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
          type='text'
          value={email} />

        <input
          disabled={!name || !email} 
          type='submit'
          value="SignUp"
          className='border-2 p-2 rounded-full bg-orange-600 cursor-pointer'
        />
      </form>
    </main>
  )
}

export default Page        