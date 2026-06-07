function getInitials(name = "") {
  const parts = name.trim().split(" ").filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

function CustomerList({ customers = [], error = "" }) {
  const list = Array.isArray(customers) ? customers : []

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Customers</h2>
        <span className="count">
          {list.length} {list.length === 1 ? "customer" : "customers"}
        </span>
      </div>

      <div className="card-body">
        {error ? (
          <p className="alert alert-error">{error}</p>
        ) : list.length === 0 ? (
          <div className="empty">
            <div className="empty-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <p className="empty-title">No customers yet</p>
            <p>Create your first customer using the form.</p>
          </div>
        ) : (
          <ul className="customer-list">
            {list.map((customer) => (
              <li key={customer.id} className="customer-item">
                <span className="avatar" aria-hidden="true">
                  {getInitials(customer.name)}
                </span>
                <div className="customer-info">
                  <span className="customer-name">{customer.name}</span>
                  <span className="customer-email">{customer.email}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default CustomerList
