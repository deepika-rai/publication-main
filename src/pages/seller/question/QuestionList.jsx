import React, { useState, useEffect } from "react";
import { useSellerContext } from "../../../context/SellerContext";
import ConfirmationDialog from "./../../../components/ConfirmDialog";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
const baseURL = import.meta.env.VITE_BACKEND_URL;

const QuestionList = () => {
  const { axios } = useSellerContext();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);
  const [questions, setQuestions] = useState([])
  const [questiondata, setQuestiondata] = useState('');
  const [sabha, setSabha] = useState('');
  const [session, setSession] = useState('');
  const [section, setSection] = useState('');
  const [questionFromDate, setQuestionFromDate] = useState('');
  const [questionToDate, setQuestionToDate] = useState('');
  const [star, setStar] = useState('');

  const fetchQuestions = async (page = 1) => {
    try {
      const params = {
        page,
        limit: itemsPerPage
      };

      if (questiondata.trim()) {
        params.questiondata = questiondata.trim();
      }

      if (section) {
        params.section = section;
      }

      if (sabha) {
        params.sabha = sabha;
      }

      if (session) {
        params.session = session;
      }

      if (star !== "") {
        params.star = star;
      }

      if (questionFromDate) {
        params.fromDate = questionFromDate;
      }

      if (questionToDate) {
        params.toDate = questionToDate;
      }

      const { data } = await axios.get(
        "/api/question/questionList",
        { params }
      );

      if (data.success) {
        setQuestions(data.question);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
        setTotalQuestions(data.totalQuestions);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(
        error.response?.data?.message || error.message
      );
    }
  };


  const handleDelete = (questionId) => {
    setQuestionToDelete(questionId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/question/delete/${questionToDelete}`);
      if (data.success) {
        fetchQuestions();
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete question');
    } finally {
      setShowDeleteDialog(false);
      setQuestionToDelete(null);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    fetchQuestions()
  }, []);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const itemsPerPage = 10;


  return (
    <div className="flex-1 min-h-[95vh] overflow-y-auto">
      <div className="container mx-auto px-4">
        {/* Header with Add Question button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h2 className="text-2xl" style={{ color: "#0aad0a" }}>
            Question List
          </h2>
          <Link
            to="/seller/add-question"
            className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Add New
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Filters for search */}
            <div>
              <label htmlFor="questiondata" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                onChange={(e) => setQuestiondata(e.target.value)}
                value={questiondata}
                id="questiondata"
                type="text"
                placeholder="Enter question text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              />
            </div>
            <div>
              <label htmlFor="section" className="block text-sm font-medium text-gray-700 mb-1">Section</label>
              <select
                onChange={(e) => setSection(e.target.value)}
                value={section}
                id="section"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              >
                <option value="">Select a Section</option>
                <option value="Website">Website</option>
                <option value="Conservation">Conservation</option>
                <option value="Monument">Monument</option>
              </select>
            </div>
            <div>
              <label htmlFor="sabha" className="block text-sm font-medium text-gray-700 mb-1">sabha</label>
              <select
                onChange={(e) => setSabha(e.target.value)}
                value={sabha}
                id="sabha"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              >
                <option value="">Select a Sabha</option>
                <option value="Lok">Lok Sabha</option>
                <option value="Rajya">Rajya Sabha</option>
              </select>
            </div>
            <div>
              <label htmlFor="session" className="block text-sm font-medium text-gray-700 mb-1">Session</label>
              <select
                onChange={(e) => setSession(e.target.value)}
                value={session}
                id="session"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              >
                <option value="">Select a Session</option>
                <option value="Winter">Winter</option>
                <option value="Budget">Budget</option>
                <option value="Monsoon">Monsoon</option>

              </select>
            </div>
            <div>
              <label htmlFor="star" className="block text-sm font-medium text-gray-700 mb-1">Star</label>
              <select
                onChange={(e) => setStar(e.target.value)}
                value={star}
                id="star"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              >
                <option value="">Select a Star</option>
                <option value="true">Yes</option>
                <option value="false">No</option>

              </select>
            </div>
            <div>
              <label
                htmlFor="questionFromDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                From Date
              </label>
              <input
                id="questionFromDate"
                type="date"
                value={questionFromDate || ""}
                onChange={(e) => setQuestionFromDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="questionToDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                To Date
              </label>
              <input
                id="questionToDate"
                type="date"
                value={questionToDate || ""}
                onChange={(e) => setQuestionToDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => {
                  setCurrentPage(1);
                  fetchQuestions(1);
                }}
                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-colors h-10 mt-5 cursor-pointer"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => {
                  setQuestiondata("");
                  setSabha("");
                  setSection("");
                  setSession("");
                  setStar("");
                  setQuestionFromDate("");
                  setQuestionToDate("");
                  setCurrentPage(1);

                  // Fetch unfiltered data
                  setTimeout(() => {
                    fetchQuestions(1);
                  }, 0);
                }}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition-colors h-10 mt-5 cursor-pointer"
              >
                Clear
              </button>
            </div>


          </div>
        </div>

        {/* Books Table */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Ques No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Question
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Section
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Session
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider hidden md:table-cell">
                    Sabha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    star
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Pdf
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {questions.map((question, index) => (
                  <tr key={question.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 capitalize"> {(currentPage - 1) * itemsPerPage + index + 1}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {question.quesNumber}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {question.question}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {question.section}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 capitalize">
                        {question.session}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <div className="text-sm text-gray-500">
                        {question.sabha}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        <img
                          className="w-4.5"
                          src={question.star == true ? assets.star_icon : assets.star_dull_icon}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {formatDate(question.questionDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">

                      {(!question.pdf ? "" : <a href={`${baseURL}${question.pdf}`} target="blank">
                        View
                      </a>)}

                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <div className="flex space-x-2">
                        <Link
                          to={`/seller/edit-question/${question.id}`}
                          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-colors"

                        >
                          <i className="fa fa-pencil"></i>
                        </Link>
                        <button
                          onClick={() => handleDelete(question.id)}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition-colors cursor-pointer"
                        >
                        <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>{questions.length > itemsPerPage && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastItem, questions.length)}
                </span>{" "}
                of <span className="font-medium">{questions.length}</span>{" "}
                questions
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
            </table>
          </div>

          {/* Pagination */}
          {totalQuestions > 0 && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">

              <div className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">
                  {(currentPage - 1) * itemsPerPage + 1}
                </span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, totalQuestions)}
                </span>{" "}
                of{" "}
                <span className="font-medium">
                  {totalQuestions}
                </span>{" "}
                questions
              </div>

              <div className="flex space-x-2">

                <button
                  type="button"
                  onClick={() => {
                    const newPage = currentPage - 1;

                    if (newPage >= 1) {
                      fetchQuestions(newPage);
                    }
                  }}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <span className="px-3 py-1 text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    const newPage = currentPage + 1;

                    if (newPage <= totalPages) {
                      fetchQuestions(newPage);
                    }
                  }}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>

              </div>
            </div>
          )}

        </div>

        {/* Confirmation Dialog */}
        <ConfirmationDialog
          isOpen={showDeleteDialog}
          onClose={() => setShowDeleteDialog(false)}
          onConfirm={confirmDelete}
          title="Delete Question"
          message="Are you sure you want to delete this Question? This action cannot be undone."
          confirmText="Delete"
        />
      </div>
    </div>
  );
};

export default QuestionList;