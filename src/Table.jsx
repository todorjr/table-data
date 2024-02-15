
function Table (employees) {
    return (
        <div>
        <h2>Current Employees</h2>
        <div className="table-controls">
        <div className="show-entries">
            <label className="show-by" htmlFor="show-by">Show by:</label>
            <select name="show-by" id="show-by">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </div>
        <div className="search-box">
            <button type="button" id="search-btn">Search</button>
            <input type="text" id="search" placeholder="Search..." />
        </div>
    </div>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Start Date</th>
                    <th>Department</th>
                    <th>Date of Birth</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lazar</td>
                    <td>Todorovic</td>
                    <td>12/07/2024</td>
                    <td>Web Development</td>
                    <td>01/04/1993</td>
                    <td>17 Rue de Paris</td>
                    <td>Paris</td>
                    <td>FR</td>
                    <td>75004</td>
                </tr>
                  {/* {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.startDate}</td>
                            <td>{employee.department}</td>
                            <td>{employee.birthDate}</td>
                            <td>{employee.street}</td>
                            <td>{employee.city}</td>
                            <td>{employee.state}</td>
                            <td>{employee.zipCode}</td>
                        </tr>
                    ))} */}
            </tbody>
        </table>
        </div>
    )
}

export default Table
