"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import logo from './img/logo.webp';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const lastScrollY = useRef(0);
	const isMobileMenuOpenRef = useRef(false);

	// Keep ref in sync with state so the scroll handler never becomes stale
	useEffect(() => {
		isMobileMenuOpenRef.current = isMobileMenuOpen;
	}, [isMobileMenuOpen]);

	const handleScroll = useCallback(() => {
		const currentScrollY = window.scrollY;
		setIsScrolled(currentScrollY > 20);
		if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !isMobileMenuOpenRef.current) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
		lastScrollY.current = currentScrollY;
	}, []); // stable — no deps change

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

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
			className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md`}
			style={{
				transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
				transition: 'transform 0.25s ease',
				willChange: 'transform',
			}}
		>
			<nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo + Brand */}
					<div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
						<img
							src={logo.src}
							alt="FiveStarCarpetCleaning Logo"
							className="h-10 w-auto object-contain"
						/>
						<span className="text-xl font-bold text-gray-900 hidden sm:block whitespace-nowrap">
							FiveStarCarpetCleaning
						</span>
					</div>

					{/* Desktop Nav Links */}
					<div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
						{menuItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className="text-gray-700 hover:text-blue-600 font-semibold text-sm tracking-wide transition-colors duration-200"
							>
								{item.label}
							</button>
						))}
					</div>

					{/* Right: CTA + Hamburger */}
					<div className="flex items-center gap-4 flex-shrink-0">
						{/* CTA */}
						<button
							onClick={openWhatsApp}
							className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-sm tracking-wide hover:bg-blue-700 transition-colors duration-200 shadow-sm"
						>
							<span className="hidden sm:inline">Book Free Consultation</span>
							<span className="sm:hidden">Book Now</span>
						</button>

						{/* Mobile hamburger — touch-optimized */}
						<button
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
							className="lg:hidden flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-md hover:bg-gray-100"
							aria-label="Toggle menu"
							style={{
								WebkitTapHighlightColor: 'transparent',
								touchAction: 'manipulation',
								cursor: 'pointer',
							}}
						>
							<svg
								className="w-6 h-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								style={{ transition: 'transform 0.2s ease' }}
							>
								{isMobileMenuOpen ? (
									<path d="M6 18L18 6M6 6l12 12" />
								) : (
									<path d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Dropdown Menu — smooth slide */}
				<div
					className="lg:hidden overflow-hidden"
					style={{
						maxHeight: isMobileMenuOpen ? '420px' : '0px',
						transition: 'max-height 0.25s ease',
						willChange: 'max-height',
					}}
				>
					<div className="border-t border-gray-100 pt-2 pb-4 space-y-1">
						{menuItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className="block w-full text-left font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded-md transition-colors"
								style={{
									WebkitTapHighlightColor: 'transparent',
									touchAction: 'manipulation',
								}}
							>
								{item.label}
							</button>
						))}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
