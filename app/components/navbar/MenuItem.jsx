"use client";

const MenuItem = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 rounded-sm
        py-2
        hover:bg-neutral-100 
        transition
        font-semibold cursor-pointer">
      {item}
    </div>
  );
};

export default MenuItem;
