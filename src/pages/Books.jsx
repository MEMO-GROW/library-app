import React, { useEffect, useState } from "react";
import PagesLayout from "../layouts/PagesLayout";
import axios from "axios";
import { Link } from "react-router";

const Books = () => {
  // This will be populated from the backend later
  const [books, setBooks] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  // New state for edit functionality
  const [showEditModal, setShowEditModal] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    author: "",
    category: ""
  });

  // State for featured books carousel
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  // Categories for the filter dropdown
  const categories = ["All", "Fiction", "Non-Fiction", "Science Fiction", "Biography", "Self-Help", "History", "Classic"];

  // Filter books based on search term and category
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured books (first 3 from current position)
  const getFeaturedBooks = () => {
    if (filteredBooks.length === 0) return [];
    
    const startIndex = currentFeaturedIndex % filteredBooks.length;
    const featuredBooks = [];
    
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % filteredBooks.length;
      featuredBooks.push(filteredBooks[index]);
    }
    
    return featuredBooks;
  };

  // Get remaining books for grid (excluding featured)
  const getRemainingBooks = () => {
    if (filteredBooks.length <= 3) return [];
    
    const featuredIndices = new Set();
    const startIndex = currentFeaturedIndex % filteredBooks.length;
    
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % filteredBooks.length;
      featuredIndices.add(index);
    }
    
    return filteredBooks.filter((_, index) => !featuredIndices.has(index));
  };

  // Handle featured carousel navigation
  const navigateFeatured = (direction) => {
    if (direction === 'next') {
      setCurrentFeaturedIndex((prev) => (prev + 3) % filteredBooks.length);
    } else {
      setCurrentFeaturedIndex((prev) => {
        const newIndex = prev - 3;
        return newIndex < 0 ? Math.max(0, filteredBooks.length - (3 - (prev % 3))) : newIndex;
      });
    }
  };

  // Handle book deletion (this will be connected to backend later)
  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book._id !== id));
    setShowDeleteModal(false);
    
    // Show success notification
    setNotification({
      show: true,
      message: "Book deleted successfully!",
      type: "success"
    });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 3000);
  };

  // Open delete confirmation modal
  const confirmDelete = (book) => {
    setBookToDelete(book);
    setShowDeleteModal(true);
  };

  // Open edit modal
  const confirmEdit = (book) => {
    setBookToEdit(book);
    setEditFormData({
      title: book.title,
      author: book.author,
      category: book.category || categories[1] // Default to Fiction if no category
    });
    setShowEditModal(true);
  };

  // Handle form input changes
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  // Handle edit form submission
  const handleEditBook = async () => {
    try {
      // Update the book in the local state for now
      // This will be replaced with an API call when connected to backend
      const updatedBooks = books.map(book => {
        if (book._id === bookToEdit._id) {
          return {
            ...book,
            title: editFormData.title,
            author: editFormData.author,
            category: editFormData.category
          };
        }
        return book;
      });
      
      setBooks(updatedBooks);
      setShowEditModal(false);
      
      // Show success notification
      setNotification({
        show: true,
        message: "Book updated successfully!",
        type: "success"
      });
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
    } catch (error) {
      // Handle error
      setNotification({
        show: true,
        message: "Error updating book. Please try again.",
        type: "error"
      });
      
      setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000);
    }
  };

  // Define function to fetch books
  const getBooks = async () => {
    const response = await axios.get('https://lms-project-zhgm.onrender.com/api/v1/books');
    setBooks(response.data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <PagesLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Book Collection</h1>
          <p className="text-gray-600">Discover and manage your library's collection</p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title or author..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <select
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => window.location.href = '/add-book'}
            >
              Add Book
            </button>
          </div>
        </div>

        {/* Notification */}
        {notification.show && (
          <div className={`p-4 rounded-lg mb-6 ${notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {notification.message}
          </div>
        )}

        {filteredBooks.length > 0 ? (
          <>
            {/* Featured Books Carousel */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Featured Books</h2>
                <div className="flex gap-2">
                  <button 
                    onClick={() => navigateFeatured('prev')}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    aria-label="Previous featured books"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => navigateFeatured('next')}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    aria-label="Next featured books"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getFeaturedBooks().map(book => (
                  <div
                    key={`featured-${book._id}`}
                    className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                  >
                    <div className="h-64 bg-gray-200 relative">
                      {/* LINE 268: Cover Image */}
                      <img
                        src={book.coverImage || "https://savefiles.org/secure/uploads/34624?shareable_link=637"}
                        alt="Cover Image"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-2">{book.title}</h3>
                      <p className="text-gray-600 text-base mb-2">{book.author}</p>
                      <p className="text-sm text-gray-500 mb-4">Category: {book.category}</p>
                      
                      <div className="flex justify-between mt-2">
                        <Link 
                          to={`/single-book?id=${book._id}`} 
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          View Details
                        </Link>
                        <div className="flex gap-2">
                          <button
                            onClick={() => confirmEdit(book)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => confirmDelete(book)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Regular Books Grid */}
            {getRemainingBooks().length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">All Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {getRemainingBooks().map(book => (
                    <div
                      key={book._id}
                      className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                    >
                      <div className="h-48 bg-gray-200 relative">
                        {/* LINE 321: Cover Image */}
                        <img
                          src={book.coverImage || "https://savefiles.org/secure/uploads/34624?shareable_link=637"}
                          alt="Cover Image"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1 truncate">{book.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                        <p className="text-xs text-gray-500 mb-3">Category: {book.category}</p>
                        
                        <div className="flex justify-between mt-2">
                          <Link 
                            to={`/single-book?id=${book._id}`} 
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            View Details
                          </Link>
                          <div className="flex gap-2">
                            <button
                              onClick={() => confirmEdit(book)}
                              className="text-gray-600 hover:text-gray-800"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => confirmDelete(book)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <h3 className="text-lg font-medium text-gray-600 mb-2">No books found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p className="mb-6">Are you sure you want to delete "{bookToDelete?.title}"? This action cannot be undone.</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteBook(bookToDelete._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Book Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Edit Book</h3>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={editFormData.title}
                onChange={handleEditFormChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={editFormData.author}
                onChange={handleEditFormChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">Category</label>
              <select
                name="category"
                value={editFormData.category}
                onChange={handleEditFormChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleEditBook}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </PagesLayout>
  );
};

export default Books;
