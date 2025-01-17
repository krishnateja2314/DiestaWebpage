/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from 'react';

export default function PDFViewer() {
  const [scale, setScale] = useState(1);
  
  return (
    <div className="flex flex-col h-screen pt-12 bg-gray-100">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200">
        <div className="flex items-center space-x-4">
          {/* <button 
            onClick={() => setScale(prev => prev + 0.1)}
            className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Zoom In
          </button>
          <button 
            onClick={() => setScale(prev => prev - 0.1)}
            className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Zoom Out
          </button> */}
          <span className="text-sm">{Math.round(scale * 100)}%</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <iframe
          src="/rulebook.pdf"
          className="w-full h-full border-0"
          style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
        />
      </div>
    </div>
  );
}