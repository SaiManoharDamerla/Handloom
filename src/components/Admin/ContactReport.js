import React, { useState } from "react";

const ContactReport = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Vikram Mehta",
      role: "Supplier",
      contactDate: "2024-09-15",
      status: "Not Contacted",
      phone: "9876543210",
      email: "vikram@suppliers.com",
    },
    {
      id: 2,
      name: "Pooja Agarwal",
      role: "Client",
      contactDate: "2024-09-18",
      status: "Contacted",
      phone: "9123456789",
      email: "pooja@clients.com",
    },
    {
      id: 3,
      name: "Manish Singh",
      role: "Supplier",
      contactDate: "2024-09-25",
      status: "Contacted",
      phone: "9988776655",
      email: "manish@suppliers.com",
    },
    {
      id: 4,
      name: "Alka Verma",
      role: "Client",
      contactDate: "2024-09-30",
      status: "Not Contacted",
      phone: "9876543200",
      email: "alka@clients.com",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState(""); // State for filtering by status
  const [filterRole, setFilterRole] = useState(""); // State for filtering by role

  // Update the contact status
  const updateStatus = (id, newStatus) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, status: newStatus } : contact
    );
    setContacts(updatedContacts);
  };

  // Filter contacts based on both role and status
  const filteredContacts = contacts.filter(
    (contact) =>
      (filterStatus === "" || contact.status === filterStatus) &&
      (filterRole === "" || contact.role === filterRole)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Contact Report</h1>

        {/* Filters Section */}
        <div className="flex justify-between mb-6">
          {/* Filter by Status */}
          <div>
            <label htmlFor="filter-status" className="mr-4 text-gray-700">Filter by Status:</label>
            <select
              id="filter-status"
              className="border rounded-md p-2"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All</option>
              <option value="Contacted">Contacted</option>
              <option value="Not Contacted">Not Contacted</option>
            </select>
          </div>

          {/* Filter by Role */}
          <div>
            <label htmlFor="filter-role" className="mr-4 text-gray-700">Filter by Role:</label>
            <select
              id="filter-role"
              className="border rounded-md p-2"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="">All</option>
              <option value="Supplier">Supplier</option>
              <option value="Client">Client</option>
            </select>
          </div>
        </div>

        {/* Contact Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Role</th>
                <th className="py-2 px-4 text-left">Phone</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Contact Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="border-b">
                  <td className="py-2 px-4">{contact.name}</td>
                  <td className="py-2 px-4">{contact.role}</td>
                  <td className="py-2 px-4">{contact.phone}</td>
                  <td className="py-2 px-4">{contact.email}</td>
                  <td className="py-2 px-4">
                    <select
                      value={contact.status}
                      onChange={(e) => updateStatus(contact.id, e.target.value)}
                      className="border rounded-md p-2"
                    >
                      <option value="Contacted">Contacted</option>
                      <option value="Not Contacted">Not Contacted</option>
                    </select>
                  </td>
                  <td className="py-2 px-4">{contact.contactDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactReport;
