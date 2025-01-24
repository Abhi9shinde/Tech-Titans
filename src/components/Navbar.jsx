import React, { useEffect, useState } from 'react';
import logo from '/logo.avif';

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => setIsMenuVisible((prev) => !prev);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const links = [
        { href: '/', label: 'Home' },
        // { href: '#impact-stats', label: 'Impact' },
        { href: '/risks', label: 'Risks' },
        { href: '/phase', label: 'Phases' },
        { href: '#health-awareness', label: 'Health' },
        { href: '#sustainable-alternatives', label: 'Solutions' },
        { href: '/community', label: 'Community' },
        { href: '/dashboard', label: 'Get Involved', special: true },
    ];

    return (
        <nav className="fixed w-full z-50 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex gap-2 items-center">
                            <a href="/">
                                <div className="flex-shrink-0 flex gap-2 items-center">
                                    <img src={logo} alt="EcoCup logo" className="w-8 h-8 rounded-full" />
                                    <span className="text-xl font-bold">EcoCup</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-md text-md font-medium transition-all ${link.special ? 'bg-green-600 hover:bg-green-700 px-4' : 'hover:bg-neutral-700 '
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-neutral-700 focus:outline-none"
                            aria-expanded={isMenuVisible}
                            aria-label="Main menu"
                        >
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`bg-neutral-900 px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isMenuVisible ? 'block' : 'hidden'
                    }`}
            >
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium transition-all ${link.special ? 'bg-green-600 hover:bg-green-700 mt-4' : ''
                            }`}
                        onClick={() => setIsMenuVisible(false)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
