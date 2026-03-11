const Navbar = () => {
  return (
    <div className="w-10/12 mx-auto mt-3 mb-3">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">CS — Ticket System</h1>
        <div>
          <ul className="flex items-center gap-10">
            <li>
              <a
                className="font-semibold hover:font-bold hover:border-b-2"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-semibold hover:font-bold hover:border-b-2"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                className="font-semibold hover:font-bold hover:border-b-2"
                href="#"
              >
                Changelog
              </a>
            </li>
            <li>
              <a
                className="font-semibold hover:font-bold hover:border-b-2"
                href="#"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="font-semibold hover:font-bold hover:border-b-2"
                href="#"
              >
                Download
              </a>
            </li>
            <li>
              <a
                className="font-semibold hover:font-bold hover:border-b-2"
                href="#"
              >
                Contact
              </a>
            </li>
            <button className="cursor-pointer rounded-md bg-linear-to-r from-blue-600 to-purple-500 text-white px-3 py-1">
              + New Ticket
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
