const Status = ({ stat, setIsComplete, handleComplete }) => {
  console.log(stat);

  return (
    <div className="mt-5 rounded-2xl p-3 bg-gray-100 flex flex-col">
      <h1 className="font-semibold text-xl">{stat.title}</h1>
      <button
        onClick={() => {
          setIsComplete(false);
          handleComplete(stat);
        }}
        className="bg-green-400 cursor-pointer font-semibold text-xl py-1 text-white text-center rounded-xl mt-5"
      >
        Complete
      </button>
    </div>
  );
};

export default Status;
