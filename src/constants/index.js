import {
    EmailIcon,
    GitHubIcon,
    TwitterIcon,
    BehanceIcon,
    InstagramIcon
} from "../icons";

const writerHighlight = (text) => `<span class='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 font-extrabold'>${text}</span>`;

export const constants = {
    landing: {
        title: "Hello, I'm Eren.",
        desc: "I'm a Frontend Developer",
        descAttr: "@teknasyon",
        descAttrLink: "https://teknasyon.com",
        githubURL: "https://github.com/erenkulaksiz",
        writerStrings: [
            `${writerHighlight("I am making projects")} since 2018`,
            `${writerHighlight("I love")} open source`,
            `${writerHighlight("I'm writing JavaScript")} since 2019`,
            `${writerHighlight("I always loved and designed")} eye catching designs`,
            `${writerHighlight("I know how")} a good user experience works`,
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
                title: "Instagram",
                id: "instagram",
                link: "https://instagram.com/erentr",
                icon: <InstagramIcon width={20} height={20} fill="currentColor" />
            },
            {
                title: "GitHub",
                id: "github",
                link: "https://github.com/erenkulaksiz",
                icon: <GitHubIcon width={20} height={20} fill="currentColor" />
            },
            {
                title: "Behance",
                id: "behance",
                link: "https://www.behance.net/erenkulaksiz",
                icon: <BehanceIcon width={20} height={20} fill="currentColor" />
            },
            {
                title: "E-Mail",
                id: "email",
                link: "mailto:erenkulaksz@gmail.com",
                icon: <EmailIcon width={18} height={18} fill="currentColor" />,
                email: true,
            },
        ],
        projects: [
            {
                title: "Topla",
                desc: "Topla is an Android app, main target is for practicing basic algebra speed.",
                theme: {
                    color: "#0F7CBB",
                    descColor: "#e6e6e6",
                    text: "white",
                    bgGradient: true,
                },
                tags: ["Android", "React Native", "Open Source"],
                image: "https://raw.githubusercontent.com/erenkulaksiz/Topla/master/design/logo/dark/logo_full_dark.png",
                android: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png",
                androidURL: "https://play.google.com/store/apps/details?id=com.erencode.topla",
                contacts: [{
                    title: "GitHub",
                    id: "github",
                    url: "https://github.com/erenkulaksiz/Topla",
                    icon: <GitHubIcon width={20} height={20} fill="currentColor" />
                }]
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
                tags: ["Web", "NextJS", "Building", "Open Source"],
                link: "notal.app",
                linkURL: "https://notal.app",
                image: "https://raw.githubusercontent.com/erenkulaksiz/Notal/master/design/notal_logo_clean_white.png",
                contacts: [{
                    title: "GitHub",
                    id: "github",
                    url: "https://github.com/erenkulaksiz/Notal",
                    icon: <GitHubIcon width={20} height={20} fill="currentColor" />
                }],
            }
        ],
        workedProjects: [
            {
                title: "WA Agent",
                desc: "Track your family's wp online and offline activities.",
                theme: {
                    color: "#a913d6",
                    descColor: "#e6e6e6",
                    text: "white",
                    bgGradient: true,
                },
                tags: ["Android", "iOS", "UI/UX", "Application"],
                link: "Behance",
                linkURL: "https://www.behance.net/gallery/132069999/WA-Agent-UIUX",
                image: "/images/wa_agent.png"
            },
            {
                title: "Neepay",
                desc: "Send and recieve money easly.",
                theme: {
                    color: "#b5800d",
                    descColor: "#e6e6e6",
                    text: "white",
                    bgGradient: true,
                },
                tags: ["Android", "iOS", "UI/UX", "Banking", "Application"],
                link: "neepay.co",
                linkURL: "https://neepay.co/",
                image: "https://gcdn.bionluk.com/uploads/order/75dfa497-2d0b-464a-98ed-c74b8c7092d4.png",
                contacts: [{
                    title: "Screenshots",
                    id: "screenshots",
                    url: "https://drive.google.com/drive/folders/1X5E5iZJI5yePX8Z5h1pWuXzDfwSl2Rgf"
                }]
            },
        ]
    }
}