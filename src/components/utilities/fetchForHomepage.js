// Import
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// Initial Fetch
const FetchForHomepage = () => {
    // Establish new state;
    const [accounts, setAccounts] = useState([]);
    const [distributionRules, setDistributionRules] = useState([]);
    const [incomingDeposits, setIncomingDeposits] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [users, setUsers] = useState([]);

    const contextObject = {
        accountsState: [accounts, setAccounts],
        distributionRulesState: [distributionRules, setDistributionRules],
        incomingDepositsState: [incomingDeposits, setIncomingDeposits],
        transactionsSet: [transactions, setTransactions],
        usersState: [users, setUsers]
    }

    // Base Fetch URL
    const BASE_URL = "https://transposit.onrender.com";
    const navigate = useNavigate()

    // useEffects
    useEffect(() => {
        async function fetchAccounts () {
            try {
                const response = await fetch (`${BASE_URL}/api/accounts`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const accountsData = await response.json();
                console.log("Translated Accounts Data:", accountsData);
                setAccounts(accountsData);
            } catch (error) {
                console.log ("Error fetching Accounts Data!")
                console.log(error)
            }
        }
        fetchAccounts();
    }, [])

// Return
    return (
        <div>
            <div>
                <Navbar context={contextObject}/>
            </div>
            <div>
                <Outlet context={contextObject} />
            </div>
            <Footer />
        </div>
    )
};

// Export
export default FetchForHomepage;