import Typewriter from 'typewriter-effect';

const Writer = ({ strings }) => {
    return (<span className="text-lg sm:text-3xl mt-4">
        <Typewriter
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
        />
    </span>)
}

export default Writer;