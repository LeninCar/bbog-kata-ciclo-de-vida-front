import { useEffect, useState } from "react";
import CustomerForm from "../components/CustomerForm";
import CustomerList from "../components/CustomerList";
import { createCustomer, getCustomers } from "../api/customerApi";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);

  async function loadCustomers() {
    const response = await getCustomers();
    setCustomers(response.data || []);
  }
  
  async function handleCustomerCreated(customer) {
    await createCustomer(customer);
    await loadCustomers();
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <main>
      <h1>Customer Lifecycle App</h1>
      <CustomerForm onCustomerCreated={handleCustomerCreated} />
      <CustomerList customers={customers} />
    </main>
  );
}

export default CustomersPage;
