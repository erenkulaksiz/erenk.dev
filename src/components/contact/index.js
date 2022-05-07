import Link from "next/link";

const Contact = ({ contact }) => {
    return (<Link href={contact.link}>
        <a
            className="text-blue-600 flex flex-row items-center gap-2"
            target={contact?.email != true ? "_blank" : null}
            title={contact.id}
        >
            {contact?.icon && contact.icon}
            <span>{contact.title}</span>
        </a>
    </Link>)
}

export default Contact;