import { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
// Next
import Head from 'next/head';
import Link from 'next/link';

import { Writer, Contact, Project, ThemeSwitch, SVG } from '../components';

import { constants } from '../constants';
import { ArrowUpRightIcon, ChevronLeftIcon } from '../icons';


const Landing = (props) => {
  const { theme, setTheme } = useTheme();
  const [SSR, setSSR] = useState(true);
  const [random, setRandom] = useState(-1);

  const containerRef = useRef();

  let scroll = null;

  useEffect(() => {
    setSSR(false);

    if (random == -1) constants.landing.RANDOM_PHOTO_ON && setRandom(Math.floor(Math.random() * constants.landing.RANDOM_PHOTO_COUNT));

    if (scroll) return;

    scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: containerRef.current,
        smooth: true,
        tablet: {
          smooth: true,
        }
      });
    });
  }, []);

  return (
    <main
      ref={containerRef}
      className="flex flex-col items-center dark:text-white text-black relative overflow-hidden"
      data-scroll-container
    >
      <Head>
        <title>erenkulaksiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {theme && !SSR && <ThemeSwitch
        theme={theme}
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      />}
      {/*<img
        src="/images/1.png"
        className="absolute object-cover h-64 -right-16 top-24 animate-[landingBounce_4s_ease-in-out_infinite]"
        data-scroll
        data-scroll-speed="4"
      />*/}
      <div
        className="flex flex-col relative items-center justify-center h-screen max-w-[1688px] w-full"
      >
        <SVG
          className="absolute -z-10 w-24 fill-transparent stroke-blue-600/70 stroke-2 right-12 top-24 animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="hexa"
          data-scroll
          data-scroll-speed="2"
        />
        <SVG
          className="absolute -z-10 w-24 fill-pink-600/20 left-12 bottom-24 animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="circle"
          data-scroll
          data-scroll-speed="2"
        />
        <SVG
          className="absolute -z-10 sm:flex hidden w-32 fill-yellow-600/20 left-[70%] right-[50%] bottom-6 animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="triangle"
          data-scroll
          data-scroll-speed="-6"
        />
        {constants.landing.RANDOM_PHOTO_ON && <img src={`/images/random_${random}.jpeg`} className="absolute w-full h-full object-cover opacity-10 dark:opacity-10 -z-10" />}
        {!SSR && <div
          className="px-6 w-full sm:px-0 sm:w-9/12"
          data-scroll
          data-scroll-speed="5"
        >
          <img
            src="/images/eren.jpg"
            alt="eren"
            className="object-contain w-32 transition-all ease-in-out rounded-lg"
          />
        </div>}
        <div
          className="flex flex-col px-6 w-full sm:px-0 sm:w-9/12 mt-4 z-20"
          data-scroll
          data-scroll-speed="2"
        >
          <div className="font-extrabold text-4xl sm:text-6xl relative">
            {constants.landing.title}
            {!SSR && theme == "light" ? <img
              src="/images/highlight.png"
              className="object-contain hidden sm:flex w-8 absolute -left-8 -top-8"
              data-scroll
              data-scroll-speed="2"
            /> : <img
              src="/images/highlight_white.png"
              className="object-contain hidden sm:flex w-8 absolute -left-8 -top-8"
              data-scroll
              data-scroll-speed="2"
            />}
          </div>
          <h2 className="text-md sm:text-3xl mt-4 text-neutral-700 dark:text-neutral-400">
            {constants.landing.desc}
            {constants.landing.descAttr && <Link href={constants.landing.descAttrLink} passHref>
              <a className="ml-1 text-blue-600 font-bold" target="_blank">
                {constants.landing.descAttr}
              </a>
            </Link>}
          </h2>
          <Writer
            strings={constants.landing.writerStrings}
          />
        </div>
        <div
          className="flex flex-col sm:flex-row mt-12 px-6 w-full sm:px-0 sm:w-9/12 gap-8 sm:gap-6 text-md sm:text-xl font-bold flex-wrap"
          data-scroll
          data-scroll-speed="2"
        >
          {constants.landing.contactList.map((contact, index) =>
            <Contact
              contact={contact}
              key={index}
            />
          )}
        </div>
        <div
          data-scroll
          data-scroll-speed="4"
          className="absolute bottom-8 md:bottom-16 lg:bottom-32"
        >
          <div
            className="cursor-pointer flex flex-col items-center animate-[landingBounce_5s_ease-in-out_infinite]"
          >
            <ChevronLeftIcon width={20} height={20} fill="currentColor" className="rotate-90" />
            <span className="text-sm">Scroll to view more</span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center max-w-[1688px] w-full overflow-x-visible relative pb-2 mt-12"
      >
        <div
          className="absolute -left-[100%] -right-[100%] bottom-16 top-64"
          data-scroll
          data-scroll-speed="1"
        >
          <div className="rotate-[12deg] w-full h-full bg-gradient-to-r from-blue-300/50 dark:from-blue-600 to-pink-300/50 dark:to-pink-600" />
        </div>

        <SVG
          className="absolute w-24 fill-transparent stroke-white/70 stroke-2 left-24 top-[50%] bottom-[50%] animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="hexa"
          data-scroll
          data-scroll-speed="2"
        />
        <div
          className="flex flex-col gap-4 px-6 w-full sm:px-0 mt-16 md:mt-0 sm:w-9/12"
          data-scroll
          data-scroll-speed="6"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-0 sm:mb-8">
            Personal Projects
          </h1>
          {constants.landing.projects.map((project, index) =>
            <Project
              project={project}
              key={index}
            />
          )}
          <Link href={constants.landing.githubURL} passHref>
            <a target="_blank" className="bg-white dark:bg-neutral-800 shadow-lg group hover:-translate-y-1 hover:-translate-x-1 overflow-hidden transition-all ease-in-out z-50 w-full px-8 py-8 rounded-xl relative">
              <h2 className="uppercase text-2xl">More to come</h2>
              <div className="mt-2">
                These are just my small projects yet. Bigger ones are on their way! Also theres more little projects i am working on GitHub which you can visit them by clicking this card.
              </div>
              <div className="absolute right-6 top-6">
                <ArrowUpRightIcon width={16} height={16} className="fill-neutral-700 dark:fill-neutral-400" />
              </div>
            </a>
          </Link>
        </div>
      </div>{/*
      <div
        className="flex flex-col items-center max-w-[1688px] w-full relative mt-36 sm:mt-12 pb-32"
      >
        <div
          className="flex flex-col gap-4 px-6 w-full sm:px-0 sm:w-9/12"
          data-scroll
          data-scroll-speed="6"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-0 sm:mb-8">
            Freelance Projects
          </h1>
          {constants.landing.workedProjects.map((project, index) =>
            <Project
              project={project}
              key={index}
            />
          )}
        </div>
          </div>*/}
      <div
        className="flex flex-col items-center justify-center max-w-[1688px] w-full sm:mb-48 mb-8 mt-32"
      >
        <SVG
          className="absolute -z-10 w-24 fill-pink-600/20 left-12 bottom-24 animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="circle"
          data-scroll
          data-scroll-speed="2"
        />

        <SVG
          className="absolute -z-10 w-24 fill-blue-600/20 right-12 bottom-100 animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="triangle"
          data-scroll
          data-scroll-speed="2"
        />
        <div className="flex flex-col px-6 w-full sm:px-0 sm:w-9/12"
          data-scroll
          data-scroll-speed="2"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">🙌 About Me</h1>
          <div className="flex flex-col font-extralight gap-8 justify-center text-lg md:text-2xl">
            <p>
              {`I'm a software developer working as`} <b>Frontend Developer</b> <Link href="https://teknasyon.com" passHref>
                <a className="text-blue-600 font-bold" target="_blank">
                  @teknasyon
                </a>
              </Link> and currently located in <b>Istanbul, Turkey.</b>
            </p>
            <p>
              Ive always loved visual stuff. I started off with doing motion graphics for various customers (you can checkout from my Behance)
              And i was interested into programming, which i was building <b>Windows Forms via VisualBasic .net.</b> After sometime later, i started merging my design and programming skills together and i discovered <b>JavaScript</b> nearly 2 years ago.
            </p>
            <p>
              {`I had a big range from developing small games with Unity and Unreal Engine to Robotics with RPi3 (Python) & Arduino. I even made robot for ODTU Robotic Days which never went into competition since Corona Virus came up.`}
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center max-w-[1688px] w-full sm:mb-48 mb-8 mt-32"
      >
        <div className="flex flex-col px-6 w-full sm:px-0 sm:w-9/12"
          data-scroll
          data-scroll-speed="1"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">👋  Say Hello</h1>
          <div className="flex flex-col gap-8 justify-center text-lg md:text-2xl">
            <p>
              Send me a hi message from Twitter or send me an email to meet! I will answer any of your questions, 24/7 no fees.
            </p>
          </div>
        </div>
      </div>
    </main >
  )
}

export default Landing;