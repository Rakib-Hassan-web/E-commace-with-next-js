"use client";

import { useState } from "react";
import {
  Home,
  Users,
  Package,
  Layers,
  Settings,
  Menu,
  Plus,
} from "lucide-react";

export default function AdminDashboard() {
  const [active, setActive] = useState("dashboard");
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  const menu = [
    { name: "Dashboard", key: "dashboard", icon: Home },
    { name: "Products", key: "products", icon: Package },
    { name: "Categories", key: "categories", icon: Layers },
    { name: "Users", key: "users", icon: Users },
    { name: "Settings", key: "settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-64" : "w-20"
        } bg-white shadow-xl transition-all duration-300 relative`}
      >
        {/* Toggle Button */}
        <div
          className="absolute right-[-12px] top-6 z-50 bg-gray-800 text-white p-2 rounded-full cursor-pointer shadow-md hover:bg-gray-700 transition"
          onClick={toggleSidebar}
        >
          <Menu size={18} />
        </div>

        <div className="p-4 border-b">
          {open && <h1 className="font-bold text-xl">Admin</h1>}
        </div>

        <ul className="p-2">
          {menu.map((item) => (
            <li
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex items-center gap-3 p-3 my-1 rounded-xl cursor-pointer transition ${
                active === item.key
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <item.icon size={20} />
              {open && <span>{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 capitalize">{active}</h2>

        {active === "dashboard" && <Dashboard />}
        {active === "products" && <Products />}
        {active === "categories" && <Categories />}
        {active === "users" && <UsersPage />}
        {active === "settings" && <SettingsPage />}
      </div>
    </div>
  );
}

// ================= DASHBOARD =================
function Dashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Total Products" value="120" />
      <Card title="Users" value="80" />
      <Card title="Orders" value="45" />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

// ================= PRODUCTS =================
function Products() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    size: "",
    color: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Plus size={18} /> Add / Edit Product
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />
          <input
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />
          <input
            name="size"
            placeholder="Size (S, M, L)"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />
          <input
            name="color"
            placeholder="Color"
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />
        </div>

        <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
          Save Product
        </button>
      </div>

      <Table
        headers={["Name", "Price", "Size", "Color", "Actions"]}
        data={[
          ["T-Shirt", "$20", "M", "Red", "Edit/Delete"],
          ["Shoes", "$40", "42", "Black", "Edit/Delete"],
        ]}
      />
    </div>
  );
}

// ================= CATEGORY =================
function Categories() {
  return (
    <div>
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h3 className="font-semibold mb-4">Add Category</h3>
        <input
          placeholder="Category Name"
          className="p-3 border rounded-lg w-full"
        />
        <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
          Save Category
        </button>
      </div>

      <Table
        headers={["Category", "Actions"]}
        data={[
          ["Clothing", "Edit/Delete"],
          ["Electronics", "Edit/Delete"],
        ]}
      />
    </div>
  );
}

// ================= USERS =================
function UsersPage() {
  return (
    <Table
      headers={["Name", "Email", "Role", "Actions"]}
      data={[
        ["Rakib", "rakib@mail.com", "Admin", "Edit/Delete"],
        ["User1", "user@mail.com", "User", "Edit/Delete"],
      ]}
    />
  );
}

// ================= SETTINGS =================
function SettingsPage() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="font-semibold mb-4">Admin Settings</h3>
      <input
        placeholder="Site Name"
        className="p-3 border rounded-lg w-full mb-3"
      />
      <input
        placeholder="Theme Color"
        className="p-3 border rounded-lg w-full"
      />
    </div>
  );
}

// ================= TABLE =================
function Table({ headers, data }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            {headers.map((h, i) => (
              <th key={i} className="p-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              {row.map((cell, j) => (
                <td key={j} className="p-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}