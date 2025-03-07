import React from 'react';
import Image from 'next/image';

/**
 * A reusable component to display a list of tech indicators.
 * Each indicator shows a small icon and the tech name.
 *
 * @param items - an array of objects containing { name, icon }
 */
interface TechIndicator {
  name: string;
  icon: string;
}

interface TechIndicatorsProps {
  items: TechIndicator[];
}

export default function TechIndicators({ items }: TechIndicatorsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center space-x-1 text-gray-600 border border-gray-300 px-2 py-1 rounded-xl"
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-xs font-medium">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
