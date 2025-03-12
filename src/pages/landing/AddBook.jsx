// import React from "react";

// const AddBook = () => {
//     return <div>AddBook</div>;
// };

// export default AddBook;

import { useState } from "react";

export default function BookForm() {
  const [books, setBooks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
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
    if (editIndex !== null) {
      const updatedBooks = books.map((book, index) => (index === editIndex ? formData : book));
      setBooks(updatedBooks);
      setEditIndex(null);
    } else {
      setBooks([...books, formData]);
    }
    setFormData({ image: "", title: "", author: "", genre: "", publicationDate: "", summary: "" });
  };

  const handleEdit = (index) => {
    setFormData(books[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-10">
      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {editIndex !== null ? "Update Book" : "Add a New Book"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full border p-2" />
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Book Title" className="w-full border p-2" required />
          <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="w-full border p-2" required />
          <input type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" className="w-full border p-2" required />
          <input type="date" name="publicationDate" value={formData.publicationDate} onChange={handleChange} className="w-full border p-2" required />
          <textarea name="summary" value={formData.summary} onChange={handleChange} placeholder="Brief Summary" className="w-full border p-2" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            {editIndex !== null ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>

      {/* Books Display Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-4 text-center">Books Added</h3>
        {books.length === 0 ? (
          <p className="text-center text-gray-500">No books added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-lg w-full max-w-sm break-words overflow-hidden">
                {book.image && <img src={book.image} alt={book.title} className="w-full h-48 object-cover mb-2 rounded" />}
                <h4 className="text-lg font-semibold break-words whitespace-normal overflow-hidden">{book.title}</h4>
                <p className="text-sm text-gray-600 break-words whitespace-normal overflow-hidden">{book.author}</p>
                <p className="text-sm break-words whitespace-normal overflow-hidden">{book.genre}</p>
                <p className="text-xs text-gray-500">Published: {book.publicationDate}</p>
                <p className="text-sm mt-2 break-words whitespace-normal overflow-hidden">{book.summary}</p>
                <div className="flex justify-center gap-4 mt-3">
                  <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white px-4 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}





