import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AlumniDetails = () => {
    const [userData, setUserData] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const navigate = useNavigate();

    const defaultData = {
        regNo: "N/A",
        batch: "Unknown",
        branch: "Unknown",
        dob: "N/A",
        email: "A", // Default email first letter
    };

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        } else {
            setUserData(defaultData);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-orange-600">Alumni Details</h2>

                {/* Profile Button */}
                <div 
                    className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full cursor-pointer shadow-lg text-lg font-bold mt-4"
                    onClick={() => setShowDetails(!showDetails)}
                >
                    {userData?.email?.charAt(0)?.toUpperCase() || "A"}
                </div>

                {/* User Details Below Profile Button */}
                {showDetails && userData && (
                    <div className="mt-4 bg-gray-100 p-4 shadow rounded-lg w-full">
                        <p><strong>Reg No:</strong> {userData.regNo}</p>
                        <p><strong>Batch:</strong> {userData.batch}</p>
                        <p><strong>Branch:</strong> {userData.branch}</p>
                        <p><strong>DOB:</strong> {userData.dob}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                    </div>
                )}

                {/* Create Post Button */}
                <button 
                    className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition"
                    onClick={() => navigate("/createpost")}
                >
                    Create Post
                </button>
            </div>
        </div>
    );
};

export default AlumniDetails;
