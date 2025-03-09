import React, { useRef, useEffect } from "react";

interface SelectProps {
  handleSelect: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  selected: number;
}

const Select: React.FC<SelectProps> = ({ handleSelect, selected }) => {
  const limitButtonRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        if (limitButtonRef.current) {
          limitButtonRef.current.focus(); // Ensure limitButtonRef.current is not null
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <select
      ref={limitButtonRef}
      className={` border px-4 py-1 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:none focus:none cursor-pointer `}
      onChange={handleSelect}
      value={selected}
    >
      <option value="" disabled className="text-gray-400">
        Limit
      </option>
      <option value="4">4</option>
      <option value="8">8</option>
      <option value="12">12</option>
    </select>
  );
};

export default Select;