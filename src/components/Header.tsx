"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="sticky top-0 z-50 w-full h-28 bg-[#00A9E0] shadow-md">
			<div className="max-w-[1000px] mx-auto px-4 h-full flex items-center justify-between">
				<Link href="/home">
					<Image
						src="/images/logos/GNOF_CentennialLogo_RGB_White.png"
						alt="GNOF Centennial"
						width={220}
						height={60}
					/>
				</Link>
				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-6">
					<Link
						href="/home"
						className={`text-white uppercase text-xl hover:text-gray-200 ${
							pathname === "/home" ? "font-semibold underline" : ""
						}`}
					>
						Home
					</Link>
					<Link
						href="/timeline"
						className={`text-white uppercase text-xl hover:text-gray-200 ${
							pathname === "/timeline" ? "font-semibold underline" : ""
						}`}
					>
						Timeline
					</Link>
				</nav>

				{/* Mobile Hamburger Button */}
				<button
					type="button"
					onClick={toggleMobileMenu}
					className="md:hidden w-8 h-8 flex items-center justify-center"
					aria-label="Toggle mobile menu"
				>
					<Image
						src="/images/icons/Icons_Hamburger_Light.svg"
						alt="Menu"
						width={24}
						height={24}
					/>
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-[#1d428a] border-t border-white/20">
					<div className="max-w-[1000px] mx-auto px-4 py-4 space-y-4">
						<Link
							href="/home"
							className={`block text-white uppercase text-xl hover:text-gray-200 ${
								pathname === "/home" ? "font-semibold underline" : ""
							}`}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/timeline"
							className={`block text-white uppercase text-xl hover:text-gray-200 ${
								pathname === "/timeline" ? "font-semibold underline" : ""
							}`}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Timeline
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
