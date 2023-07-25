'use client'
import Image from 'next/image'

import Main from '@components/Main'
import About from '@components/About'
import { Article } from '@components/Article'
import Services from '@components/Services'
import { Footer } from '@components/Footer'

import { motion } from 'framer-motion'
import { Suspense } from 'react'

export default async function Page() {
	return (
		<div>
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
									width="450px"
									height="400px"
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
					width="100%"
					height="20%"
					quality={100}
				/>
			</div>
			<About />
			<Article />
			<Services />
			<Footer />
		</div>
	)
}
