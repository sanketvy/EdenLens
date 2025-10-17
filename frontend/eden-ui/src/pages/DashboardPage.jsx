import AppDashboardGCForm from "../components/app/dashboard/AppDashboardGCForm";
import AppDashboardRecentAnalysis from "../components/app/dashboard/AppDashboardRecentAnalysis";
import AppNavbar from "../components/app/dashboard/AppNavbar";

const DashboardPage = () => {
    return (
        <div>
            {/* Navbar */}
            <AppNavbar />

            {/* Section  */}
            <div className="flex mt-5 gap-10 px-6 flex-start">
                <div className="flex-1">
                    <h1 className="text-2xl">Recent Analysis:</h1>
                    <p>Top 5 recent log analysis for quick access.</p>
                    <AppDashboardRecentAnalysis />
                </div>
                <div className="flex-2 bg-gray-200 p-5 rounded-md h-min">
                    <h1 className="text-2xl">Analyze Garbage Collection Logs:</h1>
                    <p>Create a new Garbage Collection visualization and analysis project.</p>
                    <AppDashboardGCForm />
                </div>
            </div>
        </div>
    )
}


export default DashboardPage;