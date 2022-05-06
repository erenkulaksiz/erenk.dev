import { useRef, useEffect } from 'react';
// Next
import Head from 'next/head';
import Link from 'next/link';

import { Writer, Contact } from '../components';

import { constants } from '../constants';
import Project from '../components/project';
import { ArrowUpRightIcon, ChevronLeftIcon } from '../icons';


const Landing = (props) => {
  const containerRef = useRef();

  useEffect(() => {
    let scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
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
    <div
      ref={containerRef}
      className="flex flex-col items-center"
      data-scroll-container
    >
      <Head>
        <title>erenkulaksiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex flex-col items-center justify-center h-screen max-w-[1688px] w-full"
        data-scroll-speed=".6"
        data-scroll
        id="main"
      >
        <div className="flex flex-col px-6 w-full sm:px-0 sm:w-9/12">
          <h1 className="font-extrabold text-4xl sm:text-6xl">
            {constants.landing.title}
          </h1>
          <h2 className="text-md sm:text-3xl mt-4 text-neutral-700">
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
        <div className="flex flex-col sm:flex-row mt-6 sm:mt-12 px-6 w-full sm:px-0 sm:w-9/12 gap-8 sm:gap-6 text-sm sm:text-xl flex-wrap">
          {constants.landing.contactList.map((contact, index) =>
            <Contact
              contact={contact}
              key={index}
            />
          )}
        </div>
        <div
          className="cursor-pointer flex flex-col absolute left-0 right-0 bottom-4 items-center animate-pulse"
          data-scroll
          data-scroll-speed="6"
          data-scroll-target="#main"
        >
          <ChevronLeftIcon width={20} height={20} fill="currentColor" className="rotate-90" />
          <span className="text-sm">Scroll to view more</span>
        </div>
      </main>
      <div
        className="flex flex-col items-center max-w-[1688px] w-full relative pb-32 mt-12"
      >
        <div
          className="flex flex-col gap-4 px-6 w-full sm:px-0 sm:w-9/12"
          data-scroll
          data-scroll-speed="6"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-0 sm:mb-8">Personal Projects</h1>
          {constants.landing.projects.map((project, index) =>
            <Project
              project={project}
              key={index}
            />
          )}
          <Link href={constants.landing.githubURL} passHref>
            <a target="_blank" className="bg-neutral-200/50 group hover:-translate-y-1 overflow-hidden transition-all ease-in-out z-50 w-full px-8 py-8 rounded-xl relative">
              <h2 className="uppercase text-2xl">More to come</h2>
              <div className="mt-2">
                These are just my small projects yet. Bigger ones are on their way! Also theres little projects i am working on GitHub which you can visit them by clicking this card.
              </div>
              <div className="absolute right-6 top-6">
                <ArrowUpRightIcon width={16} height={16} className="fill-neutral-700" />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center max-w-[1688px] w-full sm:mb-48 mb-8"
      >
        <div className="flex flex-col px-6 w-full sm:px-0 sm:w-9/12"
          data-scroll
          data-scroll-speed=".6"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8">About Me</h1>
          <div className="flex flex-col gap-8 justify-center text-lg md:text-2xl">
            <p>
              {`I'm a software developer working as`} <b>Frontend Developer</b> <Link href="https://teknasyon.com" passHref>
                <a className="text-blue-600 font-bold" target="_blank">
                  @teknasyon
                </a>
              </Link> and currently located in <b>Istanbul, Turkey.</b>
            </p>
            <p>
              {`I'm a 19 year old Computer Programming student in Istanbul Arel University.`}
            </p>
            <p>
              {`I've always loved visual stuff. I started off with doing motion graphics for various customers (you can checkout from my Behance)
              And i was interested into programming, which i was building Windows Forms via VisualBasic .Net.
              After sometime later, i started migrating together and i discovered JavaScript nearly 2 years ago.`}
            </p>
            <p>
              {`I had a big range from: Developing small games with Unity and Unreal Engine to Robotics with RPi3 (Python) and Arduino. I even made robot for ODTU Robotic Days which never went into competition since Corona Virus came up.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;