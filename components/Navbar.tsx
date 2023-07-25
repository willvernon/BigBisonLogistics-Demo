'use client'

import Image from 'next/image'
import Link from 'next/link'
import useScroll from '@/lib/hooks/use-scroll'
import bison from '@/public/assets/logo-stacked2.png'

import { Session } from 'next-auth'

export default function NavBar() {
	const scrolled = useScroll(50)

	return (
		<>
			<div
				className={`fixed top-0 w-full flex justify-center ${
					scrolled
						? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
						: 'bg-white/0'
				} z-30 transition-all`}
			>
				<div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
					<Link
						href="/"
						className="flex items-center font-display text-2xl"
					>
						<Image
							src={bison}
							alt="Precedent logo"
							width="200"
							height="100"
							className="mr-2 rounded-sm"
						></Image>
						{/* <p>Big Bison</p> */}
					</Link>
				</div>
			</div>
		</>
	)
}
