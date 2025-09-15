// Sidebar.tsx
import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { menuConfig } from '../../config/menuConfig';
import type { NavigationItem } from '../../types/navigation.types';

interface SidebarProps {
    role: 'ADMIN' | 'WARGA' | 'PENGURUS';
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, isOpen, onClose }) => {
    const [openMenus, setOpenMenus] = useState<string[]>([]);

    // Fungsi untuk membuka/menutup menu accordion
    const toggleMenu = (label: string) => {
        setOpenMenus(prev =>
            prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
        );
    };

    // Fungsi untuk me-render setiap item menu
    const renderItem = (item: NavigationItem) => {
        const Icon = item.icon || LucideIcons.Home;

        // Render item dengan submenu (accordion)
        if (item.children) {
            const isMenuOpen = openMenus.includes(item.label);
            return (
                <li key={item.label}>
                    <button
                        onClick={() => toggleMenu(item.label)}
                        className="flex w-full items-center rounded-lg p-3 text-base font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="relative">
                            <Icon className="h-6 w-6" />
                            {item.notification && (
                                <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    {item.notification}
                                </span>
                            )}
                        </div>
                        <span className="ml-3 flex-1 text-left">{item.label}</span>
                        <LucideIcons.ChevronDown
                            className={`h-5 w-5 shrink-0 transform transition-transform duration-200 ${
                                isMenuOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </button>
                    
                    {/* Submenu dengan smooth animation */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-white/20 pl-4">
                            {item.children.map(child => {
                                const ChildIcon = child.icon || LucideIcons.Home;
                                return (
                                    <li key={child.label}>
                                        <NavLink
                                            to={child.path!}
                                            className={({ isActive }) =>
                                                `flex items-center rounded-md p-2 text-sm text-white/60 hover:bg-white/10 hover:text-white transition-colors ${
                                                    isActive ? 'bg-white/10 text-white' : ''
                                                }`
                                            }
                                        >
                                            <ChildIcon className="h-4 w-4 mr-2" />
                                            {child.label}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </li>
            );
        }

        // Render item tanpa submenu
        return (
            <li key={item.label}>
                <NavLink
                    to={item.path!}
                    className={({ isActive }) =>
                        `flex items-center rounded-lg p-3 text-base font-semibold text-white hover:bg-white/10 transition-colors ${
                            isActive ? 'bg-white/20 pulse-glow' : ''
                        }`
                    }
                >
                    <Icon className="h-6 w-6" />
                    <span className="ml-3">{item.label}</span>
                </NavLink>
            </li>
        );
    };

    return (
        <aside
            className={`fixed inset-y-0 left-0 z-30 flex w-72 flex-col border-r glass-effect transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 lg:static`}
        >
            <div className="flex h-20 items-center justify-between border-b border-white/20 px-6 flex-shrink-0">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <LucideIcons.Home className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-bold text-lg">SIPANDHA</span>
                </div>
                <button
                    onClick={onClose}
                    className="rounded-md p-2 hover:bg-white/20 text-white lg:hidden transition-colors"
                    aria-label="Tutup menu"
                >
                    <LucideIcons.X className="w-6 h-6" />
                </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                    <p className="px-4 pt-2 pb-3 text-xs font-semibold uppercase text-white/60">
                        Menu Utama
                    </p>
                    {menuConfig[role]?.map(renderItem)}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;