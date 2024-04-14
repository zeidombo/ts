import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import { Footer } from "./components/footer";
import dynamic from 'next/dynamic';
import { WiredInStatus } from "./components/WiredInStatus";

const navigation = [
	{ name: "Projects", href: "/projects" },
];



export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<WiredInStatus status="ONLINE" startTime={new Date()} />
			<nav className="my-16">
				<ul className="flex flex-wrap items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
						<a
                        href="https://www.linkedin.com/in/jeraldy-cascayan-695112190/" // Update the path to your resume
                        className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    	>
                        	LinkedIn
                    	</a>

						<a
                        href="resume.pdf" // Update the path to your resume
                        className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    	>
                        	Resume
                    	</a>
				</ul>
			</nav>
			<Particles
				className="absolute inset-0 -z-10"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				jeraldy
			</h1>

			<div className="my-16 text-center">
				<h2 className="text-sm text-zinc-500 mx-6">
					Hi, my name is jeraldy (he/him), I'm an aspiring software engineer who loves to build reliable, scalable, and maintainable systems.
				</h2>

				<h2 className="text-sm text-zinc-500 mx-6">
				Student Coordinator + Teaching Assistant @
					{" "}
					<Link
						target="_blank"
						href="https://ai-4-all.org/"
						className="underline duration-500 hover:text-zinc-300"
					>
						AI4ALL
					</Link>

					<wbr />
				</h2>

				<h2 className="text-sm text-zinc-500 mx-6">
				Technical writer @
					{" "}
					<Link
						target="_blank"
						href="https://caslabs.ai"
						className="underline duration-500 hover:text-zinc-300"
					>
						caslabs.ai
					</Link>

					<wbr /> and {" "}
					<Link
						target="_blank"
						href="https://simulacrae.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						simulacrae.com
					</Link>{" "}
				</h2>




			<div className="flex justify-center mt-10">
					<Link href="/contact"
					className="px-6 py-3 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 shadow-lg backdrop-blur-md bg-opacity-20 backdrop-brightness-150 hover:shadow-xl">

        Contact Me
</Link>

			</div>
			</div>


			<Footer />
		</div>
	);
}
