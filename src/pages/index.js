import { useRef, useEffect, useState } from 'react';
import ReactDOM from "react-dom"
import { useTheme } from 'next-themes'
// Next
import Head from 'next/head';
import Link from 'next/link';

import { Writer, Contact, Project, ThemeSwitch, SVG } from '../components';

import { constants } from '../constants';
import { ArrowUpRightIcon, ChevronLeftIcon, LinkIcon } from '../icons';


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
    //data-scroll-container
    >
      <Head>
        <title>erenkulaksiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<img
        src="/images/1.png"
        className="absolute object-cover h-64 -right-16 top-24 animate-[landingBounce_4s_ease-in-out_infinite]"
        data-scroll
        data-scroll-speed="4"
      />*/}
      {theme && !SSR && ReactDOM.createPortal(<ThemeSwitch
        theme={theme}
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      />, document.getElementsByTagName("body")[0])}
      <div
        className="flex flex-col relative items-center justify-center h-screen max-h-screen w-full"
      >
        {constants.landing.RANDOM_PHOTO_ON && <div className="absolute -inset-5 bg-gradient-to-t dark:from-black from-white dark:to-transparent/70 to-white/20">
          <img
            src={`/images/random_${random}.jpeg`}
            className="absolute w-full h-[calc(100%-10px)] -z-20 object-cover blur-[10px]"
          />
          <div className="absolute -bottom-40 left-0 right-0 h-40 dark:bg-black bg-white"></div>
        </div>}
        <SVG
          className="absolute z-10 sm:flex hidden w-24 fill-blue-600/40 left-40 scale-50 top-40 animate-[landingBounce_2.5s_ease-in-out_infinite]"
          icon="cross"
          data-scroll
          data-scroll-speed="2"
        />
        <SVG
          className="absolute z-10 w-24 fill-transparent stroke-blue-600/40 stroke-2 right-12 top-24 animate-[landingBounce_3.5s_ease-in-out_infinite]"
          icon="hexa"
          data-scroll
          data-scroll-speed="2"
          data-scroll-id="hexa"
        />
        <SVG
          className="absolute z-10 w-24 fill-pink-600/40 left-12 bottom-16 animate-[landingBounce_2.2s_ease-in-out_infinite]"
          icon="circle"
          data-scroll
          data-scroll-speed="2"
        />
        <SVG
          className="absolute z-10 sm:flex hidden w-32 fill-yellow-600/40 left-[70%] right-[50%] bottom-6 animate-[landingBounce_4.2s_ease-in-out_infinite]"
          icon="triangle"
          data-scroll
          data-scroll-speed="-6"
        />
        {!SSR && <div
          className="px-6 w-full sm:px-0 sm:w-9/12 z-10"
          data-scroll
          data-scroll-speed="5"
        >
          <img
            src="/images/eren2.jpg"
            alt="eren"
            className="object-cover w-48 h-48 transition-all ease-in-out rounded-lg"
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
          className="flex flex-col z-10 sm:flex-row mt-12 px-6 w-full sm:px-0 sm:w-9/12 gap-8 sm:gap-6 text-md sm:text-xl font-bold flex-wrap"
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
          className="absolute left-0 right-0 top-0 bottom-4 sm:flex hidden justify-center items-end"
          data-scroll
          data-scroll-speed="4"
        >
          <div>
            <div className="cursor-pointer flex flex-col items-center animate-[landingBounce_5s_ease-in-out_infinite]">
              <ChevronLeftIcon width={20} height={20} fill="currentColor" className="rotate-90" />
              <span className="text-sm">Scroll to view more</span>
            </div>
          </div>
        </div>
        <div
          className="absolute left-0 right-0 top-0 bottom-4 sm:hidden flex justify-center items-end"
        >
          <div>
            <div className="cursor-pointer flex flex-col items-center animate-[landingBounce_5s_ease-in-out_infinite]">
              <ChevronLeftIcon width={20} height={20} fill="currentColor" className="rotate-90" />
              <span className="text-sm">Scroll to view more</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center max-w-[1688px] w-full overflow-x-visible relative pb-2 mt-12"
      >
        <div
          className="absolute -left-[100%] -right-[100%] bottom-64 top-64 -z-30"
          data-scroll
          data-scroll-speed="1"
        >
          <div className="rotate-[4deg] w-full h-full bg-gradient-to-r from-blue-600 dark:from-blue-600 to-pink-600 dark:to-pink-600" />
        </div>
        <SVG
          className="absolute w-24 fill-transparent stroke-white/70 stroke-2 left-24 top-[50%] bottom-[50%] animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="hexa"
          data-scroll
          data-scroll-speed="2"
        />
        <SVG
          className="absolute w-24 fill-transparent stroke-white/70 stroke-4 right-24 top-[40%] bottom-[50%] animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="triangle"
          data-scroll
          data-scroll-speed="10"
        />
        <div
          className="flex flex-col gap-4 px-6 w-full sm:px-0 mt-16 md:mt-0 sm:w-9/12"
          data-scroll
          data-scroll-speed="6"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-0 sm:mb-8">
            🛠️ Personal Projects
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
      </div>
      <div
        className="flex flex-col items-center justify-center max-w-[1688px] w-full sm:mb-0 mb-24"
      >
        <SVG
          className="absolute -z-10 w-24 fill-pink-600/40 left-12 bottom-24 animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="circle"
          data-scroll
          data-scroll-speed="4"
        />

        <SVG
          className="absolute -z-10 w-24 fill-blue-600/40 right-12 bottom-64 animate-[landingBounce_4s_ease-in-out_infinite]"
          icon="triangle"
          data-scroll
          data-scroll-speed="2"
        />
      </div>

      <SVG
        className="absolute w-24 fill-transparent stroke-white/70 stroke-2 right-24 bottom-[24%] animate-[landingBounce_4s_ease-in-out_infinite]"
        icon="hexa"
        data-scroll
        data-scroll-speed="1"
      />
      <div className="flex flex-col items-center justify-center max-w-[1688px] w-full sm:mb-48 mb-8 mt-24">
        <div className="flex flex-col px-6 w-full font-extralight sm:px-0 sm:w-9/12">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">✍️ My Medium Stories</h1>
          <div className="grid w-full grid-cols-1">
            {constants.landing.mediumStories.map(story => <Link href={story.link} passHref key={story.id}>
              <a target="_blank" rel="noreferrer noopener" className="flex flex-col sm:flex-row items-center gap-6 dark:hover:bg-white/10 hover:bg-neutral-300/60 transition-all ease-in-out rounded-lg p-2">
                <img src={"./images/" + story.id + ".png"} className="object-contain w-full sm:w-[200px] rounded-md" />
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-lg sm:text-2xl font-medium">{story.title}</h2>
                  <div className="flex items-start gap-2">
                    <div className="flex flex-row items-center gap-2 text-black font-medium dark:text-white backdrop-blur-md bg-neutral-300/80 dark:bg-neutral-800 p-1 px-3 rounded-lg" >
                      <span>{story.lang}</span>
                    </div>
                  </div>
                </div>
              </a></Link>)}
          </div>
        </div>
      </div>

      {constants.landing.sections.map(section => <div
        key={"section" + section.id}
        className="flex flex-col items-center justify-center max-w-[1688px] w-full sm:mb-48 mb-8 mt-24"
      >
        <div className="flex flex-col px-6 w-full font-extralight sm:px-0 sm:w-9/12"
          data-scroll
          data-scroll-speed="1"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">{section.sectionTitle}</h1>
          <span className="text-lg md:text-2xl" dangerouslySetInnerHTML={{ __html: section.sectionContent }} />
        </div>
      </div>)}

      <span className="mt-16 mb-8">erenk.dev website is <a href="https://github.com/erenkulaksiz/erenk.dev" rel="noreferrer" className='text-blue-600 font-bold' target='_blank'>open source.</a></span>
    </main>
  )
}

export default Landing;