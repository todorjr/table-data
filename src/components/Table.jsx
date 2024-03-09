import useTableControls from '../hooks/useTableControls'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'


function Table () {

    const employees = [
        { firstName: 'John', lastName: 'Doe', startDate: '01/01/2022', department: 'Marketing', birthDate: '02/15/1985', street: '123 Main St', city: 'New York', state: 'NY', zipCode: '10001' },
        { firstName: 'Jane', lastName: 'Doe', startDate: '02/15/2022', department: 'Sales', birthDate: '04/20/1990', street: '456 Elm St', city: 'Los Angeles', state: 'CA', zipCode: '90001' },
        { firstName: 'Alice', lastName: 'Smith', startDate: '03/10/2022', department: 'HR', birthDate: '08/30/1987', street: '789 Oak St', city: 'Chicago', state: 'IL', zipCode: '60007' },
        { firstName: 'Bob', lastName: 'Brown', startDate: '04/05/2022', department: 'Finance', birthDate: '12/01/1983', street: '101 Pine St', city: 'Houston', state: 'TX', zipCode: '77001' },
        { firstName: 'Carol', lastName: 'Johnson', startDate: '05/20/2022', department: 'IT', birthDate: '07/17/1986', street: '202 Birch St', city: 'Phoenix', state: 'AZ', zipCode: '85001' },
        { firstName: 'David', lastName: 'Wilson', startDate: '06/15/2022', department: 'Operations', birthDate: '03/09/1988', street: '303 Cedar St', city: 'Philadelphia', state: 'PA', zipCode: '19019' },
        { firstName: 'Eve', lastName: 'Davis', startDate: '07/01/2022', department: 'R&D', birthDate: '05/29/1992', street: '404 Spruce St', city: 'San Antonio', state: 'TX', zipCode: '78201' },
        { firstName: 'Frank', lastName: 'Miller', startDate: '07/18/2022', department: 'Legal', birthDate: '11/23/1984', street: '505 Maple St', city: 'San Diego', state: 'CA', zipCode: '92101' },
        { firstName: 'Grace', lastName: 'Wilson', startDate: '08/02/2022', department: 'Customer Service', birthDate: '09/14/1989', street: '606 Walnut St', city: 'Dallas', state: 'TX', zipCode: '75201' },
        { firstName: 'Henry', lastName: 'Moore', startDate: '08/23/2022', department: 'Logistics', birthDate: '01/30/1991', street: '707 Cherry St', city: 'San Jose', state: 'CA', zipCode: '95101' },
        { firstName: 'Irene', lastName: 'Jackson', startDate: '09/10/2022', department: 'Procurement', birthDate: '06/22/1995', street: '808 Peach St', city: 'Austin', state: 'TX', zipCode: '73301' },
        { firstName: 'Jake', lastName: 'Martin', startDate: '10/05/2022', department: 'Product', birthDate: '10/16/1987', street: '909 Plum St', city: 'Jacksonville', state: 'FL', zipCode: '32099' },
        { firstName: 'Laura', lastName: 'Anderson', startDate: '11/01/2022', department: 'Design', birthDate: '12/08/1990', street: '1010 Pear St', city: 'Fort Worth', state: 'TX', zipCode: '76101' },
        { firstName: 'Mike', lastName: 'Thomas', startDate: '11/28/2022', department: 'Engineering', birthDate: '02/27/1989', street: '1111 Apple St', city: 'Charlotte', state: 'NC', zipCode: '28201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' },
        { firstName: 'Nina', lastName: 'Harris', startDate: '12/15/2022', department: 'Quality Assurance', birthDate: '04/11/1994', street: '1212 Banana St', city: 'Detroit', state: 'MI', zipCode: '48201' }
    ];
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
    ];

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
        <div>
        <h2>Current Employees</h2>
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
            <button type="button" id="search-btn" onClick={() => handleSearchChange(document.getElementById('search').value)}>Search</button>
            <input
                type="text"
                id="search"
                placeholder="Search..."
                onChange={(e) => handleSearchChange(e.target.value)}
            />
        </div>
    </div>
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.header}
                    <button
                        onClick={() => sortData(column.key)}
                        className={`sort-arrow ${
                            sortConfig.key === column.key
                                ? sortConfig.direction === 'asc'
                                    ? 'asc'
                                    : 'desc'
                                : ''
                        }`}
                        style={{marginLeft: '5px', border: 'none', backgroundColor: 'white'}}>
                        <div className="arrows" style={{display: 'flex', flexDirection: 'column'}}>
                            <span>{<BsArrowUp />} </span>
                            <span>{<BsArrowDown />}</span>
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
                const pageNumber = index + 1;
                    return (
                        <button
                            key={pageNumber}
                            onClick={() => goToPage(pageNumber)}
                            disabled={currentPage === pageNumber}>
                            {pageNumber}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default Table
