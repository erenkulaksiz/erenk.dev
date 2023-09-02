import {
    EmailIcon,
    GitHubIcon,
    TwitterIcon,
    BehanceIcon,
    InstagramIcon,
    LinkedinIcon,
} from "../icons";

const writerHighlight = (text) => `<span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 font-extrabold'>${text}</span>`;

export const constants = {
    landing: {
        title: "Hello, I'm Eren.",
        desc: "I'm a Frontend Developer",
        sections: [{
            sectionTitle: "🙌 About Me",
            sectionContent: "I'm a passionate software developer working as a <b>Frontend Developer</b> and currently located in Istanbul, Turkey. \n I've always loved visual stuff. I started off with making motion graphics for various customers and i was interested into programming, which i was building <b>Windows Forms via VisualBasic and working with C# back then.</b> After sometime later, i started merging my design and programming skills together and i discovered <b>JavaScript</b> nearly 3 years ago and <b>TypeScript</b> nearly 2 years ago."
        }, {
            sectionTitle: "👋 Say Hello",
            sectionContent: "Send me a hi message from <a href='https://twitter.com/erenkulaksiz' class='text-blue-600 font-bold' target='_blank' rel='noreferrer'>Twitter</a> or send me an email to meet! I will answer any of your questions, 24/7 no fees."
        }],
        descAttr: "",
        descAttrLink: "",
        githubURL: "https://github.com/erenkulaksiz",
        writerStrings: [
            `${writerHighlight("I am making projects")} since 2018`,
            `${writerHighlight("I love")} open source`,
            `${writerHighlight("I'm writing JavaScript")} since 2019`,
            `${writerHighlight("\"Less design\"")} is more design`,
        ],
        RANDOM_PHOTO_COUNT: 5,
        RANDOM_PHOTO_ON: false,
        contactList: [
            {
                title: "Twitter",
                id: "twitter",
                link: "https://twitter.com/erencode",
                icon: <TwitterIcon width={20} height={20} fill="currentColor" />
            },
            {
                title: "Github",
                id: "github",
                link: "https://github.com/erenkulaksiz",
                icon: <GitHubIcon width={20} height={20} fill="currentColor" />
            },

            /*{
                title: "Freelance",
                id: "freelance",
                link: "/freelance",
                noblank: true
            },
            */
            {
                title: "LinkedIn",
                id: "linkedin",
                link: "https://www.linkedin.com/in/erenkulaksiz",
                icon: <LinkedinIcon width={20} height={20} fill="currentColor" />
            },
            {
                title: "E-mail",
                id: "email",
                link: "mailto:erenkulaksz@gmail.com",
                icon: <EmailIcon width={18} height={18} fill="currentColor" />,
                email: true,
            }
        ],
        projects: [
            {
                title: "Nexys",
                desc: "Logging & analytics from the future.",
                theme: {
                    color: "#afcc00",
                    descColor: "#e6e6e6",
                    text: "white",
                    bgGradient: true,
                },
                tags: ["TypeScript", "NextJS", "NodeJS", "React Native"],
                link: "nexys.app",
                linkURL: "https://nexys.app",
                image: "https://raw.githubusercontent.com/erenkulaksiz/nexys/master/apps/docs-v2/static/img/nexys_logo_light.png",
                contacts: [{
                    title: "GitHub",
                    id: "github",
                    url: "https://github.com/erenkulaksiz/Nexys",
                    icon: <GitHubIcon width={20} height={20} fill="currentColor" />
                }],
            },
            {
                title: "Notal",
                desc: "Take notes, write todos and create your own workspaces.",
                theme: {
                    color: "#19181E",
                    descColor: "#e6e6e6",
                    text: "white",
                    bgGradient: true,
                },
                tags: ["Web", "TypeScript", "Open Source", "NextJS", "MongoDB"],
                link: "notal.app",
                linkURL: "https://notal.app",
                image: "https://raw.githubusercontent.com/erenkulaksiz/Notal/master/brand/notal_logo_clean_white.png",
                contacts: [{
                    title: "GitHub",
                    id: "github",
                    url: "https://github.com/erenkulaksiz/Notal",
                    icon: <GitHubIcon width={20} height={20} fill="currentColor" />
                }],
            },
            {
                title: "Topla",
                desc: "Topla is an Android app, main target is for practicing basic algebra speed.",
                theme: {
                    color: "#0F7CBB",
                    descColor: "#e6e6e6",
                    text: "white",
                    bgGradient: true,
                },
                tags: ["Android", "Open Source", "React Native", "NodeJS", "MongoDB"],
                image: "https://raw.githubusercontent.com/erenkulaksiz/Topla/master/design/logo/dark/logo_full_dark.png",
                contacts: [{
                    title: "GitHub",
                    id: "github",
                    url: "https://github.com/erenkulaksiz/Topla",
                    icon: <GitHubIcon width={20} height={20} fill="currentColor" />
                }]
            }
        ],
        workedProjects: [],
        mediumStories: [{
            title: "React için daha zor Technical Interview soruları — Bölüm #1",
            id: "react_daha_zor_1",
            link: "https://medium.com/@erenkulaksiz/react-i%C3%A7in-daha-zor-technical-interview-sorular%C4%B1-b%C3%B6l%C3%BCm-1-4089358180a3",
            lang: "Turkish",
        }],
    }
}