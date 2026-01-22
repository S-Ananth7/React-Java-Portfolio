import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import axios from "../../api/axiosConfig";
import { theme } from "../../components/Theme";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "", description: "", subCategoryId: "", file: null });

  
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await axios.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error("❌ Error fetching products:", err);
    }
  };

  const handleAdd = async () => {
    try {
      
      const formData = new FormData();
      formData.append("name", newProduct.name);
      formData.append("description", newProduct.description);
      formData.append("price", newProduct.price);
      formData.append("stock", newProduct.stock);
      formData.append("subCategoryId", newProduct.subCategoryId);
      if (newProduct.file) {
        formData.append("file", newProduct.file);
      }

      await axios.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      loadProducts(); 
      setNewProduct({ name: "", price: "", stock: "", description: "", subCategoryId: "", file: null });
    } catch (err) {
      console.error("❌ Error adding product:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error("❌ Error deleting product:", err);
    }
  };

  return (
    <AdminLayout>
      <h2 style={styles.title}>🧺 Product Management</h2>
      <div style={styles.addBox}>
        <input
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Price (cents)"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="Stock"
          type="number"
          value={newProduct.stock}
          onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
          style={styles.input}
        />
        <input
          placeholder="SubCategory ID"
          type="number"
          value={newProduct.subCategoryId}
          onChange={(e) => setNewProduct({ ...newProduct, subCategoryId: e.target.value })}
          style={styles.input}
        />
        {}
        <input
          type="file"
          onChange={(e) => setNewProduct({ ...newProduct, file: e.target.files[0] })}
          style={styles.fileInput}
        />
        <button onClick={handleAdd} style={styles.addBtn}>➕ Add Product</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Price</th><th>Stock</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => handleDelete(p.id)} style={styles.deleteBtn}>
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}

const styles = {
  title: { fontSize: "1.4rem", color: theme.accent, marginBottom: "20px" },
  addBox: { display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" },
  input: {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  addBtn: {
    background: theme.primary,
    border: "none",
    borderRadius: "6px",
    color: theme.dark,
    fontWeight: "600",
    padding: "8px 16px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  deleteBtn: {
    background: "#ef4444",
    border: "none",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  fileInput: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
  },
};
