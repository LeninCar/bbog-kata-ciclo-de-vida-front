import { useState } from "react"

function CustomerForm({ onCustomerCreated }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    try {
      await onCustomerCreated(form)
      setForm({ name: "", email: "" })
      setSuccess("Customer created successfully")
    } catch (error) {
      setError(error.response?.data?.message || "Error creating customer")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Create customer</h2>
        <span className="badge">New</span>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="input"
              name="name"
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="input"
              name="email"
              type="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create customer"}
          </button>

          {error && <p className="alert alert-error">{error}</p>}
          {success && <p className="alert alert-success">{success}</p>}
        </form>
      </div>
    </div>
  )
}

export default CustomerForm
