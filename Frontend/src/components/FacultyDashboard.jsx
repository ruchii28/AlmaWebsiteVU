import React from "react";
import { useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-orange-600 mb-6">Faculty Dashboard</h1>

            {/* Button to View Alumni Details */}
            <button
                onClick={() => navigate("/viewalumni")}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition"
            >
                View Alumni
            </button>
        </div>
    );
};

export default FacultyDashboard;
