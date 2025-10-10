
import DownArrow from "../Icons/DownArrow"

const SelectDropdown = ({ options, value, onChange, placeholder }) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        className="w-full border border-gray-200 outline-none placeholder:text-[#A5A5A5]
                   font-poppins px-4 py-2 sm:py-3 rounded-full appearance-none text-sm sm:text-base"
      >
        <option value="">{placeholder}</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Custom arrow */}
      <DownArrow className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
    </div>
  );
};

export default SelectDropdown;
