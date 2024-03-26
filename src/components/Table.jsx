import useTableControls from '../hooks/useTableControls'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'

// eslint-disable-next-line react/prop-types
export default function Table ({employees}) {
    const columns = [
        { header: 'First Name', key: 'firstName' }, // add type for every column
        { header: 'Last Name', key: 'lastName' },
        { header: 'Start Date', key: 'startDate' },
        { header: 'Department', key: 'department' },
        { header: 'Date of Birth', key: 'birthDate' },
        { header: 'Street', key: 'street' },
        { header: 'City', key: 'city' },
        { header: 'State', key: 'state' },
        { header: 'Zip Code', key: 'zipCode' }
    ]
    const { 
        currentPage, 
        entriesToShow, 
        totalPages, 
        selectedData: selectedEmployees, 
        goToPage, 
        handleEntriesChange,
        handleSearchChange,
        sortData,
        sortConfig

    } = useTableControls(employees)

        return (
            <div className="table-container">
                <div className="main-title">
                    <h2>Current Employees</h2>
                </div>
                <div className="table-controls">
                    <div className="show-entries">
                        <label className="show-by" htmlFor="show-by">Show by:</label>
                        <select name="show-by" id="show-by" value={entriesToShow} onChange={handleEntriesChange}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
            
                        </select>
                    </div>
                    <div className="search-box">
                        <button 
                            type="button" 
                            id="search-btn" 
                            onClick={() => handleSearchChange(document.getElementById('search').value)}
                            style={{ backgroundColor: '#ffffff', color: '#000', border: '1px solid #007bff', padding: '8px 16px', borderRadius: '5px' }}
                        >
                            Search
                        </button>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search..."
                            onChange={(e) => handleSearchChange(e.target.value)}
                            style={{ padding: '8px', borderRadius: '5px', border: '1px solid #007bff', color: '#000' }}
                        />
                    </div>
                </div>
            {selectedEmployees.length > 0 ? (
                <>
                    <table>
                        <thead>
                            <tr>
                                {columns.map((column, index) => (
                                <th key={index}>
                                {column.header}
                                    <button
                                        onClick={() => sortData(column.key)}
                                        className={`sort-arrow ${sortConfig.key === column.key ? sortConfig.direction : ''}`}
                                        style={{ border: 'none', backgroundColor: 'transparent' }}
                                        aria-label={`Sort by ${column.header} ${sortConfig.key === column.key ? (sortConfig.direction === 'asc' ? 'descending' : 'ascending') : 'ascending'}`}
                                    >
                                        <div className="arrows">
                                            <span className={`asc ${sortConfig.key === column.key && sortConfig.direction === 'asc' ? '' : 'inactive'}`}><BsArrowUp aria-hidden="true" /></span>
                                            <span className={`desc ${sortConfig.key === column.key && sortConfig.direction === 'desc' ? '' : 'inactive'}`}><BsArrowDown aria-hidden="true" /></span>
                                        </div>
                                    </button>
                            </th>                            
                                ))}
                                
                            </tr>
                        </thead>
                        <tbody>
                            {selectedEmployees.map((employee, index) => (
                                    <tr key={index}>
                                        {columns.map(column => (
                                            <td key={column.key}>{employee[column.key]}</td>))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <div className="pagination" style={{textAlign: 'right', marginTop: '10px'}}>
                        {Array(totalPages).fill().map((_, index) => { // Here we need an array to show list of our page number ex: [0,1,2]
                            const pageNumber = index + 1
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => goToPage(pageNumber)}
                                        disabled={currentPage === pageNumber}>
                                        {pageNumber}
                                    </button>
                                )
                            })}
                    </div>
                </>
                ): (
                    <div className="empty-result">
                        <h3>No employees found</h3>
                        <p>Please refine your search criteria or add new employees.</p>
                    </div>
                )}
            </div>
        )
}