import Image from 'next/image'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <main className='auth-container'>
        <section className='auth-form'>
            <div className='auth-box'>
                <div className='flex flex-row gap-3'>
                <Image
                src="/icons/logo.svg"
                alt='logo'
                width={37}
                height={37}
                />
                <h1 className=''>Bookwise</h1>

                </div>
                <div>
                    {children}
                </div>

            </div>


        </section>
        <section className='auth-illustration hidden lg:block'>
            <Image
            src="/images/auth-illustration.png"
            alt='illustration'
            width={800}
            height={800}
            />


        </section>

    </main>
  )
}

export default layout