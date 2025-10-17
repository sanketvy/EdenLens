import { useState } from "react";
import AppDashboardAnalysisCard from "./AppDashboardAnalysisCard";

const AppDashboardRecentAnalysis = () => {

    const [filteredTerm, setFilteredTerm] = useState("");
    const [projectsResponse, setProjectsResponse] = useState([
        {
            id: "1",
            projectName: "AetherEdge Production Logs",
            date: "12 April 2026, 12:34 PM",
            javaVersion: "JAVA 8",
            gcAlgo: "SERIAL GC"
        }, {
            id: "1",
            projectName: "BetherEdge Production Logs",
            date: "12 April 2026, 12:34 PM",
            javaVersion: "JAVA 8",
            gcAlgo: "SERIAL GC"
        }, {
            id: "1",
            projectName: "CetherEdge Production Logs",
            date: "12 April 2026, 12:34 PM",
            javaVersion: "JAVA 8",
            gcAlgo: "SERIAL GC"
        }, {
            id: "1",
            projectName: "DetherEdge Production Logs",
            date: "12 April 2026, 12:34 PM",
            javaVersion: "JAVA 8",
            gcAlgo: "SERIAL GC"
        },
        {
            id: "1",
            projectName: "DetherEdge Production Logs",
            date: "12 April 2026, 12:34 PM",
            javaVersion: "JAVA 8",
            gcAlgo: "SERIAL GC"
        }
    ]);

    const [filteredResponse, setFilteredResponse] = useState(projectsResponse);

    return (
        <div>
            <input onChange={e => {
                console.log(e.target.value);
                setFilteredResponse(projectsResponse.filter(project => project.projectName.toLocaleLowerCase().startsWith(e.target.value.toLowerCase())));
            }} placeholder="Search Projects" className="bg-gray-200 w-full mt-6 p-2 rounded-md outline-none" />
            
            {
                filteredResponse.map(res => {
                    return <AppDashboardAnalysisCard data={res} key={res.id} />
                })
            }
        </div>
    )
}

export default AppDashboardRecentAnalysis;