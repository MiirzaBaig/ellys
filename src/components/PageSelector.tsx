import { useState } from 'react';
import PageItem from './PageItem';

/**
 * PageSelector Component
 * 
 * Main container component that manages the page selection state.
 * Features:
 * - "All pages" checkbox that controls all individual pages
 * - Individual page checkboxes that sync with "All pages" state
 * - Done button to confirm selection
 * 
 * State Management:
 * - allPagesChecked: Controls the "All pages" checkbox state
 * - pageStates: Tracks the checked state of each individual page
 */
export default function PageSelector() {
  // State for "All pages" checkbox
  const [allPagesChecked, setAllPagesChecked] = useState(false);
  
  // State for individual page checkboxes
  const [pageStates, setPageStates] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  /**
   * Handles "All pages" checkbox change
   * When checked/unchecked, updates all individual page states accordingly
   */
  const handleAllPagesChange = (checked: boolean) => {
    setAllPagesChecked(checked);
    setPageStates({
      page1: checked,
      page2: checked,
      page3: checked,
      page4: checked,
    });
  };

  /**
   * Handles individual page checkbox change
   * Updates the specific page state and checks if all pages are now selected
   * If all pages are selected, automatically checks "All pages"
   */
  const handlePageChange = (page: keyof typeof pageStates, checked: boolean) => {
    const newPageStates = { ...pageStates, [page]: checked };
    setPageStates(newPageStates);
    
    // Check if all individual pages are now selected
    const allChecked = Object.values(newPageStates).every(state => state);
    setAllPagesChecked(allChecked);
  };

  /**
   * Handles "Done" button click
   * Filters and logs all selected pages
   * Extend this function to add custom logic (e.g., API calls, navigation)
   */
  const handleDone = () => {
    const selectedPages = Object.entries(pageStates)
      .filter(([_, checked]) => checked)
      .map(([page]) => page);
    
    console.log('Selected pages:', selectedPages);
    // You can add your custom logic here
  };

  return (
    <div className="page-selector-container">
      {/* All pages row */}
      <PageItem 
        label="All pages" 
        isChecked={allPagesChecked}
        onChange={handleAllPagesChange}
      />
      
      {/* Separator */}
      <div className="separator" />
      
      {/* Individual pages */}
      <PageItem 
        label="Page 1" 
        isChecked={pageStates.page1}
        onChange={(checked) => handlePageChange('page1', checked)}
      />
      <PageItem 
        label="Page 2" 
        isChecked={pageStates.page2}
        onChange={(checked) => handlePageChange('page2', checked)}
      />
      <PageItem 
        label="Page 3" 
        isChecked={pageStates.page3}
        onChange={(checked) => handlePageChange('page3', checked)}
      />
      <PageItem 
        label="Page 4" 
        isChecked={pageStates.page4}
        onChange={(checked) => handlePageChange('page4', checked)}
      />
      
      {/* Separator above Done button */}
      <div className="separator" />
      
      {/* Done button */}
      <div className="button-container">
        <button
          onClick={handleDone}
          className="done-button"
        >
          Done
        </button>
      </div>
    </div>
  );
}