# First Test Assignment

A pixel-perfect React component implementation of a page selector UI, replicated from Figma design specifications. This component provides an intuitive interface for selecting multiple pages with checkboxes and includes smooth animations and hover effects.

## 🎨 Features

- **Pixel-Perfect Design**: Faithfully recreated from Figma with exact dimensions, colors, and typography
- **Interactive Checkboxes**: Custom checkbox component with hover and press state animations
- **Smart Selection Logic**: "All pages" checkbox controls all individual pages, and vice versa
- **Smooth Animations**: Transitions for checkbox colors and button states
- **Fully Responsive**: Optimized for mobile (≤480px), tablet (481-768px), and desktop (769px+) devices
- **Touch-Friendly**: Mobile-optimized with proper touch targets (44px minimum) and tap highlight removal
- **Clean Code**: Well-organized, commented, and maintainable codebase

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── PageSelector.tsx      # Main container component
│   ├── PageItem.tsx          # Individual page item with checkbox
│   └── icons/
│       └── CheckboxIcon.tsx  # Custom checkbox SVG component
├── App.tsx                    # Root component
├── index.css                  # Global styles and component styles
└── main.tsx                  # Application entry point
```

## 🎯 Component Features

### PageSelector
- Manages state for "All pages" and individual page selections
- Handles checkbox synchronization logic
- Provides callback for selected pages

### PageItem
- Individual selectable page item
- Hover and press state tracking for checkbox animations
- Click handler for toggling selection

### CheckboxIcon
- Custom SVG checkbox with rounded corners (squircle design)
- Dynamic color changes based on state (default, hover, pressed)
- 25x25px dimensions matching Figma specifications

## 🎨 Design Specifications

### Colors
- **Text**: `#1F2128` (Dark gray/black)
- **Checkbox Default**: `#007AFF` (Vibrant blue)
- **Checkbox Hover/Press**: `#5087F8` (Lighter blue)
- **Button Default**: `#F5C542` (Golden yellow)
- **Button Hover**: `#FFD84D` (Lighter yellow)
- **Separator**: `#E5E5E5` (Light gray)

### Typography
- **Font Family**: Montserrat (Regular, 400)
- **Font Size**: 14px
- **Line Height**: 130%
- **Letter Spacing**: 0px

### Dimensions
- **Container**: 
  - Desktop: 400px width, 350px min-height
  - Tablet: 90% max-width
  - Mobile: 100% width, auto min-height
- **Checkbox**: 25x25px
- **Border Radius**: 8px (container), 4px (button), 5px (checkbox)
- **Touch Targets**: Minimum 44px height on mobile for better usability

## 🛠️ Technologies Used

- **React 19.2.0**: UI library
- **TypeScript 5.9.3**: Type safety
- **Vite 7.2.2**: Build tool and dev server
- **CSS3**: Styling with custom properties

## 📝 Key Implementation Details

1. **State Management**: Uses React hooks (useState) for component-level state
2. **Checkbox Logic**: "All pages" automatically checks/unchecks all individual pages
3. **Individual Selection**: Selecting all individual pages automatically checks "All pages"
4. **Hover Effects**: Checkbox color changes to lighter blue on hover/press
5. **Button Animation**: Smooth color transition from golden yellow to lighter yellow
6. **Responsive Breakpoints**:
   - Mobile: ≤480px (full width, optimized spacing)
   - Tablet: 481-768px (90% max-width)
   - Desktop: 769px+ (400px fixed width)
7. **Mobile Optimizations**: Touch-friendly targets, tap highlight removal, text selection prevention

## 🎯 Usage

```tsx
import PageSelector from './components/PageSelector';

function App() {
  return <PageSelector />;
}
```

The component handles all internal state management. Selected pages are logged to the console when the "Done" button is clicked. You can extend the `handleDone` function in `PageSelector.tsx` to add custom logic.

## 📄 License

ISC

## 👤 Author

Built as a test assignment implementation.

