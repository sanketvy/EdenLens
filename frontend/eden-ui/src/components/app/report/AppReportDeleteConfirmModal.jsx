const AppReportDeleteConfirmModal = () => {
    return (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white text-black p-6 rounded-lg w-[480px] shadow-2xl text-center" onClick={(e) => e.stopPropagation()}>
                <div>
                    <h1 className="text-xl font-semibold">Are you Sure?</h1>
                    <p className="mt-5">Once you delete the project, you lose all the analysis.</p>

                    <div className="flex gap-4 px-10">
                        <button className="flex-1 text-white bg-black px-6 py-2 rounded-md cursor-pointer mt-10">Delete</button>
                        <button className="flex-1 text-black border-2 px-6 py-2 rounded-md cursor-pointer mt-10">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppReportDeleteConfirmModal;