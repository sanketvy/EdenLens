import { Link, useParams, useSearchParams } from "react-router-dom";
import AppNavbar from "../components/app/dashboard/AppNavbar";
import { useState } from "react";
import AppReportDeleteConfirmModal from "../components/app/report/AppReportDeleteConfirmModal";

const ReportPage = () => {
    const [confirmDelete, setConfirmDelete] = useState(false);
    const pathParams = useParams();


    return (
        <>
            <div>
                <AppNavbar />
                <Link to="/dashboard">
                    <p className="text-blue-500 px-5 py-3">&lt; Back to Dashboard</p>
                </Link>

                <div className="px-5 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl">Production App Log</h1>
                        <p>12 Jan 2026, 12:33 PM, Java 8, Serial GC</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <button className="bg-black text-white rounded-md px-2 py-1 cursor-pointer">Delete</button>
                            <button className="bg-black text-white rounded-md px-2 py-1 cursor-pointer">Email Report</button>
                            <button className="bg-black text-white rounded-md px-2 py-1 cursor-pointer">Share</button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-10 p-5">
                    <div className="flex-2">

                        <div className="flex justify-between gap-10">
                            <div className="bg-gray-100 w-full h-30 p-4">Latency</div>
                            <div className="bg-gray-100 w-full h-30 p-4">Latency</div>
                            <div className="bg-gray-100 w-full h-30 p-4">Latency</div>
                        </div>

                        <div className="bg-gray-100 mt-8 h-100 p-5">
                            Visulization
                        </div>

                        <div className="flex justify-between gap-10">
                            <div className="bg-gray-100 mt-8 h-100 p-5 w-full">
                                Visulization
                            </div>
                            <div className="bg-gray-100 mt-8 h-100 p-5 w-full">
                                Visulization
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-gray-100 h-100 p-5">
                            Metrics
                        </div>
                        <div className="bg-gray-100 h-100 p-5 mt-10">
                            Metrics
                        </div>
                    </div>
                </div>
            </div>

            {confirmDelete && <AppReportDeleteConfirmModal />}

        </>
    )
}

export default ReportPage;