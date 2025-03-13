// import React from "react";

// const AddBook = () => {
//     return <div>AddBook</div>;
// };

// export default AddBook;

import { useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function BookForm() {
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // New success message state
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    copiesAvailable: "",
    publicationDate: "",
    category: "",
    totalCopies: "",
    publishedYear: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating successful book addition
    setSuccessMessage("Book added successfully! ");

    // Reset form
    setFormData({
      image: "",
      title: "",
      author: "",
      publicationDate: "",
      summary: "",
      copiesAvailable: "",
      category: "",
      totalCopies: "",
      publishedYear: "",
    });

    // Hide form after submission
    setShowForm(false);

    // Remove the success message after a few seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-10 overflow-y-auto max-h-screen">
      <div className="text-center">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded shadow-md"
        >
          Add Book
        </button>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="text-center text-green-600 font-semibold bg-green-100 p-3 rounded shadow-md">
          {successMessage}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-red bg-opacity-50 p-4">
          <div className="bg-white shadow-2xl rounded-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-500 text-lg"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Add a New Book
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Book"
                  className="w-full h-auto max-h-48 object-cover rounded"
                />
              )}

              <label className="w-full border p-3 shadow-sm rounded cursor-pointer bg-gray-100 text-center flex items-center justify-between">
                Upload Image <FaUpload />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Book Title"
                className="w-full border p-3 shadow-sm rounded"
                required
              />
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author"
                className="w-full border p-3 shadow-sm rounded"
                required
              />
              <input
                type="number"
                name="copiesAvailable"
                value={formData.copiesAvailable}
                onChange={handleChange}
                placeholder="Copies Available"
                className="w-full border p-3 shadow-sm rounded"
                required
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border p-3 shadow-sm rounded"
                required
              >
                <option value="">Select Category</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-Fiction</option>
                <option value="science-fiction">Science Fiction</option>
                <option value="biology">Biology</option>
                <option value="self-help">Self-Help</option>
                <option value="history">History</option>
                <option value="classic">Classic</option>
              </select>
              <input
                type="number"
                name="totalCopies"
                value={formData.totalCopies}
                onChange={handleChange}
                placeholder="Total Copies"
                className="w-full border p-3 shadow-sm rounded"
                required
              />
              <input
                type="number"
                name="publishedYear"
                value={formData.publishedYear}
                onChange={handleChange}
                placeholder="Published Year"
                className="w-full border p-3 shadow-sm rounded"
                required
              />
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Discription"
                className="w-full border p-3 shadow-sm rounded h-24 sm:h-40 overflow-y-auto"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded shadow-md hover:bg-blue-700 transition"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
