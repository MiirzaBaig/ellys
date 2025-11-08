import { useState } from 'react';
import CheckboxIcon from './icons/CheckboxIcon';

/**
 * PageItem Component Props
 */
interface PageItemProps {
  label: string;              // Display text for the page item
  isChecked: boolean;         // Current checked state
  onChange: (checked: boolean) => void;  // Callback when checkbox state changes
}

/**
 * PageItem Component
 * 
 * Represents a single selectable page item with a checkbox.
 * Features:
 * - Clickable row that toggles checkbox state
 * - Hover and press state tracking for checkbox animations
 * - Smooth hover effect on the row background
 * 
 * The checkbox color changes based on hover/press states when checked:
 * - Default: #007AFF (vibrant blue)
 * - Hover/Press: #5087F8 (lighter blue)
 */
export default function PageItem({ label, isChecked, onChange }: PageItemProps) {
  // Track hover state for checkbox color animation
  const [isHovered, setIsHovered] = useState(false);
  
  // Track press state for checkbox color animation
  const [isPressed, setIsPressed] = useState(false);

  /**
   * Handles click on the page item row
   * Toggles the checkbox state
   */
  const handleClick = () => {
    onChange(!isChecked);
  };

  /**
   * Mouse event handlers for tracking hover and press states
   * These states are passed to CheckboxIcon to change its color
   */
  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  return (
    <div
      className="page-item"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span className="text-page">{label}</span>
      <div className="checkbox-wrapper">
        <CheckboxIcon 
          checked={isChecked} 
          hovered={isHovered && isChecked}
          pressed={isPressed && isChecked}
          width={25} 
          height={25} 
        />
      </div>
    </div>
  );
}