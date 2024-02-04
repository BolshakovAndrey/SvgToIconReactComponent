import React from 'react';
import './styles/style.css';

// Предполагается, что стили могут быть импортированы в index.tsx или App.tsx по ситуации

type IconProps = {
    name: string;
    className?: string;
    size?: number; // size опционален и будет использоваться для установки размера иконки, если предоставлен
};

export default function Icon({ name, className = '', size }: IconProps) {
    // использование `icon-${name}` для соответствия структуре классов CSS
    return (
        <span
            className={`icon-${name} ${className}`}
            style={{ fontSize: size ? `${size}px` : 'inherit' }}
        />
    );
}

