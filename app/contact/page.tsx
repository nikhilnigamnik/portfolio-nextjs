import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-4'>
            <span>
                let's get in touch and talk about your next project or idea.
            </span>
            <div className='w-1/2 flex flex-col gap-3'>

                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Message" />
                <Button>
                    Send
                </Button>
                <span>
                    or email me at <a href="mailto:nikhilnigamnik@gmail.com">nikhilnigamnik@gmail.com</a>
                </span>
            </div>


        </div>
    )
}

export default page