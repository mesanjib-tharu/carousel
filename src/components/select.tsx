import { useEffect, useState, useRef } from "react";



const Select = ({ handleSelect,selected,refs})=>{

  const limitButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {

      console.log("ev",event.key)
     if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          limitButtonRef.current.focus();
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
        className={ ` border px-4 py-1 border-gray-300 rounded-md text-gray-700 focus:outline-none focus:none focus:none cursor-pointer ` }
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



