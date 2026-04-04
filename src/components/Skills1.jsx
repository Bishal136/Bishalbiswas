import React from 'react'
import html from '../assets/html5.svg'
import css from '../assets/css.svg'
import javaScript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import typeScript from '../assets/typescript.svg'
import node from '../assets/nodedotjs.svg'
import express from '../assets/express.svg'
import mongo from '../assets/mongodb.svg'
import git from '../assets/git.svg'
import C from '../assets/c.svg'
import Mysql from '../assets/mysql.svg'

const skills = [
    { src: html, label: 'HTML5' },
    { src: css, label: 'CSS3' },
    { src: javaScript, label: 'Javascript' },
    { src: react, label: 'React' },
    { src: typeScript, label: 'Typescript' },
    { src: node, label: 'Node Js' },
    { src: express, label: 'Express' },
    { src: mongo, label: 'Mongodb' },
    { src: git, label: 'Git & Github' },
    { src: C, label: "C program" },
    { src: Mysql, label: "My SQL"}
]

export const Skills1 = () => {
    return (
        <div id='skills'>
            <h2 className='heading text-[#e0e0e0] text-[2rem] mb-4'>Skills</h2>
            <div className='line w-15 h-1 bg-[#FFBF00]'></div>

            <div className='grid-container grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-7'>
                {skills.map(({ src, label }) => (
                    <div
                        key={label}
                        className="place-items-center p-5 rounded-lg border-2 border-[#3a3a3a] bg-[#1e1e1e] text-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]"
                    >
                        <img
                            className='h-12 w-12 mb-4 invert-75 sepia-50 saturate-1000 hue-rotate-350 brightness-110 contrast-101'
                            src={src}
                            alt={label}
                        />
                        <h3 className='text-[1rem] font-medium'>{label}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}