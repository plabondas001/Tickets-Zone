const Header = ({ progress, complete }) => {
  return (
    <section>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-linear-to-r rounded-2xl from-blue-600 to-purple-400">
            <h1 className="flex flex-col text-white font-semibold text-2xl text-center pt-20 pb-20">
              In-Progress{" "}
              <span className="text-2xl font-bold">{progress.length}</span>
            </h1>
          </div>
          <div className="bg-linear-to-r rounded-2xl from-green-400 to-green-700">
            <h1 className="flex flex-col text-white  font-semibold text-2xl text-center pt-20 pb-20">
              Resolved{" "}
              <span className="text-2xl font-bold">{complete.length}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
