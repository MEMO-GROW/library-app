
import React from "react";
import PagesLayout from "../../layouts/PagesLayout";


const Landing = () => {
    return (
    <PagesLayout>
        <section >
            {/* Main content */}
            <div className="flex flex-col items-center justify-center mb-8">
                {/* Center title circle */}
                <div className="bg-white rounded-full h-100 w-100 shadow-md flex flex-col items-center justify-center p-4 mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-1">Endless Knowledge, <br /> One Click Away</h1>
                <p className="text-lg font-semibold text-gray-800 mb-3">"The journey of a lifetime begins with the turning of a page." –</p>
                <p>Rachel Anders</p>
                </div>
            </div>


            
        {/* Three cards in a horizontal row */}
        <div className="grid grid-cols-3 gap-4">
          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Search</h3>
            <p className="text-xs text-gray-400 mb-4 overflow-hidden">Find books in the library catalog</p>
            
            <div className="flex justify-center my-4 relative">
              <div className="flex items-center justify-center">
                <div className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-gray-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-16 w-16 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {/* <div className="absolute top-1/4 right-0 h-3 w-3 rounded-full bg-amber-300"></div> */}
              </div>
            </div>
            
            <div className="mt-auto flex justify-center gap-2">
              <button className="bg-amber-100 rounded-full px-3 py-1 text-xs font-medium text-amber-900">Search</button>
              {/* <button className="bg-amber-100 rounded-full px-3 py-1 text-xs font-medium text-amber-900">Advanced</button>
              <button className="bg-amber-100 rounded-full px-3 py-1 text-xs font-medium text-amber-900">History</button> */}
            </div>
          </div>

          {/* Add a New Book Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Add a New Book</h3>
            <p className="text-xs text-gray-400 mb-4 overflow-hidden">Create new library entries</p>
            
            <div className="flex justify-center my-4 relative">
              <div className="flex items-center justify-center">
                <div className="absolute -left-2 top-1/2 h-2 w-2 rounded-full bg-gray-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-16 w-16 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9a3 3 0 100-6 3 3 0 000 6zm0 12a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
                {/* <div className="absolute right-0 top-1/3 h-2 w-2 rounded-full bg-gray-300"></div>
                <div className="absolute right-4 bottom-0 h-2 w-2 rounded-full bg-gray-300"></div> */}
              </div>
            </div>
            
            <div className="mt-auto flex justify-center gap-2">
              <button className="bg-amber-100 rounded-full px-3 py-1 text-xs font-medium text-amber-900">Add Book</button>
              {/* <button className="bg-amber-100 rounded-full px-3 py-1 text-xs font-medium text-amber-900">Import</button>
              <button className="bg-amber-100 rounded-full px-3 py-1 text-xs font-medium text-amber-900">Template</button> */}
            </div>
          </div>

          {/* Edit Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Edit</h3>
            <p className="text-xs text-gray-400 mb-4 overflow-hidden">Modify existing catalog entries</p>
            
            <div className="flex justify-center my-4 relative">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-16 w-16 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                {/* <div className="absolute -right-1 top-1/3 h-3 w-3 rounded-full bg-amber-200"></div>
                <div className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-amber-100"></div> */}
              </div>
            </div>
            
            <div className="mt-auto flex justify-center gap-2">
              <button className="bg-amber-100 rounded-full px-3 py-1 text-xs font-medium text-amber-900">Edit</button>
            </div>
          </div>
        </div>
             
          
        
          

                


        </section>
    </PagesLayout>

);
};

export default Landing;