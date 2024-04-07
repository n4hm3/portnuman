"use client";
import React, { useState, useEffect} from 'react';

const Project = ({ title, video, description, techStack, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [mobileApp, setMobileApp] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (techStack.slice(0, 11) === "ReactNative") {
            setMobileApp(true);
        }
    }, []);

    return (
        <div>
            <div className='bg-slate-200 hover:bg-slate-300 rounded-xl p-1 flex flex-row justify-between' onClick={toggleExpand}>
                <h1 className="font-mono pt-0.5" >{title}</h1>
                <p className='hidden sm:block lg:block text-sm bg-gray-400 font-mono rounded-xl p-1'>{techStack}</p>
            </div>
            {isExpanded && (
                <div>
                <p className='sm:hidden lg:hidden text-sm bg-gray-400 font-mono rounded-xl p-1'>{techStack}</p>
                <div className={`flex ${ mobileApp ? 'flex-col sm:flex-row ' : 'flex-col md:flex-row'} justify-center pt-2`}>
                    <div className='m-2 '>
                        <video src={video} autoPlay loop muted className={`${ mobileApp ? 'max-w-xs' : 'md:max-w-screen-sm'}`}/>
                    </div>
                    <div className='flex flex-col md:mx-4'>
                    <div className='font-mono md:my-2 h-fit w-fit border-l-4 border-black pl-2'>
                        <p>{description}</p>
                    </div>
                    <div className='font-mono mt-2 h-fit w-fit border-l-4 border-black pl-2'>
                        <a href={link} target='_blank' className='hover:underline'>→Visit</a>
                    </div>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default Project;