import React from 'react'

const Portfolio1 = () => {
    // Project data array with links
    const projects = [
        {
            id: 3,
            title: "Multi Page Website",
            description: "Full responsive website.",
            image: 'p3.png',
            technologies: ["React js", "Tailwind CSS"],
            liveLink: "https://projectresponsi.netlify.app/",
            // githubLink: "https://github.com/username/ecommerce",
            isExternal: true
        },
        {
            id: 1,
            title: "Unique Hosting",
            description: "Experience the power of speed with our cutting-edge hosting infrastructure.",
            image: 'proj1.png',
            technologies: ["React js", "Tailwind CSS"],
            liveLink: "https://minecraftproject1.netlify.app/",
            // githubLink: "https://github.com/username/ecommerce",
            isExternal: true
        },
        {
            id: 2,
            title: "Membership Organisations",
            description: "Manage your entire community in a single system",
            image: "Proj2.png",
            technologies: ["React js", "Tailwind CSS"],
            liveLink: "https://meek-gecko-b10082.netlify.app/",
            // githubLink: "https://github.com/username/business-page",
            isExternal: true
        }
        // {
        //     id: 3,
        //     title: "Personal Blog Theme",
        //     description: "A clean, content-focused blog theme designed for readability.",
        //     image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE4fHxwb3J0Zm9saW98ZW58MHx8fHwxNjU4NDI2MDUx&ixlib=rb-1.2.1&q=80&w=400",
        //     technologies: ["HTML", "CSS"],
        //     liveLink: "https://example.com/blog-demo",
        //     githubLink: "https://github.com/username/blog-theme",
        //     isExternal: true
        // },
        // {
        //     id: 4,
        //     title: "Analytics Dashboard UI",
        //     description: "A data visualization dashboard UI created with CSS Grid.",
        //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRhc2hib2FyZHxlbnwwfHx8fDE2NTg0MjYwMjM&ixlib=rb-1.2.1&q=80&w=400",
        //     technologies: ["Grid", "UI/UX"],
        //     liveLink: "https://example.com/dashboard-demo",
        //     githubLink: "https://github.com/username/dashboard",
        //     isExternal: true
        // }
    ];

    return (
        <div id="portfolio">
            <h2 className="heading text-[#e0e0e0] text-[2rem] mb-4">Portfolio</h2>
            <div className="line w-15 h-1 bg-[#FFBF00]"></div>

            <div className="project-container mt-7.5 grid grid-cols-1 md:grid-cols-2 gap-6.5">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project group bg-[#1e1e1e] rounded-xl border border-[#3a3a3a] overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0px_0px_10px_5px_rgba(0,0,0,0.3)]"
                    >
                        {/* Make image clickable */}
                        <a
                            href={project.liveLink}
                            target={project.isExternal ? "_blank" : "_self"}
                            rel={project.isExternal ? "noopener noreferrer" : ""}
                            className="block overflow-hidden"
                        >
                            <img
                                className='h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110'
                                src={project.image}
                                alt={project.title}
                            />
                        </a>

                        <div className='card p-5'>
                            {/* Title as link */}
                            <a
                                href={project.liveLink}
                                target={project.isExternal ? "_blank" : "_self"}
                                rel={project.isExternal ? "noopener noreferrer" : ""}
                                className="block hover:text-[#FFBF00] transition-colors duration-300"
                            >
                                <h3 className='text-[#e0e0e0] text-xl font-semibold mb-2.5 group-hover:text-[#FFBF00] transition-colors duration-300'>
                                    {project.title}
                                </h3>
                            </a>

                            <p className='text-[#a0a0a0] mb-4 leading-relaxed'>
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="technologies flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-md text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Project Links */}
                            <div className="project-links flex gap-4 mt-4 pt-2 border-t border-[#3a3a3a]">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target={project.isExternal ? "_blank" : "_self"}
                                        rel={project.isExternal ? "noopener noreferrer" : ""}
                                        className="inline-flex items-center gap-1 text-sm text-[#FFBF00] hover:text-yellow-400 transition-colors duration-300 group/link"
                                    >
                                        View Website
                                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300 group/link  "
                                    >
                                        GitHub
                                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio1