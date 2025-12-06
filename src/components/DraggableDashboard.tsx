import React, { useEffect, useRef } from 'react';
import { createSwapy } from 'swapy';

interface DraggableDashboardProps {
  children: React.ReactNode;
  title?: string;
}

export const DraggableDashboard: React.FC<DraggableDashboardProps> = ({ children, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const swapyRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      swapyRef.current = createSwapy(containerRef.current, {
        animation: 'dynamic',
        swapMode: 'hover',
      });

      swapyRef.current.onSwap((event: any) => {
        console.log('Dashboard layout changed:', event.data);
        // You could save this to localStorage or send to backend
        localStorage.setItem('dashboardLayout', JSON.stringify(event.data.object));
      });
    }

    return () => {
      swapyRef.current?.destroy();
    };
  }, []);

  return (
    <div className="space-y-8">
      {title && (
        <div className="border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{title}</h1>
          <p className="text-gray-600 mt-3 text-lg">
            Drag and drop widgets to customize your dashboard layout
          </p>
        </div>
      )}
      
      <div ref={containerRef} className="swapy-container">
        {children}
      </div>
    </div>
  );
};

interface DraggableWidgetProps {
  slotId: string;
  children: React.ReactNode;
  className?: string;
}

export const DraggableWidget: React.FC<DraggableWidgetProps> = ({ slotId, children, className = '' }) => {
  return (
    <div data-swapy-slot={slotId} className={`draggable-slot ${className}`}>
      <div data-swapy-item={slotId} className="draggable-item group">
        <div className="relative">
          {/* Drag handle indicator */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <div className="bg-gray-800 text-white p-1.5 rounded-md shadow-lg cursor-move">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};