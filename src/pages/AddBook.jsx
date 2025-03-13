import { FaUpload } from "react-icons/fa";

const AddBook = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[500px] ">
        {/* Small Image */}
        <div className="flex justify-center mb-4">
          <img
            src="/path/assets/images/hero.jpg"
            alt="Book Cover"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-2xl font-semibold text-center">
          Welcome Welcome Welcome{" "}
        </h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          Bookworm helps your young dreamer become a strong reader.
        </p>

        {/* Form Fields */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full border p-3 rounded"
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              className="w-full border p-3 rounded"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="publishYear"
              placeholder="Publish Year"
              className="w-full border p-3 shadow-sm rounded"
              required
            />
            <input
              type="number"
              name="totalCopies"
              placeholder="Total Copies"
              className="w-full border p-3 shadow-sm rounded"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              name="copiesAvailable"
              placeholder="Copies Available"
              className="w-full border p-3 rounded"
              required
            />
            <select
              name="category"
              className="w-full border p-3 rounded"
              required
            >
              <option value="">Select Category</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="science-fiction">Science Fiction</option>
              <option value="biology">Biology</option>
              <option value="history">History</option>
              <option value="classic">Classic</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="w-full border p-3 shadow-sm rounded flex items-center justify-between bg-gray-100 cursor-pointer">
              Upload Image <FaUpload />
              <input type="file" name="image" className="hidden" />
            </label>
            <label className="w-full border p-3 shadow-sm rounded flex items-center justify-between bg-gray-100">
              Upload PDF <FaUpload />
              <input type="file" name="pdf" className="hidden" />
            </label>
          </div>
          <textarea
            name="summary"
            placeholder="Book Description"
            className="w-full border p-3 rounded"
            required
          ></textarea>

          {/* Add to Library Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded shadow-md hover:bg-blue-700 transition"
          >
            Add to Library
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
