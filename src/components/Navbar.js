"use client";

import React, { useState, useEffect } from 'react';
import logo from './img/logo.webp';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsScrolled(currentScrollY > 20);
			if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobileMenuOpen) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
			setLastScrollY(currentScrollY);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY, isMobileMenuOpen]);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsMobileMenuOpen(false);
		}
	};

	const openWhatsApp = () => {
		const whatsappNumber = '447871062227';
		const message = encodeURIComponent('Hello! I would like to book a free consultation for carpet cleaning services.');
		window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
	};

	const menuItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'services', label: 'Services' },
		{ id: 'reviews', label: 'Reviews' },
		{ id: 'gallery', label: 'Gallery' },
		{ id: 'faq', label: 'FAQ' },
		{ id: 'contact', label: 'Contact' },
	];

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform px-3 sm:px-5 pointer-events-none ${
				isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
			} ${isScrolled ? 'pt-2' : 'pt-3'}`}
		>
			<nav
				className={`mx-auto max-w-screen-xl border border-white/25 pointer-events-auto ${
					isMobileMenuOpen ? 'rounded-2xl' : 'rounded-full'
				} ${
					isScrolled
						? 'bg-white/35 backdrop-blur-md shadow-md py-1.5'
						: 'bg-white/20 backdrop-blur-sm shadow-lg py-2'
				}`}
			>
				<div className="px-3 sm:px-5">
					{/* Main Row */}
					<div className="flex items-center justify-between gap-2">

						{/* Logo + Brand */}
						<div className="flex items-center gap-1.5 flex-shrink-0">
							<img
								src={logo.src}
								alt="FiveStarCarpetCleaning Logo"
								className="h-7 w-auto object-contain flex-shrink-0"
							/>
							<span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block whitespace-nowrap">
								FiveStarCarpetCleaning
							</span>
						</div>

						{/* Desktop Nav Links — centered */}
						<div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
							{menuItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className="text-gray-900 hover:text-blue-700 font-semibold text-xs xl:text-sm tracking-wide relative group whitespace-nowrap transition-colors duration-200"
								>
									{item.label}
									<span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200 rounded-full" />
								</button>
							))}
						</div>

						{/* Right: CTA + Hamburger */}
						<div className="flex items-center gap-2 flex-shrink-0">
							{/* CTA — always visible */}
							<button
								onClick={openWhatsApp}
								className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full font-bold text-xs sm:text-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
							>
								<span className="hidden sm:inline">Book Free Consultation</span>
								<span className="sm:hidden">Book Now</span>
							</button>

							{/* Mobile hamburger */}
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="lg:hidden text-gray-900 focus:outline-none p-1"
								aria-label="Toggle menu"
							>
								<svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
									{isMobileMenuOpen ? (
										<path d="M6 18L18 6M6 6l12 12" />
									) : (
										<path d="M4 6h16M4 12h16M4 18h16" />
									)}
								</svg>
							</button>
						</div>
					</div>

					{/* Mobile Dropdown Menu — instant, no animation */}
					<div className={`lg:hidden border-t border-white/20 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
						<div className="pt-2 pb-3 space-y-0.5">
							{menuItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className="block w-full text-left text-gray-900 hover:text-blue-700 font-semibold text-sm py-1.5 px-1 tracking-wide"
								>
									{item.label}
								</button>
							))}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
