// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Pages: 

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
        ]
    }
])

// Export: Version 18
const app = document.getElementById("apps")
const root = createRoot(app)
root.render(<RouterProvider router={router} />)