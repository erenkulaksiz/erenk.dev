import {
    EmailIcon,
    GitHubIcon,
    TwitterIcon,
    BehanceIcon
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
            `${writerHighlight("I love")} React since 2020`,
            `${writerHighlight("I write JavaScript")} since 2019`,
            `${writerHighlight("I always loved and designed")} eye catching designs`
        ],
        contactList: [
            {
                title: "Twitter",
                id: "twitter",
                link: "https://twitter.com/erencode",
                icon: <TwitterIcon width={20} height={20} fill="currentColor" />
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
        ]
    }
}