import { useEffect, useState } from "react"
import CustomerForm from "../components/CustomerForm"
import CustomerList from "../components/CustomerList"
import { createCustomer, getCustomers } from "../api/customerApi"

function CustomersPage() {
  const [customers, setCustomers] = useState([])
  const [loadError, setLoadError] = useState("")

  async function loadCustomers() {
    try {
      const response = await getCustomers()
      // Supports both `response.data` and a raw array response
      const data = Array.isArray(response) ? response : response?.data
      setCustomers(Array.isArray(data) ? data : [])
      setLoadError("")
    } catch (error) {
      setCustomers([])
      setLoadError(error.message || "Could not load customers")
    }
  }

  async function handleCustomerCreated(customer) {
    await createCustomer(customer)
    await loadCustomers()
  }

  useEffect(() => {
    loadCustomers()
  }, [])

  return (
    <main className="page">
      <header className="page-header">
        <div className="page-logo" aria-hidden="true">
          C
        </div>
        <div>
          <h1 className="page-title">Customer Lifecycle App</h1>
          <p className="page-subtitle">Create and manage your customers</p>
        </div>
      </header>

      <div className="layout">
        <CustomerForm onCustomerCreated={handleCustomerCreated} />
        <CustomerList customers={customers} error={loadError} />
      </div>
    </main>
  )
}

export default CustomersPage
