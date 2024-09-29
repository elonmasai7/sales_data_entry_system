# Sales Data Entry System

This project aims to build a **Web-based Sales Data Entry System** using **Java** and **JavaScript**, along with **Mainframe Sales Processing** and **Sales Reports Creation** in **COBOL**. The system will facilitate sales data entry and processing, making it easier for business analysts to make informed decisions using historical data.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Database Configuration](#database-configuration)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Sales Data Entry System is designed to streamline the sales data entry process. It allows users to input sales information, which will be processed and stored in a SQL Server-based Data Warehouse. The project will also integrate predictive analysis capabilities using Java and Python.

### Key Highlights:
- **Web-Based System**: Built using Java and JavaScript for accessibility.
- **Mainframe Processing**: Sales processing and reports are generated using COBOL.
- **Data Warehouse Integration**: Data will be stored in an SQL Server for analysis and reporting.
- **Cost Recovery**: The system is designed to charge stores that wish to utilize it, ensuring sustainability.

## Features

- User-friendly interface for entering sales data.
- Secure authentication and authorization.
- Real-time data processing and reporting.
- Integration with existing sales data entry subsystems used by some stores.
- Predictive analysis features for informed decision-making.

## Technologies Used

- **Backend**: Java (Spring Boot, JPA)
- **Frontend**: JavaScript (React, Angular, or vanilla JS)
- **Database**: SQL Server
- **Mainframe**: COBOL
- **Data Analysis**: Java, Python

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/elonmasai7/sales_data_entry_system.git
   cd sales_data_entry_system
   ```

2. Ensure you have Java, Node.js, and SQL Server installed on your machine.

3. Configure your database connection in the `application.properties` or relevant configuration file.

4. Install the necessary dependencies:
`bash
   # For backend
   cd backend
   mvn install

   # For frontend
   cd frontend
   npm install
   ```

5. Run the application:
   bash
   # For backend
   cd backend
   mvn spring-boot:run

   # For frontend
   cd frontend
   npm start
  

## Usage

1. Navigate to `http://localhost:5000` in your browser to access the Sales Data Entry System.
2. Use the interface to enter sales data, and it will be processed and stored in the database.
3. Access sales reports and insights through the reporting features.

## Database Configuration

Ensure you have a SQL Server database running. Update the connection settings in your application properties to match your database configuration.

## Contributing

Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

Feel free to update any sections with specific details related to your project!
