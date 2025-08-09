import Link from "next/link";

export default function Home() {
	return (
		<main className="flex-1 mx-auto">
			{/* pull-out figure section */}
			<section>
				<div className="flex flex-col sm:flex-row gap-4 items-center px-4 py-12 max-w-[1000px] mx-auto">
					<div>
						<h2>1,100+</h2>
						<p>Number of Funds</p>
					</div>
					<div className="">
						<h2>$23 Million</h2>
						<p>
							Largest Grantmaking Fund, for Affordable Housing & Community
							Development in New Orleans
						</p>
					</div>
					<div className="">
						<h2>$466+ Million</h2>
						<p>Total Assets</p>
					</div>
				</div>
			</section>
			<section className="bg-[#E2F6FF] w-screen">
				<div className="flex flex-col gap-6 items-center px-4 py-12 max-w-[1000px] mx-auto">
					<h2>OUR STORY</h2>
					<p className="mb-4">
						The Greater New Orleans Foundation is the philanthropic institution
						dedicated to driving positive impact through philanthropy,
						leadership, and action in the Greater New Orleans Region. Our roots
						extend back to the Community Chest of New Orleans established in
						1923. For 100 years, we've connected generous people to the causes
						that spark their passion. In addition to grantmaking, we convene
						people, resources, and ideas to create intelligent strategies and
						solutions to meet our region's greatest challenges. We are proud to
						serve as a vocal civic leader with our partners to ensure a vibrant,
						sustainable, and just region for all.
					</p>
					<Link href="/timeline">
						<button type="button">Learn more about our story.</button>
					</Link>
				</div>
			</section>
		</main>
	);
}
