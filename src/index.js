// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Pages: 
    // Import Pages: Admin-Support
    import AdminDashboard from "./components/pages/admin-support/AdminDashboard";
    import UserManagement from "./components/pages/admin-support/UserManagement";

    // Import Pages: Authentication
    import Login from "./components/pages/authentication/Login";
    import Register from "./components/pages/authentication/Register";

    // Import Pages: Dashboard
    import Settings from "./components/pages/dashboard/Settings";
    import UserProfile from "./components/pages/dashboard/UserProfile";

    // Import Pages: Financial
    import AccountDetails from "./components/pages/financial/AccountDetails";
    import AccountOverview from "./components/pages/financial/AccountOverview";
    import DepositDetails from "./components/pages/financial/DepositDetails";
    import IncomingDeposits from "./components/pages/financial/IncomingDeposits";
    import Transaction from "./components/pages/financial/Transactions";
    import TransactionDetails from "./components/pages/financial/TransactionDetails";

    // Import Pages: Rules-Reporting
    import DistributionRules from "./components/pages/rules-reporting/DistributionRules";
    import EditDistributionRules from "./components/pages/rules-reporting/EditDistributionRules";
    import Reports from "./components/pages/rules-reporting/Reports";

// Import Utilites
import ErrorPage from "./components/utilities/errorPage";
import FetchForHomepage from "./components/utilities/fetchForHomepage";
import Homepage from "./components/utilities/homepage";

// Browser Router 
const router = createBrowserRouter([
    {
        path:"/",
        element: <FetchForHomepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index:true,
                element: <Homepage />
            },

            // Admin-Support
            {
                path: "/admin-dashboard",
                element: <AdminDashboard />
            },
            {
                path: "/user-management",
                element: <UserManagement />
            },

            // Authentication
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
    
            // Dashboard
            {
                path: "/settings",
                element: <Settings />
            },
            {
                path: "/profile",
                element: <UserProfile />
            },

            // Financial
            {
                path: "/account",
                element: <AccountOverview />
            },
            {
                path: "/account/:id",
                element: <AccountDetails/>
            },
            {
                path: "/deposits/:id",
                element: <DepositDetails />
            },
            {
                path: "/deposits",
                element: <IncomingDeposits />
            },
            {
                path: "/transactions",
                element: <Transaction />
            },
            {
                path: "/transactions/:id",
                element: <TransactionDetails />
            },

            // Rules-Reporting
            {
                path: "/distribution-rules",
                element: <DistributionRules />
            },
            {
                path: "/edit-distribution-rules/edit/:id",
                element: <EditDistributionRules />
            },
            {
                path: "/reports",
                element: <Reports />
            }
        ]
    }
])

// Export: Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)