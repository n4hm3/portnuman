"use client";
import React, { useState, useEffect, useRef } from 'react';

const Project = ({ title, video, description, techStack, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [mobileApp, setMobileApp] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (techStack.slice(0, 11) === "ReactNative") {
            setMobileApp(true);
        }
    }, [techStack]);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div>
            <div className='bg-slate-200 hover:bg-slate-300 rounded-xl p-1 flex flex-row justify-between' onClick={toggleExpand}>
                <h1 className="font-mono pt-0.5">{title}</h1>
                <p className='hidden sm:block lg:block text-sm bg-gray-400 font-mono rounded-xl p-1'>{techStack}</p>
            </div>
            {isExpanded && (
                <div>
                    <p className='sm:hidden lg:hidden text-sm bg-gray-400 font-mono rounded-xl p-1'>{techStack}</p>
                    <div className={`flex ${mobileApp ? 'flex-col sm:flex-row' : 'flex-col md:flex-row'} justify-center pt-2`}>
                        <div className='m-2 relative'>
                            {!isVideoLoaded && (
                                <div className={`absolute inset-0 flex items-center justify-center bg-gray-200 ${mobileApp ? 'w-full h-64 sm:w-64' : 'w-full h-64 md:w-96 md:h-72'}`}>
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                                </div>
                            )}
                            <video 
                                ref={videoRef}
                                src={video} 
                                autoPlay 
                                loop 
                                muted 
                                onLoadedData={handleVideoLoad}
                                className={`${mobileApp ? 'max-w-xs' : 'md:max-w-screen-sm'} ${isVideoLoaded ? '' : 'invisible'}`}
                            />
                        </div>
                        <div className='flex flex-col md:mx-4'>
                            <div className='font-mono md:my-2 h-fit w-fit border-l-4 border-black pl-2'>
                                <p>{description}</p>
                            </div>
                            <div className='font-mono mt-2 h-fit w-fit border-l-4 border-black pl-2'>
                                <a href={link} target='_blank' rel="noopener noreferrer" className='hover:underline'>→Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;