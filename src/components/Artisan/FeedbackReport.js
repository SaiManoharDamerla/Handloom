import React from "react";

const FeedbackReport = () => {
  const feedbackData = [
    {
      buyer: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent quality of sarees, very satisfied!",
      date: "2024-09-30",
    },
    {
      buyer: "Sita Sharma",
      rating: 4,
      comment: "Great service, but shipping was slightly delayed.",
      date: "2024-09-28",
    },
    {
      buyer: "Amit Patel",
      rating: 3,
      comment: "Quality is good, but expected more variety in men’s wear.",
      date: "2024-09-25",
    },
    {
      buyer: "Meena Rao",
      rating: 5,
      comment: "Beautiful handloom rugs, will definitely recommend!",
      date: "2024-09-20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Feedback Report</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 text-left">Buyer Name</th>
                <th className="py-2 px-4 text-left">Rating</th>
                <th className="py-2 px-4 text-left">Comment</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((feedback, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{feedback.buyer}</td>
                  <td className="py-2 px-4">{feedback.rating} ⭐</td>
                  <td className="py-2 px-4">{feedback.comment}</td>
                  <td className="py-2 px-4">{feedback.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReport;
