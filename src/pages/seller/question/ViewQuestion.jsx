import React, { useEffect, useState } from 'react'
import { useSellerContext } from '../../../context/SellerContext';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useParams, useNavigate } from 'react-router-dom';


const baseURL = import.meta.env.VITE_BACKEND_URL;


const ViewQuestion = () => {
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
                setSection(data.question.section);
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
                    <h2 className="text-2xl text-primary">Question Details</h2>
                    <Link
                        to="/seller/question-list"
                        className="px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        View All
                    </Link>
                </div>
                <Toaster />

                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <div>
                        <label className="block text-md font-medium text-gray-700 mb-1">Question</label>
                        <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800 whitespace-pre-wrap">
                            {questiondata || "-"}
                        </p>
                        <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800 whitespace-pre-wrap">
                            {hindiQuestiondata || "-"}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-md font-medium text-gray-700 mb-1">Parliament House</label>
                            <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800">
                                {sabha === "Lok" ? "Lok Sabha" : sabha === "Rajya" ? "Rajya Sabha" : "-"}
                            </p>
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700 mb-1">Parliament Session</label>
                            <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800">
                                {session || "-"}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-md font-medium text-gray-700 mb-1">Question Number</label>
                            <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800">
                                {quesNumber || "-"}
                            </p>
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700 mb-1">Answer Date</label>
                            <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800">
                                {questionDate || "-"}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-md font-medium text-gray-700 mb-1">Starred</label>
                            <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800">
                                {star === "true" ? "Starred" : "Unstarred"}
                            </p>
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700 mb-1">ASI Section</label>
                            <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800">
                                {section || "-"}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-md font-medium text-gray-700 mb-1">English Pdf</label>

                            {pdf ? (

                                <a href={`${baseURL}${pdf}`} target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 text-md block px-4 py-2 border border-gray-200 rounded-md bg-gray-50">View PDF</a>
                            ) : (
                                <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800">
                                    No PDF uploaded
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-md font-medium text-gray-700 mb-1">Hindi Pdf</label>
                            {hindiPdf ? (

                                <a href={`${baseURL}${hindiPdf}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 text-md block px-4 py-2 border border-gray-200 rounded-md bg-gray-50"
                                >
                                    View PDF
                                </a>
                            ) : (
                                <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800">
                                    No PDF uploaded
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-md font-medium text-gray-700 mb-1">Answer</label>
                        <p className="w-full px-4 py-2 mb-4 border border-gray-200 rounded-md bg-gray-50 text-gray-800 whitespace-pre-wrap">
                            {answer || "-"}
                        </p>
                    </div>

                </div>
            </div >
        </div >
    );


}

export default ViewQuestion