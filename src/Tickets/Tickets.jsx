const Tickets = ({ card, handleProgress, handleStatus, setIsStatus }) => {
  return (
    <div
      onClick={() => {
        handleProgress(card);
        handleStatus(card);
        setIsStatus(false);
      }}
      className="bg-white cursor-pointer mb-5 rounded-xl p-3"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">{card.title}</h1>
        <p
          className={`font-semibold px-4 py-1 rounded-2xl ${card.status === "Open" ? "bg-green-300" : "bg-yellow-200"}`}
        >
          {card.status}
        </p>
      </div>
      <p className="text-gray-500">{card.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span>#{card.id}</span>
          <p
            className={`uppercase ${card.priority === "High" ? "text-red-500" : card.priority === "Medium" ? "text-yellow-500" : card.priority === "Low" ? "text-green-500" : ""}`}
          >
            {card.priority}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <h1>{card.customer}</h1>
          <span>{card.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
