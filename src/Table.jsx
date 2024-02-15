
function Table () {
    return (
        <div>
        <h2>Current Employees</h2>
        <div className="table-controls">
        <div className="show-entries">
            <label htmlFor="show-by">Show by:</label>
            <select name="show-by" id="show-by">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
        </div>
        <div className="search-box">
            <input type="text" id="search" placeholder="Search..." />
            <button type="button" id="search-btn">Search</button>
        </div>
    </div>
        <table>
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
            <tr>
                <td>Lazar</td>
                <td>Todorovic</td>
                <td>01/18/2024</td>
                <td>Engineering</td>
                <td>01/17/2024</td>
                <td>17 Rue de Paris</td>
                <td>Paris</td>
                <td>AK</td>
                <td>123456</td>
            </tr>
        </table>
        </div>
    )
}

export default Table
