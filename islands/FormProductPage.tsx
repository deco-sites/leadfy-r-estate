const FormProductPage = () => {
    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
            <form>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full p-3 border border-gray-300 rounded"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded h-24"
                    ></textarea>

                    <div className="flex items-end">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <p className="text-xs text-gray-600">
                            lorem ipsum dolor sit amet consectur
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#ff3f3f] text-white hover:bg-[#9d3636] px-8 py-3"
                    >
                        Get in Touch
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormProductPage;