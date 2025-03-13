import React, { useState, useEffect } from "react";
import PagesLayout from "../layouts/PagesLayout";
import axios from "axios";

const SingleBook = () => {
  // This is placeholder data that will be replaced with API calls
  const [book, setBook] = useState({
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    coverImage: "/placeholder-cover.jpg",
    rating: 4.6,
    description: "The Silent Patient by Alex Michaelides is a psychological thriller about Alicia Berenson, a famous painter who seemingly has a perfect life—until she murders her husband for no apparent reason and then never speaks another word. Theo Faber, a determined criminal psychotherapist, becomes obsessed with uncovering the truth behind the murder. As he digs deeper into Alicia's life and mind, dangerous truths begin to emerge—and his own motivations for helping her may not be as pure as they seem.",
    publicationInfo: "Published on February 5, 2019",
  });

  // Placeholder reviews
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: {
        name: "Sarah Gibson",
        avatar: "/placeholder-avatar.jpg",
        date: "Jan 10, 2023",
      },
      rating: 5.0,
      title: "Good, But Overhyped",
      content: "While the premise was intriguing and the twist clever, I found the overall narrative slightly over-developed. The writing was solid, but I expected more depth and complexity."
    },
    {
      id: 2,
      user: {
        name: "Eric Powell",
        avatar: "/placeholder-avatar.jpg",
        date: "Mar 15, 2023",
      },
      rating: 5.0,
      title: "Gripping And Unpredictable",
      content: "I couldn't put this book down! From start to finish, the pace never let up and the twists kept me guessing the entire time. Alex Michaelides masterfully builds suspense, making this a must-read for thriller fans."
    },
    {
      id: 3,
      user: {
        name: "Jamie Rao",
        avatar: "/placeholder-avatar.jpg",
        date: "Apr 28, 2023",
      },
      rating: 3.8,
      title: "A Slow Burn With A Big Payoff",
      content: "This started out slow at the beginning, but I'm glad I stuck with it. The development of characters and the exploration of human mind fascinating. While not perfect, definitely worth the read."
    },
  ]);

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 inline" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg key="half" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 inline" viewBox="0 0 20 20" fill="currentColor">
          <defs>
            <linearGradient id="half-fill" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-fill)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 inline" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };


  // Define function to fetch single-book
  const getBooks = async () => {
    const response = await axios.get('https://lms-project-zhgm.onrender.com/api/v1/book/67d055fd60292b3c94defee0');
    setBook(response
      .data);
  }

  useEffect(() => {
    getBooks();
  }, []);




  return (
    <PagesLayout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-gray-700 cursor-pointer">Books</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{book.title}</span>
        </div>

        {/* Book Details Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Book Cover */}
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="w-64 h-96 bg-gray-200 rounded-md shadow-md relative">
              {/* This will be replaced with actual book cover */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="font-bold mb-2">Book Cover</div>
                  <div className="text-sm">{book.title}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Information */}
          <div className="w-full md:w-3/4">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">"{book.title}"</h1>
            <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
            <p className="text-sm text-gray-500 mb-1">{book.genre}</p>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="mr-2">Rating: {book.rating}</div>
              <div className="flex">
                {renderStars(book.rating)}
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{book.description}</p>
              <p className="text-gray-500 text-sm mt-3">{book.publicationInfo}</p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 rounded-md transition duration-300">
                Add to Library
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md transition duration-300">
                Read now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(review => (
              <div key={review.id} className="border-t pt-4">
                {/* User Info */}
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden">
                    {/* This will be replaced with actual avatar */}
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-600">
                      {review.user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">{review.user.name}</div>
                    <div className="text-xs text-gray-500">{review.user.date}</div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="mb-2">
                  <div className="text-sm text-gray-600 mb-1">Rating: {review.rating}</div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                {/* Review Content */}
                <h3 className="font-bold text-gray-800 mb-2">{review.title}</h3>
                <p className="text-gray-700 text-sm">{review.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition duration-300">
            Write a Review
          </button>
        </div>
      </div>
    </PagesLayout>
  );
};

export default SingleBook;