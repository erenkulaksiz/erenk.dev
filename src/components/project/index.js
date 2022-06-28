import Link from "next/link";
import { ChevronLeftIcon, LinkIcon } from "../../icons";

const Project = ({ project, ...rest }) => {
    return (<div {...rest} className="group hover:-translate-y-1 hover:-translate-x-1 shadow-xl overflow-hidden transition-all ease-in-out z-50 w-full px-6 sm:px-8 py-8 rounded-xl relative" style={{ backgroundColor: project.theme.color }}>
        {project.image && <div className="flex md:hidden items-center mb-4">
            <img src={project.image} className="object-contain w-24 rounded" />
        </div>}
        <div className="flex flex-row gap-2 mb-2 text-white">
            {project.tags && project.tags.map((tag, index) => (<span key={index} className="flex items-center justify-center text-xs backdrop-blur-sm bg-white/20 p-1 px-2 rounded-lg">
                {tag}
            </span>))}
        </div>
        <h2 className="text-xl sm:text-3xl font-medium z-50 uppercase flex items-center flex-wrap" style={{ color: project.theme.text }}>
            {project.title}
        </h2>
        {project.workingOn && <div className="w-32 h-8 rounded-lg animate-pulse bg-neutral-400 flex items-center justify-center">Not Released</div>}
        <h3 className="mt-1" style={{ color: project.theme.descColor }}>{project.desc}</h3>
        {project.theme.bgGradient && <div className="-z-10 absolute rounded-xl left-0 right-0 bottom-0 top-0 bg-gradient-to-r from-transparent/0 to-neutral-900/80 group-hover:opacity-50 transition-opacity" />}

        {project.image && <div className="text-white absolute hidden md:flex top-0 bottom-0 items-center group-hover:-right-8 right-8 transition-all ease-in-out">
            <ChevronLeftIcon width={24} height={24} fill="currentColor" />
        </div>}
        {project.image && <div className="hidden md:flex -z-10 absolute top-0 bottom-0 group-hover:right-8 -right-[64px] opacity-20 group-hover:opacity-100 transition-all ease-[cubic-bezier(0.175,0.885,0.32,1.275)] duration-[.8s] items-center">
            <img src={project.image} className="object-contain w-48" />
        </div>}
        <div className="flex flex-row gap-2 items-center mt-4">
            {project.android && <Link href={project.androidURL} passHref>
                <a target="_blank" rel="noreferrer noopener">
                    <img src={project.android} className="h-10 hover:opacity-75 transition-all ease-in-out object-contain" />
                </a>
            </Link>}
            {project.link && <Link href={project.linkURL} passHref>
                <a target="_blank" rel="noreferrer noopener" className="flex flex-row items-center gap-2 text-white backdrop-blur-md bg-white/20 hover:bg-white/10 transition-all ease-in-out p-1 px-3 rounded-lg" >
                    <LinkIcon width={12} height={12} fill="currentColor" />
                    <span>{project.link}</span>
                </a>
            </Link>}
            {project?.contacts?.map((projectContact, index) => (
                <Link href={projectContact.url} passHref key={index}>
                    <a target="_blank" rel="noreferrer noopener" className="flex flex-row items-center gap-2 text-white backdrop-blur-md bg-white/20 hover:bg-white/10 transition-all ease-in-out p-1 px-3 rounded-lg" >
                        {projectContact.icon && <span>{projectContact.icon}</span>}
                        <span>{projectContact.title}</span>
                    </a>
                </Link>
            ))}
        </div>
    </div>)
}

export default Project;