import React from 'react';

interface CardProps {
    icono: string;
    titulo: string;
    descripcion: string;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ icono, titulo, descripcion, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-blue-500 ${onClick ? 'cursor-pointer hover:scale-105' : ''
                }`}
        >
            <div className="text-4xl mb-3">{icono}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
            <p className="text-gray-600 text-sm">{descripcion}</p>
        </div>
    );
};
