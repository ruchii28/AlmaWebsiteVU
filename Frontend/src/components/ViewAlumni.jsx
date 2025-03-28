// 

import React, { useState, useEffect } from "react";

const ViewAlumni = () => {
    const [alumni, setAlumni] = useState([]);
    const [error, setError] = useState("");
    const [emailStatus, setEmailStatus] = useState("");

    useEffect(() => {
        const aluminidata = () => {
            fetch("http://localhost:5000/api/alumni/view-alumni")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch data");
                    }
                    return response.json();
                })
                .then(data => {
                    if (Array.isArray(data)) {
                        setAlumni(data);
                    } else {
                        throw new Error("Invalid data format received");
                    }
                })
                .catch(error => setError(error.message));
        };

        aluminidata();
        const interval = setInterval(aluminidata, 60000);
        return () => clearInterval(interval);
    }, []);

    // Function to send email
    const sendEmail = (email) => {
        fetch("http://localhost:5000/api/alumni/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                subject: "Alumni Information",
                message: "Hello, this is a test email from the alumni portal.",
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                setEmailStatus(`Email sent successfully to ${email}`);
            } else {
                setEmailStatus(`Failed to send email to ${email}`);
            }
        })
        .catch(error => setEmailStatus("Error sending email"));
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <h1 className="text-3xl font-bold text-orange-600 my-6">Alumni Details</h1>

            {error && <p className="text-red-500">{error}</p>}
            {emailStatus && <p className="text-green-600">{emailStatus}</p>}

            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                {alumni.length === 0 ? (
                    <p className="text-center text-gray-700">No alumni found.</p>
                ) : (
                    <ul>
                        {alumni.map((alum, index) => (
                            <li key={index} className="border-b py-2">
                                <strong>Reg No:</strong> {alum.regNo} <br />
                                <strong>Batch:</strong> {alum.batch} <br />
                                <strong>Branch:</strong> {alum.branch} <br />
                                <strong>Email:</strong> {alum.email} <br />
                                <strong>DOB:</strong> {alum.dob} <br />
                                <button
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                    onClick={() => sendEmail(alum.email)}
                                >
                                    Send Email
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ViewAlumni;
