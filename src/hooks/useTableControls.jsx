import { useState, useEffect } from 'react'

/**
 *  Custom hook useTableControls to abstract the logic away from the main component. This hook encapsulates all the essential functionalities, ensuring a cleaner and more manageable code structure in the primary component.
 * 
 * @param {Array} data - The full array of items to paginate.
 * @returns {Object} An object containing pagination state and functions.
 */
function useTableControls (data) {
    const [currentPage, setCurrentPage] = useState(1) // Set a initial state of current page
    const [entriesToShow, setEntriesToShow] = useState(10) // Set a initial state of current employees number to show
    const [totalPages, setTotalPages] = useState(0)
    
    
    useEffect(() => {
        setTotalPages(Math.ceil(data.length / entriesToShow)) // Math.ceil rounds up and integer from data length and show-by value quotient
    }, [data.length, entriesToShow])
    
    /**
     * Changes the number of entries to show per page and resets the current page to the first page.
     * @param {Event} event - The event object from the select element.
     */
    const handleEntriesChange = (event) => {
        setEntriesToShow(Number(event.target.value))
        setCurrentPage(1) // Reset to first page when entries per page change
    }
    
    /**
     * Changes the current page number.
     * @param {number} page - The page number to navigate to.
     */
    const goToPage = (page) => {
        setCurrentPage(page)
    }
    
    const startIndex = (currentPage - 1) * entriesToShow // Calculate the start index for slicing the data array based on the current page
    
    /**
     * Selected employees for the current page.
     * This is a subset of the data array, sliced according to the current page and number of entries to show.
     */
    const selectedData = data.slice(startIndex, startIndex + entriesToShow) // For every page set we will return exact number of data

    return { 
        currentPage, 
        entriesToShow, 
        totalPages, 
        selectedData, 
        goToPage, 
        handleEntriesChange 
    };
}

export default useTableControls
