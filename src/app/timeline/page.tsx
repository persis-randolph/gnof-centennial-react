export default function Timeline() {
	const timelineEvents = [
		{
			year: "1924",
			title: "Foundation Established",
			description:
				"The Greater New Orleans Foundation was founded to serve the community through strategic philanthropy.",
		},
		{
			year: "1950s",
			title: "Post-War Growth",
			description:
				"Expanded programs to support community rebuilding and economic development in the post-war era.",
		},
		{
			year: "1980s",
			title: "Educational Initiatives",
			description:
				"Launched major educational programs to support local schools and student scholarships.",
		},
		{
			year: "2005",
			title: "Hurricane Katrina Response",
			description:
				"Led critical disaster relief and recovery efforts, mobilizing resources for community rebuilding.",
		},
		{
			year: "2024",
			title: "Centennial Celebration",
			description:
				"Celebrating 100 years of service to the Greater New Orleans community with continued commitment to the future.",
		},
	];

	return (
		<main className="flex-1 container mx-auto px-4 py-8">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-800 mb-6">
					100 Years of Impact
				</h1>
				<p className="text-xl text-gray-600 max-w-3xl mx-auto">
					Journey through a century of community service, innovation, and
					unwavering commitment to the Greater New Orleans region.
				</p>
			</div>

			<div className="relative">
				{/* Timeline line */}
				<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#00A9E0]" />

				{/* Timeline events */}
				<div className="space-y-12">
					{timelineEvents.map((event, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={index} className="relative flex items-start">
							{/* Timeline dot */}
							<div className="absolute left-6 w-4 h-4 bg-[#00A9E0] rounded-full border-4 border-white shadow-lg" />

							{/* Event content */}
							<div className="ml-20 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
								<div className="flex items-center mb-3">
									<span className="text-2xl font-bold text-[#00A9E0] mr-4">
										{event.year}
									</span>
									<h3 className="text-xl font-semibold text-gray-800">
										{event.title}
									</h3>
								</div>
								<p className="text-gray-600 leading-relaxed">
									{event.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
