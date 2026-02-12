import React, { useState } from 'react';
import Navbar from '../components/navbar';
import TargetCursor from '../components/TargetCursor';
import Threads from '../components/Threads';
import TiltedCard from '../components/TiltedCard';

export default function Home() {
    // Set initial visible projects to 6
    const [visibleProjects, setVisibleProjects] = useState(6);

    const skills = ["SQL", "JavaScript", "Python", "Node.js", "HTML", "CSS", "PyTorch", "TensorFlow", "Postgres", "Raspberry Pi", "Arduino"];

    const projectLinks = [
        {
            title: "Space Invaders",
            desc: "A browser-based classic arcade shooter game built with JavaScript.",
            url: "https://lolfactor39.github.io/space-invaders",
            sourceCode: "//github.com/lolfactor39/space-invaders",
            img: "/space-invaders.png"
        },
        {
            title: "Faster R-CNN",
            desc: "A PyTorch project implementing Faster R-CNN for object detection.",
            sourceCode: "https://github.com/lolfactor39/pytorch-faster_rcnn",
            img: "/faster-rcnn.png",
        },
        {
            title: "YOLO Implementation",
            desc: "A PyTorch implementation of YOLO for real-time object detection.",
            sourceCode: "https://github.com/lolfactor39/pytorch-yolo",
            img: "/yolo.png"
        },
        {
            title: "Firebase Chat",
            desc: "Real-time messaging application with secure authentication and database.",
            sourceCode: "https://github.com/lolfactor39",
            url: "//lolfactor39.github.io/chat",
            img: "/chat.png"
        },
        {
            title: "Next Coolio",
            desc: "Next level HTML5 and Unity Web gaming. Made using React and Node JS",
            url: "https://nextcoolio.github.io",
            img: "/nextcoolio.png"
        }
    ];

    const handleLoadMore = () => {
        setVisibleProjects(prev => prev + 3);
    };

    return (
        <div id="home" className="relative min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 overflow-x-hidden font-['Fira_Code']">
            <TargetCursor spinDuration={1.8} hideDefaultCursor parallaxOn={false} hoverDuration={0.2} />
            <Navbar />

            <div className="fixed inset-0 z-0">
                <Threads amplitude={1} distance={0} enableMouseInteraction={true} color={[1, 0.4, 0]} />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto pt-48 pb-12 px-6">

                {/* About Section */}
                <section id="about" className="mb-24">
                    <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter mb-8 uppercase leading-[0.8]">
                        KRUPAL <br />
                        <span className="text-orange-500">TISGAONKAR</span>
                    </h1>
                    <p className="text-zinc-300 text-xl md:text-3xl max-w-4xl leading-relaxed font-light">
                        I am a 13-year-old fullstack dev in San Diego, California.
                    </p>
                    <div className="mt-12 flex flex-wrap gap-8 text-zinc-500 text-sm md:text-lg uppercase tracking-[0.4em]">
                        <span>// Soccer</span> <span>// Microbiology</span> <span>// Academics</span> <span>// Coding</span>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-32">
                    <div className="flex flex-wrap gap-4">
                        {skills.map(skill => (
                            <span key={skill} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm md:text-lg text-zinc-400">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Projects Grid */}
                <section id="projects" className="mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projectLinks.slice(0, visibleProjects).map((link) => (
                            <div key={link.title} className="flex flex-col group backdrop-blur-sm">
                                <div className="cursor-none mb-8 rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-2">
                                    <TiltedCard
                                        imageSrc={link.img}
                                        altText={link.title}
                                        containerHeight="200px"
                                        containerWidth="100%"
                                        imageHeight="200px"
                                        imageWidth="100%"
                                        scaleOnHover={1.05}
                                        rotateAmplitude={12}
                                        showTooltip={true}
                                    />
                                </div>
                                <div className="px-2 flex flex-col flex-grow">
                                    <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                                        {link.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm md:text-base mb-8 leading-relaxed italic">
                                        {link.desc}
                                    </p>
                                    {link.sourceCode ?
                                        <a
                                            href={link.sourceCode}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full cursor-target py-4 bg-white/5 border border-white/10 rounded-xl text-center text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-none"
                                        >
                                            Source Code ↗
                                        </a> : ""}
                                    {link.url ?
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full cursor-target mt-2 py-4 bg-white/5 border border-white/10 rounded-xl text-center text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-none"
                                        >
                                            Demo ↗
                                        </a> : ""}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button - Only shows if there are more than 6 projects */}
                    {visibleProjects < projectLinks.length && (
                        <div className="mt-20 flex justify-center">
                            <button
                                onClick={handleLoadMore}
                                className="group flex flex-col items-center gap-4 cursor-none"
                            >
                                <span className="text-zinc-500 text-sm uppercase tracking-[0.5em] group-hover:text-orange-500 transition-colors">Load More Projects</span>
                                <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent"></div>
                            </button>
                        </div>
                    )}
                </section>

                {/* Contact Section */}
                <section id="contact" className="mb-32 py-20 border-t border-white/10 w-full h-full">
                    <div className="w-[55%]">
                        <div className="p-12 bg-zinc-900/30 backdrop-blur-md border border-white/10 rounded-3xl flex flex-col justify-center">
                            <h3 className="text-sm text-orange-500 uppercase mb-6 tracking-widest">Contact</h3>
                            <a href="mailto:krupaldeveloper@gmail.com" target="_blank" className="text-2xl cursor-target md:text-2xl font-bold hover:text-orange-500 transition-colors cursor-none">
                                krupaldeveloper@gmail.com ↗
                            </a>
                            <a href="https://github.com/lolfactor39" target="_blank" className="text-2xl md:text-2xl cursor-target font-bold hover:text-orange-500 transition-colors cursor-none">
                                GitHub ↗
                            </a>
                            <span className="text-2xl md:text-2xl font-bold hover:text-orange-500 transition-colors cursor-target cursor-none">
                                Discord (lolfactor39)
                            </span>
                        </div>
                    </div>
                </section>

                <footer className="pt-12 pb-12 border-t border-white/5 flex justify-between text-xs uppercase tracking-widest text-white-600">
                    <p>© 2026 Krupal Tisgaonkar</p>
                    <p>Made with Vite + React</p>
                </footer>
            </main>
        </div>
    );
}