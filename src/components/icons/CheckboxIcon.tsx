import type { SVGProps } from "react";

/**
 * CheckboxIcon Component Props
 * Extends SVGProps to allow all standard SVG attributes
 */
interface CheckboxIconProps extends SVGProps<SVGSVGElement> {
  checked?: boolean;   // Whether the checkbox is checked
  hovered?: boolean;   // Whether the checkbox is being hovered
  pressed?: boolean;   // Whether the checkbox is being pressed
}

/**
 * CheckboxIcon Component
 * 
 * Custom SVG checkbox icon matching Figma design specifications.
 * 
 * Design Details:
 * - Size: 25x25px (as per Figma)
 * - Border radius: 5px (squircle-like appearance)
 * - Colors:
 *   - Unchecked: White background with gray border (#cdcdcd)
 *   - Checked (default): Vibrant blue (#007AFF)
 *   - Checked (hover/press): Lighter blue (#5087F8)
 * - Checkmark: White V-shaped path with rounded ends
 * 
 * The checkbox color animates smoothly when hovered or pressed.
 */
export default function CheckboxIcon({ checked = false, hovered = false, pressed = false, ...props }: CheckboxIconProps) {
  /**
   * Determines the checkbox color based on current state
   * Returns the appropriate color for fill and stroke
   */
  const getCheckboxColor = () => {
    if (!checked) return "#ffffff";           // Unchecked: white background
    if (hovered || pressed) return "#5087F8";   // Hover/press: lighter blue
    return "#007AFF";                          // Default checked: vibrant blue
  };

  const checkboxColor = getCheckboxColor();

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 25 25" 
      fill="none"
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="24"
        height="24"
        rx="5"
        fill={checked ? checkboxColor : "#ffffff"}
        stroke={checked ? checkboxColor : "#cdcdcd"}
        strokeWidth="1"
        className="checkbox-rect"
      />
      {checked && (
        <path
          d="M5 13L10 17L20 7"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}