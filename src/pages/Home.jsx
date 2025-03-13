
// import React from "react";
// import PagesLayout from "../../layouts/PagesLayout";


// const Landing = () => {
//   return (
//     <PagesLayout>
//       <section className="h-[full-screen]] bg-[url(assets/images/hero.png)] bg-fixed bg-no-repeatjustify-center items-center">
//         {/* Main content */}
//         <div className="flex flex-col items-center justify-center mb-8">
//           {/* Center title circle */}
//           <div className="bg-white rounded-full h-100 w-100 shadow-md flex flex-col items-center justify-center p-4 mb-6">
//             <h1 className="text-4xl font-bold text-gray-900 mb-1">Endless Knowledge, <br /> One Click Away</h1>
//             <p className="text-lg font-semibold text-gray-800 mb-3">"The journey of a lifetime begins with the turning of a page." –</p>
//             <p>Rachel Anders</p>
//           </div>
//         </div>

//      </section>
//     </PagesLayout >

// );
// };

// export default Landing;








import React, { useState, useEffect } from 'react';
import { PlusIcon } from "@heroicons/react/24/solid";  // Importing PlusIcon
import { BookOpenIcon } from "@heroicons/react/24/outline";


const LibraryAdminDashboard = () => {
  // Mock data - in a real application, this would come from your backend
  const [stats, setStats] = useState({
    totalBooks: 0,
    booksCheckedOut: 0,
    pendingReturns: 0,
    recentlyAdded: 0
  });

  const [notifications, setNotifications] = useState([
    { id: 1, message: "33 books viewed today", type: "warning" },
    { id: 2, message: "5 books updated today", type: "info" },
    { id: 3, message: "10 books recently added", type: "info" }
  ]);

  // Simulate loading data
  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalBooks: 2458,
        booksViewed: 342,
        booksUpdated: 18,
        recentlyAdded: 24
      });
    }, 1000);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-6xl px-4 py-8">
        {/* Admin Header Bar */}
        <div className="mb-10 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm text-gray-600">Welcome back,</h2>
              <h1 className="text-xl font-semibold text-gray-800">Admin User</h1>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </div>
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Logout</button>
          </div>
        </div>

        {/* Main Dashboard Container */}
        <div className="relative flex flex-col items-center">
          {/* Main Dashboard Circle */}
          <div className="relative w-64 h-64 mb-16">
            <div className="absolute inset-0 rounded-full bg-gray-100 shadow-md border border-gray-200"></div>
            <div className="absolute inset-2 rounded-full bg-gray-50 border border-gray-200"></div>
            <div className="absolute inset-3 rounded-full bg-white flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold text-center text-gray-800 tracking-wider">LIBRARY</h1>
              <h1 className="text-xl font-bold text-center text-gray-800 tracking-wider">ADMIN</h1>
              <h1 className="text-xl font-bold text-center text-gray-800 tracking-wider">DASHBOARD</h1>

              {/* <div className="mt-4 w-32 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
              </div> */}
            </div>
          </div>

          {/* Button Container */}
          <div className="flex justify-between w-full max-w-4xl mb-16">
            {/* Search Books Button */}
            <button
              onClick={() => window.location.href = '/books'}
              className="relative group w-48 h-48"
            >
              <div className="absolute inset-0 rounded-full bg-gray-100 shadow-md border border-gray-200"></div>
              <div className="absolute inset-2 rounded-full bg-gray-50 border border-gray-200 group-hover:bg-blue-50 transition-all duration-300"></div>
              <div className="absolute inset-4 rounded-full bg-white flex flex-col items-center justify-center">
              <BookOpenIcon className="h-10 w-10 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 mb-2" />

                <h2 className="text-lg font-bold text-center text-gray-800 tracking-wide">VIEW</h2>
                <h2 className="text-lg font-bold text-center text-gray-800 tracking-wide">BOOKS</h2>

                {/* Hovered state indicator */}
                <div className="mt-2 w-12 h-1 bg-white group-hover:bg-blue-400 transition-all duration-300"></div>
              </div>
            </button>

            {/* Add New Book Button */}

            <button
              onClick={() => (window.location.href = "/add-book")}
              className="relative group w-48 h-48"
            >
              <div className="absolute inset-0 rounded-full bg-gray-100 shadow-md border border-gray-200"></div>
              <div className="absolute inset-2 rounded-full bg-gray-50 border border-gray-200 group-hover:bg-blue-50 transition-all duration-300"></div>
              <div className="absolute inset-4 rounded-full bg-white flex flex-col items-center justify-center">
                {/* Replacing <svg> with <PlusIcon /> */}
                <PlusIcon className="h-10 w-10 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 mb-2" />

                <h2 className="text-lg font-bold text-center text-gray-800 tracking-wide">ADD</h2>
                <h2 className="text-lg font-bold text-center text-gray-800 tracking-wide">NEW</h2>
                <h2 className="text-lg font-bold text-center text-gray-800 tracking-wide">BOOK</h2>

                {/* Hovered state indicator */}
                <div className="mt-2 w-12 h-1 bg-white group-hover:bg-blue-400 transition-all duration-300"></div>
              </div>
            </button>


          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-5 w-full mb-10">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Total Books</h3>
              <p className="text-2xl font-bold text-gray-800">{stats.totalBooks.toLocaleString()}</p>
              <div className="mt-2 h-1 w-16 bg-blue-400"></div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Books Viewed</h3>
              <p className="text-2xl font-bold text-gray-800">{stats.booksViewed}</p>
              <div className="mt-2 h-1 w-16 bg-green-400"></div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Books Updated</h3>
              <p className="text-2xl font-bold text-gray-800">{stats.booksUpdated}</p>
              <div className="mt-2 h-1 w-16 bg-yellow-400"></div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Recently Added</h3>
              <p className="text-2xl font-bold text-gray-800">{stats.recentlyAdded}</p>
              <div className="mt-2 h-1 w-16 bg-purple-400"></div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="w-full mb-10 bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
            </div>

            <div className="space-y-3">
              {notifications.map(notification => (
                <div key={notification.id} className="flex items-start p-3 border-l-4 bg-gray-50 rounded-r-md"
                  style={{ borderLeftColor: notification.type === 'warning' ? '#f59e0b' : '#3b82f6' }}>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 border border-gray-200">
                    {notification.type === 'warning' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-gray-800">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">Today at 10:30 AM</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access Section */}
          <div className="w-full grid grid-cols-4 gap-5">
            <button className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center hover:border-blue-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Manage Returns</span>
            </button>

            <button className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center hover:border-blue-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Member Directory</span>
            </button>

            <button className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center hover:border-blue-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Reports</span>
            </button>

            <button className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center hover:border-blue-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryAdminDashboard;