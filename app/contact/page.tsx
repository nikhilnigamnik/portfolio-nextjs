import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

import type { Metadata } from 'next'
import { Textarea } from '@/components/ui/textarea'

export const metadata: Metadata = {
    title: 'Contact - Nikhil Nigam - Developer, Designer',
    description: " Get in touch with me for your next project or idea.",
}


const page = () => {
    return (
        <div className='flex flex-col gap-4'>
            <span>
                let's get in touch and talk about your next project or idea.
            </span>
            <div className='flex flex-col gap-3 items-center'>

                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button>
                    Send
                </Button>
                <span>
                    Or you can schedule a meeting with me
                </span>
                <Button>
                    <a href="https://cal.com/nikhilnigamnik" target="_blank" rel="noopener noreferrer">
                        Let's Talk
                    </a>
                </Button>
            </div>


        </div>
    )
}

export default page