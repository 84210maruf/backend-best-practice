"use client"
import React, { useRef } from 'react'
import { formProps } from '@/types'

const Form = ({ children, action, className, onSubmit }: formProps) => {

    const ref = useRef<HTMLFormElement>(null);
    return (
        <Form action={async (FormData) => {
            await action(FormData);
            ref.current?.reset()
        }}
            onSubmit={onSubmit}
            ref={ref} >
            {children}
        </Form>
    )

}