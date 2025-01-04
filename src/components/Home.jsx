import axios from "axios";
import { useState } from "react";

function Home() {
  const [input, setInput] = useState({
    admissionNo: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null); 
    setSuccess(false); 

    try {
      const response = await axios.get(`http://localhost:7000/pdf/${input.admissionNo}`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${input.admissionNo}_admit_card.pdf`);
      document.body.appendChild(link);
      link.click();

      setSuccess(true); 
      setLoading(false); 
    } catch (error) {
       if (error.response && error.response.status === 400) {
        console.error('Bad Request:', error.response.data);
        setError("Invalid admission number. Please check and try again.");
      } else {
        console.error('Error downloading admit card:', error);
        setError(
          "We couldn't find your admission details. Please ensure the admission number is correct, or try again later."
        );
      }
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto my-28 px-4 sm:px-6 lg:px-8">
      <form onSubmit={submitHandler} className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col gap-6 w-full sm:w-2/4">
          <h3 className="font-bold text-sky-700 text-3xl font-serif">
            Elite Coding Exam
          </h3>
          <p className="font-light pr-0 sm:pr-10">
            Welcome to the Elite Coding Test – where your skills meet challenges
            that shape the future of technology. The Elite Coding Test is more
            than just a competition – it's an opportunity to push your
            boundaries and shine as a coder. Ready to prove your mettle in the
            world of coding? Step up and show what you've got in the Elite
            Coding Test!
          </p>
          <h3 className="font-medium text-red-400 font-sans">
            Best Luck for Your Exam
          </h3>
        </div>

        <div className="flex flex-col gap-6 w-full sm:w-2/4">
          <h3 className="font-semibold text-lg text-gray-800">Download Here</h3>

          <div className="flex flex-col space-y-4">
            <label
              htmlFor="admissionNo"
              className="text-lg font-semibold text-gray-700"
            >
              Admission No:
            </label>
            <input
              type="text"
              id="admissionNo"
              value={input.admissionNo}
              onChange={handleChange}
              placeholder="Enter your Admission no"
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              disabled={loading}
            >
              {loading ? "Downloading..." : "Download Admit Card"}
            </button>
            {error && (
              <p className="text-red-500 mt-2">
                {error}
                <br />
                <span className="text-sm text-gray-500">
                  Please double-check your admission number. For further
                  assistance, reach out to support@elitecoding.com.
                </span>
              </p>
            )}
            {success && (
              <p className="text-green-500 mt-2">
                <strong>Success!</strong> Your admit card has been successfully downloaded. Make sure to check your downloaded files for the admit card.
                <br />
                <span className="text-sm text-gray-500">
                  Best of luck for your Elite Coding Test! Prepare well, and we look forward to seeing you shine in the exam.
                </span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
