const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="w-10 h-10 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <p className="ml-4 text-gray-800 text-2xl font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;
