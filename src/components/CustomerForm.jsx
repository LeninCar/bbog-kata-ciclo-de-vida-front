import { useState } from 'react';

function CustomerForm({ onCustomerCreated }) {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  const [error, setError] = useState('');

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    try {
      await onCustomerCreated(form);
      setForm({ name: '', email: '' });
    } catch (error) {
      setError(error.response?.data?.message || 'Error creating customer');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create customer</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <button type="submit">Create</button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default CustomerForm;