import {
    EmailIcon,
    GitHubIcon,
    TwitterIcon,
    BehanceIcon,
    InstagramIcon,
    LinkedinIcon,
    PlayStoreIcon,
} from "../icons";

const writerHighlight = (text) => `<span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 font-extrabold'>${text}</span>`;

export const constants = {
    landing: {
        title: "Hello, I'm Eren.",
        desc: "I'm a Frontend Developer",
        sections: [{
            sectionTitle: "🙌 About Me",
            sectionContent: "I'm a passionate <b>Frontend Developer</b> who enjoys converting designs into pixel-perfect code. I also enjoy learning new technologies and constantly striving to improve myself."
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
                link: "mailto:me@eren.one",
                icon: <EmailIcon width={18} height={18} fill="currentColor" />,
                email: true,
            }
        ],
        projects: [
            {
                title: "Ayse.ai",
                desc: "Astrology, tarot cards, numerology and more.",
                theme: {
                    color: "#1c003a",
                    descColor: "#e6e6e6",
                    text: "white",
                    bgGradient: true,
                },
                tags: ["React Native", "NextJS", "Laravel", "Docker", "MongoDB"],
                link: "ayse.ai",
                linkURL: "https://ayse.ai",
                image: "https://ayse.ai/images/icon.png",
                contacts: [{
                    title: "Play Store",
                    id: "play-store",
                    url: "https://play.google.com/store/apps/details?id=ai.ayse",
                    icon: <PlayStoreIcon width={15} height={20} fill="currentColor" />
                }],
            },
            {
                title: "Nexys",
                desc: "Logging & analytics from the future.",
                theme: {
                    color: "#afcc00",
                    descColor: "#e6e6e6",
                    text: "white",
                    bgGradient: true,
                },
                tags: ["TypeScript", "NextJS", "Laravel", "Docker", "MongoDB"],
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
                tags: ["TypeScript", "NextJS", "MongoDB"],
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