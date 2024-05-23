'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Title from '../ui/title';

const skills = [
    { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJs', 'Tailwind CSS', 'ReactNative', "TypeScript"] },
    { title: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'RESTful APIs'] },
    { title: 'DevOps', skills: ['Git', 'GitHub', 'CI/CD', 'Heroku', 'Vercel'] },
    { title: 'UI/UX', skills: ['Figma', 'Adobe XD', 'Photoshop'] }
];

interface TabProps {
    text: string;
    selected: boolean;
    setSelected: (text: string) => void;
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
    return (
        <button
            onClick={() => setSelected(text)}
            className={`${selected ? 'text-white dark:text-black' : ''
                } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
        >
            <span className="relative z-10">{text}</span>
            {selected && (
                <motion.span
                    layoutId="tab"
                    transition={{ type: 'spring', duration: 0.4 }}
                    className="absolute inset-0 z-0 rounded-full bg-neutral-950 dark:bg-neutral-50"
                ></motion.span>
            )}
        </button>
    )
}

const Skills = () => {
    const [selected, setSelected] = useState<string>(skills[0].title);
    const selectedSkills = skills.find(skill => skill.title === selected)?.skills || [];

    return (
        <div className="mt-10 flex flex-col gap-4">
            <Title title="Skills" />
            <div className="flex flex-wrap items-center gap-2">
                {skills.map((tab, index) => (
                    <Tab
                        text={tab.title}
                        selected={selected === tab.title}
                        setSelected={setSelected}
                        key={index}
                    />
                ))}
            </div>
            <div className="flex  gap-2 text-sm flex-col">

                {selectedSkills.map((skill, index) => (
                    <button className='underline  rounded-full px-3 w-fit' key={index}>{skill}</button>
                ))}

            </div>
            <hr />
        </div>
    )
}

export default Skills;
