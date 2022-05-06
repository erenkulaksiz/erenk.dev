import { useRef, useEffect } from 'react';
// Next
import Head from 'next/head';
import Link from 'next/link';

import { Writer, Contact } from '../components';

import { constants } from '../constants';
import Project from '../components/project';
import { ArrowUpRightIcon } from '../icons';

const Landing = (props) => {
  const containerRef = useRef();

  let scroll = null;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (scroll) return;

    scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: containerRef.current,
        smooth: true
      });
    });

    return () => {
      if (typeof scroll.destroy == "function") {
        scroll.destroy();
        console.log("removed scroll container!");
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center"
      data-scroll-container
    >
      <Head>
        <title>erenk.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex flex-col items-center justify-center h-screen max-w-[1688px] w-full"
        data-scroll-speed=".6"
        data-scroll
      >
        <div className="flex flex-col w-9/12">
          <h1 className="font-extrabold text-4xl sm:text-6xl">
            {constants.landing.title}
          </h1>
          <h2 className="text-lg sm:text-3xl mt-4 mb-4 text-neutral-700">
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
        <div className="flex flex-row mt-6 sm:mt-12 w-9/12 gap-4 text-md sm:text-xl flex-wrap">
          {constants.landing.contactList.map((contact, index) =>
            <Contact
              contact={contact}
              key={index}
            />
          )}
        </div>
      </main>
      <div
        className="flex flex-col items-center max-w-[1688px] w-full relative"
        data-scroll
        data-scroll-speed="6"
      >
        <div className="flex flex-col w-9/12 gap-4">
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
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
                These are just my biggest projects yet. Theres still little projects i am working on GitHub.
              </div>
              <div className="absolute right-6 top-6">
                <ArrowUpRightIcon width={16} height={16} className="fill-neutral-700" />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div
        className="flex flex-col items-center max-w-[1688px] w-full pb-32"
        data-scroll
        data-scroll-speed="4"
      >
        <div className="flex flex-col w-9/12">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="flex flex-col gap-4 text-lg sm:text-2xl">
            <p>
              {`I'm a software developer working as`} <b>Frontend Developer</b> <Link href="https://teknasyon.com" passHref>
                <a className="text-blue-600 font-bold" target="_blank">
                  @teknasyon
                </a>
              </Link> and currently located in <b>Istanbul, Turkey.</b>
            </p>
            <p>
              {`I'm a 19 year old Computer Programming student in Istanbul Arel University. I wished that i could be an Computer Engineering student but i was too lazy to study.`}
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