import React, { useState } from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { useSpring, animated } from 'react-spring';





function ProjectCard({ project }) {
    const [isReadMoreShown, setIsReadMoreShown] = useState(false);

    const toggleReadMore = () => {
        setIsReadMoreShown(!isReadMoreShown);
    };

    // Estimate a maxHeight that would fit the expanded content.
    // You might need to adjust this value based on your content's actual size.
    const expandAnimation = useSpring({
        to: { opacity: 1, maxHeight: isReadMoreShown ? '600px' : '0px' },
        from: { opacity: 0, maxHeight: '0px' },
    });

    return (
        <div className="card flex items-center justify-start m-5 p-5 w-4/5 min-h-[200px]">
            <img className="projectImg w-1/4 m-5 max-h-96" alt="project" src={project.image}></img>
            <div className="cardInfo">
                <h2 className="cardTitle font-heading text-3xl text-purewhite">{project.title}</h2>
                {!isReadMoreShown && (
                    <p className="shortText text-purewhite font-paragraph mt-3 mb-2">{project.s_description}</p>
                )}
                <animated.div style={expandAnimation}>
                    {isReadMoreShown && (
                        <>
                        <br/>
                        <a className='text-purewhite underline' href={project.website}>{project.website}</a>
                        {project.l_description.split("\n").map((paragraph, index) => (
                            <p key={index} className="additionalTextHidden text-purewhite font-paragraph mt-3">{paragraph}</p>
                        ))}
                        <div className="icon-holder flex pt-5">
                            {project.icons.map((icon, index) => (
                                <img key={index} src={icon} alt="Project Icon" className="mx-3 mb-5 h-16 w-16" />
                            ))}
                        </div>
                        </>
                    )}
                </animated.div>
                <p className="cardReadMore text-purewhite font-paragraph">
                <button className="cardLink cursor-pointer" onClick={toggleReadMore}>
                {isReadMoreShown ? 'Read Less' : 'Read More'} <FontAwesomeIcon icon={isReadMoreShown ? faArrowUp : faArrowDown} />
                </button>
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;
