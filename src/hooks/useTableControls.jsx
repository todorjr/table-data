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
    const [searchQuery, setSearchQuery] = useState('')
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })

    useEffect(() => { // Math.ceil rounds up and integer from data length and show-by value quotient
        if (Array.isArray(data)) {
            setTotalPages(Math.ceil(data.length / entriesToShow));
        }
    }, [data, entriesToShow]);
    
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
     * Filters the data array based on the provided search query.
     * @param {Array} data - The array of items to filter.
     * @param {string} searchQuery - The search query to filter items by.
     * @returns {Array} - The filtered array of items.
    */
    const filterData = () => {
        if (!Array.isArray(data)) {
            console.error("Data is not an array.");
            return [];
        }
        console.log(data, 'data')
        return data.filter((item) =>
            Object.values(item).some((value) =>
                value.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
    }

    /**
     * Updates the sorting configuration based on the specified key.
     *
     * @param {string} sortedKey - The key to use for sorting.
     * @returns {void}
     */
    const sortData = (sortedKey) => {
        let direction = 'asc'
        // If the current sorting key matches the specified key and is in ascending order, update the direction to descending otherwise, set it to ascending
        if (sortConfig.key === sortedKey && sortConfig.direction === 'asc') { 
            direction = 'desc'
        }
        setSortConfig({ key: sortedKey, direction }) // Update the sorting configuration
    }

    /**
     * Sorts the filtered data array based on the current sorting configuration
     * @returns {Array} - The sorted array of items.
     */
    const sortedData = () => {
        if (sortConfig.key) {
            return filterData().sort((a, b) => {
                const aValue = a[sortConfig.key].toLowerCase()
                const bValue = b[sortConfig.key].toLowerCase()

                if (aValue < bValue) {
                    return sortConfig.direction === 'asc' ? -1 : 1
                } else if (aValue > bValue) {
                    return sortConfig.direction === 'asc' ? 1 : -1
                } else {
                    return 0
                }
            })
        } else {
            return filterData() // If no sorting key is specified, return the unsorted filtered data

        }
    }

    /**
     * Selected employees for the current page.
     * This is a subset of the data array, sliced according to the current page and number of entries to show.
     */
    const selectedData = sortedData().slice(startIndex, startIndex + entriesToShow) // For every page set we will return exact number of data + search query option

    const handleSearchChange = (query) => {
        setSearchQuery(query)
        setCurrentPage(1)
    }

    return { 
        currentPage, 
        entriesToShow, 
        totalPages, 
        selectedData, 
        goToPage, 
        handleEntriesChange,
        handleSearchChange,
        sortData,
        sortConfig
    }
}

export default useTableControls
