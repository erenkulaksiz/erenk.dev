import Link from "next/link";

const Contact = ({ contact }) => {
    return (<Link href={contact.link}>
        <a
            className="text-blue-600 flex flex-row items-center gap-2 sm:hover:-translate-y-1 hover:translate-x-1 hover:opacity-80 transition-all ease-in-out"
            target={contact?.email != true ? "_blank" : null}
            title={contact.id}
            rel="noreferrer noopener"
        >
            {contact?.icon && contact.icon}
            <span>{contact.title}</span>
        </a>
    </Link>)
}

export default Contact;