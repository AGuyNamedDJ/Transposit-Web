// Import
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Initial Fetch
const FetchForHomepage = () => {
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

    const BASE_URL = "https://transposit.onrender.com";
    const navigate = useNavigate()

    // useEffect: Accounts
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

    // useEffect: Distribution Rules
    useEffect(() => {
        async function fetchDistributionRules () {
            try {
                const response = await fetch (`${BASE_URL}/api/distributionRules`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const distributionRulesData = await response.json();
                console.log("Translated Distribution Rules Data:", distributionRulesData);
                setDistributionRules(distributionRulesData);
            } catch (error) {
                console.log ("Error fetching Distribution Rules Data!")
                console.log(error)
            }
        }
        fetchDistributionRules();
    }, [])

    // useEffect: Incoming Deposits
    useEffect(() => {
        async function fetchIncomingDeposits () {
            try {
                const response = await fetch (`${BASE_URL}/api/incomingDeposits`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const incomingDepositsData = await response.json();
                console.log("Translated Incoming Deposits Data:", incomingDepositsData);
                setIncomingDeposits(incomingDepositsData);
            } catch (error) {
                console.log ("Error fetching Incoming Deposits Data!")
                console.log(error)
            }
        }
        fetchIncomingDeposits();
    }, [])

    // useEffect: Transactions
    useEffect(() => {
        async function fetchTransactions () {
            try {
                const response = await fetch (`${BASE_URL}/api/transactions`, {
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
                console.log("Response", response)
                const transactionsData = await response.json();
                console.log("Translated Transactions Data:", transactionsData);
                setTransactions(transactionsData);
            } catch (error) {
                console.log ("Error fetching Transactions Data!")
                console.log(error)
            }
        }
        fetchTransactions();
    }, [])

    // useEffect: Users
    useEffect(() => {
        async function fetchUsers () {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Authentication token is not available. Redirecting to login.");
                navigate('/login');
                return;
            }
    
            try {
                const response = await fetch (`${BASE_URL}/api/users`, {
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`); 
                }
    
                console.log("Response", response)
                const usersData = await response.json();
                console.log("Translated Users Data:", usersData);
                setUsers(usersData.user);
            } catch (error) {
                console.log ("Error fetching Users Data!")
                console.log(error)
            }
        }
        fetchUsers();
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