💎 Finova — Personal Finance Dashboard
Finova is a sleek, modern, and responsive Personal Finance Dashboard built with vanilla HTML, CSS, and JavaScript. It simulates a full-stack application experience using localStorage for data persistence, offering a complete solution for tracking income, expenses, and financial health without requiring a backend database.

GitHub last commitGitHub licenseMade with JavaScript

🚀 Live Demo
Click here to view the Live Demo
(Replace the link above with your actual GitHub Pages URL after deployment)

📸 Screenshots
Dashboard View (Dark Mode)Dashboard Dark

Transactions View (Light Mode)Transactions Light

(To add real screenshots: drag and drop images into your GitHub repo and update the image links above)

✨ Key Features
📊 Dashboard & Analytics
Real-time Overview: Instantly view Total Balance, Total Income, Expenses, and Savings Rate.
Interactive Charts:
Balance Trend: Line chart tracking cumulative balance over 3/6/12 months.
Income vs Expense: Bar chart comparing monthly cash flow.
Spending Breakdown: Donut chart showing expense distribution by category.
Insights Page: Deep dive into financial health metrics, monthly comparisons, and top spending categories.
💳 Transaction Management
Full CRUD Operations: Create, Read, Update, and Delete transactions seamlessly.
Advanced Controls:
Search: Find transactions by description.
Filter: Filter by Type (Income/Expense), Category, or Month.
Sort: Click table headers to sort by Date, Amount, or Category.
Data Export: Export all filtered data to a .csv file for external analysis.
🔐 Authentication & Access Control
Simulated Login System: Secure entry point with role selection.
Role-Based Access (RBAC):
👁 Viewer: Read-only access. Can view dashboards and export data but cannot modify entries.
⚡ Admin: Full access to add, edit, and delete records, access the Admin Panel, and reset application data.
Session Persistence: Stay logged in even after closing the browser tab.
⚙️ User Experience
Responsive Design: Fully optimized for desktops, tablets, and mobile devices with a collapsible sidebar.
Theme Toggle: Switch between a sleek Dark Mode and a clean Light Mode.
Modern UI: Smooth animations, hover effects, and a consistent design language using CSS Variables.
🛠️ Tech Stack
HTML5: Semantic structure.
CSS3: Custom Properties (Variables), Flexbox, Grid, Media Queries for responsiveness.
JavaScript (ES6+): DOM manipulation, LocalStorage API, Modular logic.
Chart.js: For rendering interactive financial charts.
Google Fonts: DM Serif Display, DM Sans, and DM Mono.
📁 Project Structure
The project is kept simple and clean with a separation of concerns:

finova-dashboard/│├── index.html      # Main HTML structure (Login, Sidebar, Main Pages)├── style.css       # All styling, themes, and responsive rules├── script.js       # Application logic, data handling, and charts└── README.md       # Project documentation
🏁 Getting Started
Follow these steps to run the project locally.

Prerequisites
You only need a modern web browser (Chrome, Firefox, Edge, Safari).

Installation
Clone the repository:
bash

git clone https://github.com/yourusername/finova-dashboard.git
Navigate to the project directory:
bash

cd finova-dashboard
Open the application:
Simply open the index.html file in your browser.
Tip: For the best experience, use the "Live Server" extension in VS Code.
💡 How to Use
Login Screen: On load, select your role:
Choose Viewer for read-only access.
Choose Admin for full access control.
Dashboard: View your financial summary and charts. Use the buttons (3M, 6M, 12M) to adjust trend periods.
Transactions:
Use the search bar and filters to find specific records.
Admin Only: Click "＋ Add" to create new entries or the edit/delete icons in the table.
Admin Panel (Admin Only): Access the Admin Panel from the sidebar to manage user roles or reset data.
Settings: Update your profile name or switch themes.
Logout: Click the power button (⏻) at the bottom of the sidebar to return to the login screen.
📄 License
This project is open source and available under the MIT License.

Made with ❤️ by Your Name