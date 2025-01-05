import { useState } from "react";

export default function Chip({ props }) {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex items-center bg-gray-800 text-white py-1 px-3 rounded-full text-sm">
        <span>{props}</span>
      </div>
    </div>
  );
}
