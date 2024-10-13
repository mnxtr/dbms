import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import OrderUpdateForm from './orders.js';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/production" element={<Production />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
}

// Sample components for pages
const Dashboard = () => <h1>Dashboard</h1>;
const Inventory = () => <h1>Inventory</h1>;
const Orders = () => (
    <div>
        <h1>Orders</h1>
        <OrderUpdateForm />
    </div>
);
const Production = () => <h1>Production</h1>;
const Settings = () => <h1>Settings</h1>;

export default App;
