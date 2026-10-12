"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from './img/logo.webp';
import { SERVICES, serviceHref } from '../data/services';

const menuItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about/', label: 'About' },
	{ href: '/services/', label: 'Services', children: true },
	{ href: '/#reviews', label: 'Reviews' },
	{ href: '/#gallery', label: 'Gallery' },
	{ href: '/contact/', label: 'Contact' },
];

const Navbar = () => {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
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

	// Close the mobile menu whenever the route changes.
	useEffect(() => {
		setIsMobileMenuOpen(false);
		setIsMobileServicesOpen(false);
	}, [pathname]);

	const isActive = (href) => {
		if (href.includes('#')) return false;
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	};

	const linkClass = (href) =>
		`font-semibold text-sm tracking-wide transition-colors duration-200 ${
			isActive(href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
		}`;

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-white shadow-md ${
				isVisible ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" aria-label="Main">
				<div className="flex items-center justify-between h-16">
					{/* Logo + Brand */}
					<Link href="/" className="flex items-center gap-2 flex-shrink-0">
						<img src={logo.src} width={logo.width} height={logo.height} alt="Five Star Carpet Cleaning logo" className="h-10 w-auto object-contain" />
						<span className="text-xl font-bold text-gray-900 hidden sm:block whitespace-nowrap">
							FiveStarCarpetCleaning
						</span>
					</Link>

					{/* Desktop Nav Links */}
					<div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
						{menuItems.map((item) =>
							item.children ? (
								<div key={item.href} className="relative group">
									<span className={`${linkClass(item.href)} flex items-center gap-1 cursor-default py-5`} tabIndex={0}>
										{item.label}
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</span>
									<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity duration-150 absolute left-1/2 -translate-x-1/2 top-full w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
										{SERVICES.map((service) => (
											<Link
												key={service.slug}
												href={serviceHref(service.slug)}
												className={`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-blue-50 ${
													isActive(serviceHref(service.slug)) ? 'text-blue-600 font-semibold' : 'text-gray-700'
												}`}
											>
												<span aria-hidden="true">{service.icon}</span>
												{service.name}
											</Link>
										))}
									</div>
								</div>
							) : (
								<Link key={item.href} href={item.href} className={linkClass(item.href)}>
									{item.label}
								</Link>
							)
						)}
					</div>

					{/* Right: CTA + Hamburger */}
					<div className="flex items-center gap-4 flex-shrink-0">
						<Link
							href="/contact/"
							className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-sm tracking-wide hover:bg-blue-700 transition-colors duration-200 shadow-sm"
						>
							<span className="hidden sm:inline">Book Free Consultation</span>
							<span className="sm:hidden">Book Now</span>
						</Link>

						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
							aria-label="Toggle menu"
							aria-expanded={isMobileMenuOpen}
						>
							<svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
								{isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Dropdown Menu */}
				<div className={`lg:hidden border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
					<div className="pt-2 pb-4 space-y-1">
						{menuItems.map((item) =>
							item.children ? (
								<div key={item.href}>
									<button
										onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
										className="flex w-full items-center justify-between font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 py-3 px-2 rounded-md"
										aria-expanded={isMobileServicesOpen}
									>
										{item.label}
										<svg className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</button>
									{isMobileServicesOpen && (
										<div className="pl-4 space-y-1">
											{SERVICES.map((service) => (
												<Link
													key={service.slug}
													href={serviceHref(service.slug)}
													onClick={() => setIsMobileMenuOpen(false)}
													className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 py-2.5 px-2 rounded-md"
												>
													<span aria-hidden="true">{service.icon}</span>
													{service.name}
												</Link>
											))}
										</div>
									)}
								</div>
							) : (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className={`block w-full font-medium py-3 px-2 rounded-md transition-colors hover:bg-gray-50 ${
										isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
									}`}
								>
									{item.label}
								</Link>
							)
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
