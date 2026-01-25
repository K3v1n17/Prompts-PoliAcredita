import React from 'react';

export const Navbar: React.FC<{
    currentSection: string;
    onSectionChange: (section: string) => void;
}> = ({ currentSection, onSectionChange }) => {
    const sections = [
        { id: 'home', label: 'Inicio' },
        { id: 'producto', label: 'Producto' },
        { id: 'release', label: 'Release' },
        { id: 'sprints', label: 'Sprints' },
        { id: 'definiciones', label: 'DOR/DOD' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-14">
                    <div className="text-gray-900 font-bold text-lg">
                        PoliAcredita
                    </div>
                    <div className="flex gap-8">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => onSectionChange(section.id)}
                                className={`text-sm font-medium transition-colors ${currentSection === section.id
                                        ? 'text-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
