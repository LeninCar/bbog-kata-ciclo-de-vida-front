function CustomerList({ customers = [] }) {
  return (
    <section>
      <h2>Customers</h2>

      {customers.length === 0 ? (
        <p>No customers found</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              {customer.name} - {customer.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CustomerList;