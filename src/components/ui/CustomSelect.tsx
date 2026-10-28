import React, { useState, useRef, useEffect, useId } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface CustomSelectOption {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | CustomSelectOption)[];
  placeholder?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
  className = '',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const generatedId = useId();
  const selectId = id || generatedId;

  // Normalize options to { value, label }
  const normalizedOptions: CustomSelectOption[] = options.map((opt) =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightedIndex(
          selectedOption
            ? normalizedOptions.findIndex((opt) => opt.value === value)
            : 0
        );
      } else {
        setHighlightedIndex((prev) =>
          prev < normalizedOptions.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setHighlightedIndex(
          selectedOption
            ? normalizedOptions.findIndex((opt) => opt.value === value)
            : normalizedOptions.length - 1
        );
      } else {
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : normalizedOptions.length - 1
        );
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isOpen && highlightedIndex >= 0 && highlightedIndex < normalizedOptions.length) {
        handleSelect(normalizedOptions[highlightedIndex].value);
      } else {
        setIsOpen((prev) => !prev);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'Tab') {
      setIsOpen(false);
    }
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listboxRef.current) {
      const items = listboxRef.current.querySelectorAll('li');
      const item = items[highlightedIndex];
      if (item) {
        item.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${isOpen ? 'z-30' : 'z-0'} ${className}`}
      onKeyDown={handleKeyDown}
    >
      {/* Hidden native select for HTML5 form validation */}
      <select
        ref={selectRef}
        aria-hidden="true"
        tabIndex={-1}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onInvalid={() => {
          setIsOpen(true);
        }}
        className="sr-only absolute inset-0 opacity-0 pointer-events-none w-full h-full"
      >
        <option value="" disabled />
        {normalizedOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Dropdown trigger button */}
      <button
        ref={triggerRef}
        id={selectId}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full bg-[#F9F9F9] hover:bg-[#F3F4F6] rounded-[8px] px-3.5 py-3 text-[14px] flex items-center justify-between text-left transition-all border border-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-black/10 select-none ${
          isOpen
            ? 'bg-[#F3F4F6] ring-2 ring-black/10 border-black/5 shadow-sm'
            : ''
        } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        <span
          className={`truncate ${
            selectedOption ? 'text-[#0F172A] font-medium' : 'text-neutral-400'
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <ChevronDown
          className={`w-4 h-4 text-neutral-400 shrink-0 ml-2 transition-transform duration-200 ease-out ${
            isOpen ? 'rotate-180 text-[#0F172A]' : ''
          }`}
        />
      </button>

      {/* Floating menu popup */}
      {isOpen && (
        <ul
          ref={listboxRef}
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-60 overflow-y-auto bg-white rounded-[10px] p-1.5 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.14),0_4px_12px_rgba(0,0,0,0.06)] border border-neutral-200/90 list-none m-0 focus:outline-none custom-table-scrollbar"
        >
          {normalizedOptions.map((opt, index) => {
            const isSelected = opt.value === value;
            const isHighlighted = highlightedIndex === index;

            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`px-3 py-2.5 rounded-[6px] text-[13.5px] cursor-pointer flex items-center justify-between transition-colors select-none ${
                  isSelected
                    ? 'bg-neutral-100 text-[#0F172A] font-semibold'
                    : isHighlighted
                    ? 'bg-neutral-50 text-[#0F172A]'
                    : 'text-[#334155] font-normal hover:bg-neutral-50 hover:text-[#0F172A]'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#0F172A] shrink-0 ml-2 stroke-[2.2]" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
