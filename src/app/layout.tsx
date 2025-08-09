import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "GNOF Centennial (React)",
	description: "Celebrating 100 years of the Greater New Orleans Foundation.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				{/* Adobe Fonts (Typekit) */}
				<link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
				<link rel="stylesheet" href="https://use.typekit.net/lap8jer.css" />
			</head>
			<body className="antialiased">{children}</body>
		</html>
	);
}
