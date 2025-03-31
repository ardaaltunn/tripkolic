import React from 'react';
import Link from 'next/link';

interface NavItem {
    name: string;
    icon: React.ReactNode;
    href: string;
    active?: boolean;
}

interface BottomNavigationProps {
    items: NavItem[];
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items }) => {
    return (
        <div className="bg-white border-t flex justify-around items-center py-3 fixed bottom-0 left-0 right-0">
            {items.map((item) => (
                <Link key={item.name} href={item.href} className="flex flex-col items-center">
                    <div className={`${item.active ? 'text-primary' : 'text-gray-500'}`}>
                        {item.icon}
                    </div>
                    <span className={`text-xs ${item.active ? 'text-primary' : 'text-gray-500'}`}>
                        {item.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default BottomNavigation; 