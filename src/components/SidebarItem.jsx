import React from "react";

function SidebarItem({ icon, label, isOpen }) {
  return (
    <div className="flex items-center gap-3 px-2 py-2 hover:bg-white/10 rounded-lg cursor-pointer transition-all">
      {icon}

      {/* Show text only when open */}
      {isOpen && <span>{label}</span>}
    </div>
  );
}

export default SidebarItem;
