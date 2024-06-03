// Imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Import Pages: 

// Import Utilites

// Browser Router 
const router = createBrowserRouter([
    {
        path:"/",
        element: <FetchForHomePage />,
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