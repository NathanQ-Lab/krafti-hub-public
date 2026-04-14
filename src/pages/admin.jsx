import { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function Admin() {
  const [user, setUser] = useState(null);

  // 🔐 login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ➕ product form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("mugs");

  const [products, setProducts] = useState([]);

  // 🔐 auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 📦 fetch products
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔐 login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Login failed");
    }
  };

  // 🔐 logout
  const handleLogout = () => {
    signOut(auth);
  };

  // ➕ add product
  const handleAddProduct = async () => {
    if (!name || !price || !imageUrl) {
      alert("Fill all required fields");
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        name,
        description,
        price: Number(price),
        imageUrl,
        category,
        createdAt: new Date(),
      });

      setName("");
      setDescription("");
      setPrice("");
      setImageUrl("");

      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Error adding product");
    }
  };

  // ❌ delete product
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Error deleting product");
    }
  };

  // 🔒 LOGIN SCREEN
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fff5f8]">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-sm"
        >
          <h2 className="text-xl font-bold text-center">
            Admin Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <button className="btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    );
  }

  // 🔓 ADMIN PANEL
  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>

        <button onClick={handleLogout} className="btn-primary">
          Logout
        </button>
      </div>

      {/* ADD PRODUCT */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10 space-y-4">

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="tumblers">Tumblers</option>
          <option value="mugs">Mugs</option>
          <option value="bottles">Bottles</option>
          <option value="pillows">Pillows</option>
          <option value="snowglobes">Snow Globes</option>
        </select>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Cloudinary Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <button onClick={handleAddProduct} className="btn-primary">
          Add Product
        </button>
      </div>

      {/* PRODUCT LIST */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">
          Existing Products
        </h2>

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">
                {product.category}
              </p>
              <p className="text-sm text-gray-600">
                {product.description}
              </p>
              <p className="font-bold">
                R {product.price}
              </p>
            </div>

            <button
              onClick={() => handleDelete(product.id)}
              className="text-red-500 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}