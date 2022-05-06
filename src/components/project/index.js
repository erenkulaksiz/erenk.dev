import Link from "next/link";
import { ChevronLeftIcon, LinkIcon } from "../../icons";

const Project = ({ project }) => {
    return (<div className="group hover:-translate-y-1 overflow-hidden transition-all ease-in-out z-50 w-full px-8 py-8 rounded-xl relative" style={{ backgroundColor: project.theme.color }}>
        {project.image && <div className="flex md:hidden items-center mb-4">
            <img src={project.image} className="object-contain w-24" />
        </div>}
        <h2 className="text-xl sm:text-3xl font-medium z-50 uppercase flex items-center flex-wrap gap-2" style={{ color: project.theme.text }}>
            {project.title}
            {project.tags && project.tags.map((tag, index) => (<span key={index} className="flex items-center justify-center text-xs backdrop-blur-sm bg-white/20 p-1 px-2 rounded-lg">
                {tag}
            </span>))}
        </h2>
        <h3 className="mt-4" style={{ color: project.theme.descColor }}>{project.desc}</h3>
        {project.theme.bgGradient && <div className="-z-10 absolute rounded-xl left-0 right-0 bottom-0 top-0 bg-gradient-to-r from-transparent/0 to-neutral-900/80" />}
        {project.image && <div className="text-white absolute hidden md:flex top-0 bottom-0 items-center group-hover:-right-8 right-4 transition-all ease-in-out">
            <ChevronLeftIcon width={24} height={24} fill="currentColor" />
        </div>}
        {project.image && <div className="hidden md:flex -z-10 absolute top-0 bottom-0 group-hover:right-2 -right-[64px] opacity-20 group-hover:opacity-100 transition-all ease-[cubic-bezier(0.175,0.885,0.32,1.275)] duration-[.8s] items-center">
            <img src={project.image} className="object-contain w-32" />
        </div>}
        <div className="flex flex-row gap-2 items-center mt-4">
            {project.android && <Link href={project.androidURL} passHref>
                <a target="_blank">
                    <img src={project.android} className="h-10 hover:opacity-75 transition-all ease-in-out" />
                </a>
            </Link>}
            {project.link && <Link href={project.linkURL} passHref>
                <a className="flex flex-row items-center gap-2 text-white backdrop-blur-md bg-white/20 hover:bg-white/10 transition-all ease-in-out p-1 px-3 rounded-lg" target="_blank">
                    <LinkIcon width={12} height={12} fill="currentColor" />
                    <span>{project.link}</span>
                </a>
            </Link>}
            {project?.contacts?.map((projectContact, index) => (
                <Link href={projectContact.url} passHref key={index}>
                    <a className="flex flex-row items-center gap-2 text-white backdrop-blur-md bg-white/20 hover:bg-white/10 transition-all ease-in-out p-1 px-3 rounded-lg" target="_blank">
                        <span>{projectContact.icon}</span>
                        <span>{projectContact.title}</span>
                    </a>
                </Link>
            ))}
        </div>
    </div>)
}

export default Project;