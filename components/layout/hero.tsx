import Image from 'next/image'
import React from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";


const socialLinks = [
  {
    id: 1,
    icon: <GitHubLogoIcon />,
    name: 'GitHub',
    url: "https://github.com/nikhilnigamnik/"
  },
  {
    id: 2,
    icon: <TwitterLogoIcon />,
    name: 'Twitter',
    url: "https://x.com/nikhil_nigamnik/"
  },
  {
    id: 3,
    icon: <LinkedInLogoIcon />,
    name: 'LinkedIn',
    url: "https://www.linkedin.com/in/nikhil-nigam-a2454b1a9/"

  }
]

const Hero = () => {

  return (
    <div className='flex flex-col gap-4'>
      <Image src='/nik-profile.jpeg' className='rounded-full' height={100} width={100} alt='logo' />
      <div>
        <h1 className="text-xl">
          Hey, I'm Nikhil Nigam 👋
        </h1>
        <span>
          Developer & Designer
        </span>
      </div>
      <div className="flex  items-center gap-4">
        {
          socialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          ))
        }
      </div>
      <hr />
      <p className="flex flex-col gap-4">
        <span>
          I'm a full stack developer based in India. I build web applications and mobile application using modern technologies.
        </span>
        <span>
          I love to write about web development, programming and technology. I'm currently working on a few projects and writing blog posts.
        </span>
      </p>
    </div>
  )
}

export default Hero