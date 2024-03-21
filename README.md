# data-render-table

`data-render-table` is a React component library designed to render and manage tables with functionalities like pagination, search, and sorting.

## Installation

To install the package, use the following npm command:

```bash
npm install data-render-table
```

## Usage

Below is an example of how to use the `Table` component from `data-render-table` in a your application:

```js
import React from 'react';
import Table from 'data-render-table';

function TableEmployees({ employees }) {
    return (
        <div>
            <Table employees={employees} />
        </div>
    );
}

export default TableEmployees;
```

## Features

- **Pagination**: Control the number of records visible per page.
- **Search**: Include a search function to filter the table data.
- **Sorting**: Add sorting capabilities to table columns.

## Documentation

For detailed documentation, visit the [GitHub repository](https://github.com/todorjr/table-data).

## Contributing

Contributions to the `data-render-table` project are welcome. This package is developed as part of a school project, but we encourage community contributions to improve it further.

If you're interested in enhancing the project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your machine.
3. Create a new branch for your feature or fix.
4. Commit your changes and push your branch to your fork.
5. Submit a pull request from your branch to the main `table-data` repository.

## License

`data-render-table` is licensed under the MIT License. See the LICENSE file in the repository for more information.

## React + Vite

This project is set up using Vite, providing a minimal and fast build setup for React applications. It includes Hot Module Replacement (HMR) and is configured with ESLint rules for code quality.

For development, we use the following Vite plugins for React to enhance the developer experience with features like Fast Refresh:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses Babel for transforming React code and enabling Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses SWC as a faster alternative to Babel, also supporting Fast Refresh.

These plugins help in achieving a smoother development experience with React by providing instant feedback on code changes.