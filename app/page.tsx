
import Image from 'next/image'

import ArrowIcon from '@components/icons/ArrowIcon'

import PostCard from '@components/PostCard'
import About from '@components/About'
import Article from '@components/Article'
import Services from '@components/Services'
import Footer from '@components/Footer'



import { motion } from 'framer-motion'
import { Suspense } from 'react'

export default async function Page() {
	return (
		<section>
			<div id="home" className=" bg-hero bg-cover bg-center   ">
				<div className=" row d-flex place-items-center pt-32">
					<div class=" mx-24 grid h-full   md:grid-cols-3 sm:grid-cols-1 sm:grid-rows-[min-content,1fr]">
						{/* <div class='order-first m-2  sm:order-none sm:col-span-2'>
						
					</div> */}

						<div class=" pt-16 mr-6 sm:col-span-2 ">
							<div>
								<h2 className="pb-3   text-gray-100 ">
									Always Adapting
								</h2>

								<br />
								<p className="text-btext max-w-md">
									Big Bison exists to solve complex problems. We
									believe some of the most difficult problems in an
									individual's life occur when they become prominent or
									successful. Journey management, travel safety
									consulting, and secure transportation planning are
									major stressors for the discerning and high profile
									travelers, no matter their destination.
								</p>
								<br />
							</div>
						</div>
						<div class="text-center  sm:row-span-2 m-2 mt-16">
							<div className="">
								<Image
									class=" "
									src="/../public/assets/whiteGold_bison.png"
									alt="/"
									width="450"
									height="400"
									quality={100}
								/>
							</div>
							<div className=" pt-6 pl-4 text-center ">
								<button className="w-[100%] h-[55px] ">
									{' '}
									Request Risk Assessment{' '}
								</button>
							</div>
						</div>
					</div>
				</div>
				<Image
					class=" pt-0 invisible sm:visible "
					src="/../public/assets/home-bottom-shape.png"
					alt="/"
					layout="responsive"
					width="100"
					height="20"
					quality={100}
				/>
			</div>

			<div className="flex gap-6 flex-wrap justify-center md:flex-row"></div>

			<div className="border-solid border-slate-600 border mt-4 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full"></div>
			<div className="prose prose-neutral mt-12 dark:prose-invert mx-auto">
				<p className=" text-xl prose prose-neutral dark:prose-invert text-center max-w-3xl mx-auto">
					I'm a Software Developer, I enjoy solving problems and building
					new and interesting things. I currently work with mainly web
					sites and desktop and mobile applications. Clicking any of the
					links above will take you to a vercel live demo of my featured
					projects. Digital Craftsmen LLC Is my side project, where I build
					and maintain websites and applications for personal projects.
				</p>
			</div>
			{/*<div className="prose prose-neutral dark:prose-invert">
				<h3>Here are my links</h3>
			</div>
			 <div className="my-8 mx-auto flex flex-col space-y-4 w-1/2">
				<Suspense>
					<CardLink
						name="LinkedIn"
						href="https://www.linkedin.com/in/wmvernon"
					/>
					<CardLink name="GitHub" href="https://github.com/willvernon" />
					<CardLink
						name="My Person SoloDev: Digital Craftsmen LLC"
						href="https://www.digitalcraftsmen.dev"
					/>
				</Suspense>
			</div> */}

			{/* <div className="prose prose-neutral dark:prose-invert border-solid border-blue-500 border">
				<p>Footer Text Here</p>
			</div> */}
			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300 justify-center">
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.linkedin.com/in/wmvernon"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">LinkedIn Profile</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/willvernon"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">GitHub</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.digitalcraftsmen.dev"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">Digital Craftsmen LLC</p>
					</a>
				</li>
			</ul>
			<About />
			<Article />
			<Services />
			<Footer />
		</section>
	)
}
