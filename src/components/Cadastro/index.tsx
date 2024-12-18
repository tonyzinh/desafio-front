interface Imodal {
    isOpen: boolean;
}
export function Modal({isOpen}:Imodal) {
    if (!isOpen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-1/4 h-1/4 p-8 rounded-lg">
                <h1 className="text-2xl font-bold text-center">Modal</h1>
                <p className="text-center">This is a modal</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4">Close</button>
            </div>
            </div>
        )
    } else {
        return <> </>
    }
}
