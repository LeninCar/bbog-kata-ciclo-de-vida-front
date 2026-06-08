import { useEffect, useState } from "react";
import CustomerForm from "../components/CustomerForm";
import CustomerList from "../components/CustomerList";
import { createCustomer, getCustomers, getHealth } from "../api/customerApi";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loadError, setLoadError] = useState("");
  const [health, setHealth] = useState(null);

  async function loadCustomers() {
    try {
      const response = await getCustomers();
      // Supports both `response.data` and a raw array response
      const data = Array.isArray(response) ? response : response?.data;
      setCustomers(Array.isArray(data) ? data : []);
      setLoadError("");
    } catch (error) {
      setCustomers([]);
      setLoadError(error.message || "Could not load customers");
    }
  }

  async function loadHealth() {
    try {
      const response = await getHealth();
      setHealth(response);
    } catch {
      setHealth(null);
    }
  }

  async function handleCustomerCreated(customer) {
    await createCustomer(customer);
    await loadCustomers();
  }

  useEffect(() => {
    async function initPage() {
      await loadHealth();
      await loadCustomers();
    }

    initPage();
  }, []);
  return (
    <main className="page">
      <header className="page-header">
        <div className="page-logo" aria-hidden="true">
          C
        </div>
        <div>
          <div className="title-row">
            <h1 className="page-title">Customer Lifecycle App</h1>
            <span className="badge">
              {health?.appName || "customers-local"}
            </span>
          </div>
          <p className="page-subtitle">Create and manage your customers</p>
          <p className="environment-message">
            {health?.appMessage || "Backend not available"}
          </p>
        </div>
      </header>

      <div className="layout">
        <CustomerForm onCustomerCreated={handleCustomerCreated} />
        <CustomerList customers={customers} error={loadError} />
      </div>
    </main>
  );
}

export default CustomersPage;
