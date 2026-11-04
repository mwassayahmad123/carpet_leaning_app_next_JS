"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from './img/logo.webp';
import { SERVICES, serviceHref } from '../data/services';
import { ServiceIcon } from './Icons';

const menuItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about/', label: 'About' },
	{ href: '/services/', label: 'Services', children: true },
	{ href: '/#reviews', label: 'Reviews' },
	{ href: '/#gallery', label: 'Gallery' },
	{ href: '/blog/', label: 'Blog' },
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
		`relative font-medium text-sm tracking-wide transition-colors duration-200 after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:bg-gold-400 after:transition-all ${
			isActive(href) ? 'text-navy-900 after:w-full' : 'text-navy-700 hover:text-navy-950 after:w-0 hover:after:w-full'
		}`;

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-white/95 backdrop-blur border-b border-navy-100 shadow-sm ${
				isVisible ? 'translate-y-0' : '-translate-y-full'
			}`}
		>
			<nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" aria-label="Main">
				<div className="flex items-center justify-between h-16">
					{/* Logo + Brand */}
					<Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
						<img src={logo.src} width={logo.width} height={logo.height} alt="Five Star Carpet Cleaning logo" className="h-10 w-auto object-contain" />
						<span className="font-display text-xl font-bold text-navy-900 hidden sm:block whitespace-nowrap">
							FiveStarCarpetCleaning
						</span>
					</Link>

					{/* Desktop Nav Links */}
					<div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
						{menuItems.map((item) =>
							item.children ? (
								<div key={item.href} className="relative group">
									<span className="flex items-center gap-1 cursor-default py-5" tabIndex={0}>
										<span className={linkClass(item.href)}>{item.label}</span>
										<svg className="w-4 h-4 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</span>
									<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity duration-150 absolute left-1/2 -translate-x-1/2 top-full w-80 bg-white rounded-2xl shadow-2xl border border-navy-100 p-2">
										{SERVICES.map((service) => (
											<Link
												key={service.slug}
												href={serviceHref(service.slug)}
												className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors hover:bg-cream ${
													isActive(serviceHref(service.slug)) ? 'text-navy-950 font-semibold bg-cream' : 'text-navy-700'
												}`}
											>
												<span className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy-900 text-gold-300" aria-hidden="true">
													<ServiceIcon slug={service.slug} className="w-5 h-5" />
												</span>
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
							className="bg-gold-400 text-navy-950 px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide hover:bg-gold-300 transition-colors duration-200 shadow-sm"
						>
							<span className="hidden sm:inline">Book Free Consultation</span>
							<span className="sm:hidden">Book Now</span>
						</Link>

						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 p-2 rounded-md hover:bg-cream transition-colors"
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
				<div className={`lg:hidden border-t border-navy-100 max-h-[calc(100vh-4rem)] overflow-y-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
					<div className="pt-2 pb-4 space-y-1">
						{menuItems.map((item) =>
							item.children ? (
								<div key={item.href}>
									<button
										onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
										className="flex w-full items-center justify-between font-medium text-navy-800 hover:bg-cream py-3 px-3 rounded-lg"
										aria-expanded={isMobileServicesOpen}
									>
										{item.label}
										<svg className={`w-4 h-4 text-gold-600 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
													className="flex items-center gap-3 text-navy-700 hover:bg-cream py-2.5 px-3 rounded-lg"
												>
													<ServiceIcon slug={service.slug} className="w-5 h-5 text-gold-600" />
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
									className={`block w-full font-medium py-3 px-3 rounded-lg transition-colors hover:bg-cream ${
										isActive(item.href) ? 'text-navy-950 bg-cream border-l-2 border-gold-400' : 'text-navy-800'
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
