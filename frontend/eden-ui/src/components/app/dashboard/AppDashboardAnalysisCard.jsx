import { FaJava } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

const AppDashboardAnalysisCard = (props) => {
    return (
        <div className="flex gap-8 items-center my-5">
            <div>
                <FaJava size={80} />
            </div>
            <div>
                <Link to={"/report/" + props.data.id} className="text-2xl">{props.data.projectName}</Link>
                <p>{props.data.date}</p>
                <div className="flex gap-3 mt-2">
                    <p className="bg-blue-500 text-white px-4 py-1 rounded-md">{props.data.javaVersion}</p>
                    <p className="bg-gray-500 text-white px-4 py-1 rounded-md">{props.data.gcAlgo}</p>
                </div>
            </div>
        </div>
    )
}

export default AppDashboardAnalysisCard;