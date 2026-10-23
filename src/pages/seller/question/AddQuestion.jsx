import React, { useEffect, useState } from 'react'
import { useSellerContext } from '../../../context/SellerContext';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useParams, useNavigate } from 'react-router-dom';


const baseURL = import.meta.env.VITE_BACKEND_URL;


const AddQuestion = () => {
  const navigate = useNavigate();
  const { questionId } = useParams();
  const [questiondata, setQuestiondata] = useState('');
  const [hindiQuestiondata, setHindiQuestiondata] = useState('');
  const [quesNumber, setQuesNumber] = useState('');
  const [section, setSection] = useState('');
  const [sabha, setSabha] = useState([]);
  const [session, setSession] = useState('');
  const [questionDate, setQuestionDate] = useState('');
  const [star, setStar] = useState(false);
  const [answer, setAnswer] = useState('');
  const [pdf, setPdf] = useState(null);
  const [hindiPdf, setHindiPdf] = useState(null);
  const { axios } = useSellerContext();

  const onSubmitHandler = async (event) => {
    if (questionId && questionId > 0) {
      event.preventDefault();
      try {
        const questionData = {
          id: questionId,
          question: questiondata,
          questionHindi: hindiQuestiondata,
          quesNumber,
          section,
          sabha,
          session,
          questionDate,
          star,
          answer
        };


        const formData = new FormData();

        formData.append(
          "questionData",
          JSON.stringify(questionData)
        );

        if (pdf instanceof File) {
          formData.append("bookPdf", pdf);
        }

        if (hindiPdf instanceof File) {
          formData.append("hindiBookPdf", hindiPdf);
        }

        const { data } = await axios.put(
          "/api/question/updateQuestion",
          formData
        );

        if (data.success) {
          toast.success(data.message);
          navigate('/seller/question-list');
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        event.preventDefault();
        const questionData = {
          question: questiondata,
          questionHindi: hindiQuestiondata,
          quesNumber,
          section,
          sabha,
          session,
          questionDate,
          star,
          answer
        }

        const formData = new FormData();

        formData.append(
          "questionData",
          JSON.stringify(questionData)
        );

        if (pdf instanceof File) {
          formData.append("bookPdf", pdf);
        }

        if (hindiPdf instanceof File) {
          formData.append("hindiBookPdf", hindiPdf);
        }

        const { data } = await axios.post(
          "/api/question/addQuestion",
          formData
        );

        if (data.success) {
          toast.success(data.message);
          navigate('/seller/question-list')
        } else {
          toast.error(data.message)
        }

      } catch (error) {
        toast.error(error.message)
      }
    }

  }

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const fetchQuestion = async () => {
    try {
      const { data } = await axios.get(`/api/question/${questionId}`)
      if (data.success) {
        setQuestiondata(data.question.question);
        setHindiQuestiondata(data.question.questionHindi);
        setQuesNumber(data.question.quesNumber);
        setSection(data.question.section)
        setSabha(data.question.sabha);
        setSession(data.question.session);
        setQuestionDate(formatDate(data.question.questionDate));
        setStar(data.question.star);
        setAnswer(data.question.answer);
        setPdf(data.question.pdf);
        setHindiPdf(data.question.pdfHindi);
      }
    } catch (error) {
      toast.error('Failed to fetch question data')
    }
  }

  const handlePdfChange = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;
      setPdf(file);

    } catch (err) {
      console.error(err);
      toast.error("Failed to set PDF");
    }
  };

  const handleHindiPdfChange = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;
      setHindiPdf(file);

    } catch (err) {
      console.error(err);
      toast.error("Failed to set PDF");
    }
  };


  useEffect(() => {
    if (questionId && questionId > 0) {
      fetchQuestion();
    }
  }, [questionId]);





  return (
    <div className="flex-1 min-h-[95vh] overflow-y-auto">
      <div className="container mx-auto px-4">

        {/* Heading and View All in the same row OUTSIDE the form card */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl text-primary"> {questionId && questionId > 0 ? "Edit" : "Add"} Question</h2>

          <Link
            to="/seller/question-list"
            className="px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View All
          </Link>
        </div>
        <Toaster />

        {/* Form Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={onSubmitHandler} className="space-y-6">

            <div>
              <label htmlFor="questiondata" className="block text-md font-medium text-gray-700 mb-1">Question <span className="text-red-500">*</span></label>
              <textarea
                onChange={(e) => setQuestiondata(e.target.value)}
                value={questiondata}
                id="questiondata"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                placeholder="Enter Question"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="hindiQuestiondata" className="block text-md font-medium text-gray-700 mb-1">हिंदी प्रश्न </label>
              <textarea
                onChange={(e) => setHindiQuestiondata(e.target.value)}
                value={hindiQuestiondata}
                id="hindiQuestiondata"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                placeholder="Enter Hindi Question"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label htmlFor="sabha" className="block text-md font-medium text-gray-700 mb-1">Parliament House <span className="text-red-500">*</span></label>
                <select
                  onChange={(e) => setSabha(e.target.value)}
                  value={sabha}
                  id="sabha"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  required
                >
                  <option value="">Select Parliament House</option>
                  <option value="Lok">Lok Sabha</option>
                  <option value="Rajya">Rajya Sabha</option>
                </select>
              </div>
              <div>
                <label htmlFor="session" className="block text-md font-medium text-gray-700 mb-1">Parliament Session <span className="text-red-500">*</span></label>
                <select
                  onChange={(e) => setSession(e.target.value)}
                  value={session}
                  id="session"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  required
                >
                  <option value="">Select a Parliament Session</option>
                  <option value="Winter">Winter</option>
                  <option value="Budget">Budget</option>
                  <option value="Monsoon">Monsoon</option>

                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label htmlFor="quesNumber" className="block text-md font-medium text-gray-700 mb-1">Question Number</label>
                <input
                  onChange={(e) => setQuesNumber(e.target.value)}
                  value={quesNumber}
                  id="quesNumber"
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="questionDate"
                  className="block text-md font-medium text-gray-700 mb-1"
                >
                  Answer Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="questionDate"
                  type="date"
                  value={questionDate || ""}
                  onChange={(e) => setQuestionDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  required
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label htmlFor="star" className="block text-md font-medium text-gray-700 mb-1">Starred <span className="text-red-500">*</span></label>
                <select
                  onChange={(e) => setStar(e.target.value)}
                  value={star}
                  id="star"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  required
                >
                  <option value="true">Starred</option>
                  <option value="false">Unstarred</option>

                </select>
              </div>
              <div>
                <label htmlFor="section" className="block text-md font-medium text-gray-700 mb-1">ASI Section  <span className="text-red-500">*</span></label>
                <select
                  onChange={(e) => setSection(e.target.value)}
                  value={section}
                  id="section"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  required
                >
                  <option value="">Select an ASI Section</option>
                  <option value="Archive">Archive</option>
                  <option value="Admin">Admin</option>
                  <option value="Antiquity">Antiquity</option>
                  <option value="B&A">B&amp;A</option>
                  <option value="Conservation">Conservation</option>
                  <option value="EE">EE</option>
                  <option value="IOA">IOA</option>
                  <option value="Media">Media</option>
                  <option value="Monument">Monument</option>
                  <option value="Museum">Museum</option>
                  <option value="NCF">NCF</option>
                  <option value="NMMA">NMMA</option>
                  <option value="Other">Other</option>
                  <option value="Publication">Publication</option>
                  <option value="Science">Science</option>
                  <option value="UAW">UAW</option>
                  <option value="Website">Website</option>
                  <option value="World Heritage">World Heritage</option>

                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="book-pdf" className="block text-md font-medium text-gray-700 mb-1">Upload English Pdf</label>
                <input
                  onChange={handlePdfChange}
                  id="book-pdf"
                  type="file"
                  accept="application/pdf"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />

                {pdf && typeof pdf === "string" && (
                  <a
                    href={`${baseURL}${pdf}`}
                    target="_blank"
                    className="text-blue-500 text-md mt-1 block"
                  >
                    View Existing PDF
                  </a>
                )}
              </div>
              <div>
                <label htmlFor="hindi-book-pdf" className="block text-md font-medium text-gray-700 mb-1">Upload Hindi Pdf</label>
                <input
                  onChange={handleHindiPdfChange}
                  id="hindi-book-pdf"
                  type="file"
                  accept="application/pdf"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />

                {hindiPdf && typeof hindiPdf === "string" && (
                  <a
                    href={`${baseURL}${hindiPdf}`}
                    target="_blank"
                    className="text-blue-500 text-md mt-1 block"
                  >
                    View Existing PDF
                  </a>
                )}
              </div>
            </div>


            <div>
              <label htmlFor="answer" className="block text-md font-medium text-gray-700 mb-1">Answer</label>
              <textarea
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                id="answer"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                placeholder="Enter Answer"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
              >
                {questionId && questionId > 0 ? "Update" : "Add"} Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );


}

export default AddQuestion