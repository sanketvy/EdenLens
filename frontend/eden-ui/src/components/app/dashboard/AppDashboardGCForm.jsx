const AppDashboardGCForm = () => {

    const javaVersions = [
        { label: "Select Java Version", value: "DEFAULT" },
        { label: "Java 8", value: "JAVA_8" },
        { label: "Java 11", value: "JAVA_11" },
        { label: "Java 17", value: "JAVA_17" },
        { label: "Java 21", value: "JAVA_21" }
    ];

    const gcAlgorithms = [
        { label: "Select GC Algorithm", value: "DEFAULT" },
        { label: "Serial GC", value: "SERIAL_GC" },
        { label: "Parallel GC", value: "PARALLEL_GC" },
        { label: "Concurrent Mark Sweep", value: "CMS_GC" }
    ];

    return (
        <div>
            <div className="w-full flex flex-col mt-6">
                <p className="mb-1">Project Name:</p>
                <input
                    type="text"
                    placeholder=""
                    className="bg-white w-full p-2 rounded-md focus:outline-none focus:ring-0"
                />

                <div className="flex gap-10">
                    <div className="w-full flex flex-col mt-6">
                        <p className="mb-1">Java Version:</p>
                        <select className="bg-white w-full p-2 rounded-md focus:outline-none focus:ring-0">
                            {javaVersions.map(v =>
                                <option value={v.value}>{v.label}</option>
                            )}
                        </select>
                    </div>

                    <div className="w-full flex flex-col mt-6">
                        <p className="mb-1">GC Algorithm:</p>
                        <select className="bg-white w-full p-2 rounded-md focus:outline-none focus:ring-0">
                            {gcAlgorithms.map(gc =>
                                <option value={gc.value}>{gc.label}</option>
                            )}
                        </select>
                    </div>
                </div>

                {/* File upload input */}
                <div className="w-full flex flex-col mt-6">
                    <p className="mb-1">Upload GC Log File:</p>
                    <input
                        type="file"
                        accept=".log,.txt"
                        className="bg-white w-full p-2 py-5 rounded-md focus:outline-none focus:ring-0"
                    />
                </div>

                {/* Info text */}
                <p className="text-gray-600 text-sm mt-4">
                    Please ensure your GC log file is generated with the proper JVM flags. <br />
                    Supported Java versions and GC algorithms will help EdenLens provide accurate analysis. <br />
                    After uploading, click "Analyze" to view heap usage trends and GC pause details.
                </p>

                <button className="bg-black py-3 text-white mt-4 rounded-md">Analyze</button>
            </div>
        </div>
    );
};

export default AppDashboardGCForm;
