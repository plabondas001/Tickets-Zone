const Complete = ({ comp }) => {
  return (
    <div className="mt-5 rounded-2xl p-3 bg-green-100 flex flex-col">
      <h1 className="font-semibold">{comp.title}</h1>
      <span className="border border-green-300 rounded-xl text-green-500 font-bold p-1 mt-2">
        Completed
      </span>
    </div>
  );
};

export default Complete;
