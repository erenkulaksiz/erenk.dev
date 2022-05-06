import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const isServer = typeof window === "undefined";

const Writer = ({ strings }) => {
    const [isSSR, setSSR] = useState(true);

    useEffect(() => {
        setSSR(false);
    }, []);

    return (<span className="text-lg sm:text-3xl mt-4">
        {isSSR ? <div>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 font-extrabold'>I love </span>
            <span> React since 2020</span>
        </div> : <Typewriter
            options={{
                strings,
                pauseFor: 2000,
                autoStart: true,
                loop: true,
                delay: 80,
                skipAddStyles: true,
                cursorClassName: "_cursor",
                wrapperClassName: "_wrapper"
            }}
        />}
    </span>)
}

export default Writer;