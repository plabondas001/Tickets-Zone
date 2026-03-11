import { use, useState } from "react";
import Header from "../Header/Header";
import Tickets from "../../Tickets/Tickets";
import { toast } from "react-toastify";
import Status from "../../Tickets/Status";
import Complete from "../../Tickets/Complete";

const LoadData = ({ promiseData }) => {
  const data = use(promiseData);

  const [isStatus, setIsStatus] = useState(true);

  const [isComplete, setIsComplete] = useState(true);

  const [complete, setComplete] = useState([]);

  const [progress, setProgress] = useState([]);

  const [status, setStatus] = useState([]);

  const handleComplete = (c) => {
    const remove = progress.filter((com) => com.id !== c.id);
    setProgress(remove);
    toast.success("Completed");
    const newcomplete = [...complete, c];
    setComplete(newcomplete);
  };

  const handleStatus = (s) => {
    const newStatus = [...status, s];
    setStatus(newStatus);
  };

  const handleProgress = (p) => {
    const findticket = progress.find((ticket) => ticket.id === p.id);
    if (findticket) {
      return toast.error("Allready Progress");
    }
    const newProgress = [...progress, p];
    setProgress(newProgress);
    toast("In-Progress");
  };

  return (
    <div className="bg-gray-100 pt-20 ">
      {/* Header */}
      <Header complete={complete} progress={progress}></Header>

      <div className="w-10/12 mx-auto">
        <h1 className="font-bold text-2xl mt-10">Customer Tickets</h1>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="col-span-9 mt-5 gap-5 space-y-5 grid grid-cols-1 lg:grid-cols-2">
            {data.map((card) => (
              <Tickets
                key={card.id}
                setIsStatus={setIsStatus}
                handleStatus={handleStatus}
                handleProgress={handleProgress}
                card={card}
              ></Tickets>
            ))}
          </div>
          <div className="col-span-3">
            <div className="rounded-xl p-5 mb-5 bg-white">
              <h1 className="font-bold text-2xl">Task Status</h1>
              {isStatus ? (
                <div className="text-center mt-8">
                  <h1 className="font-semibold">No Tasks in progress</h1>
                  <p className="text-gray-400">
                    Click on a ticket to start working
                  </p>
                </div>
              ) : (
                <div>
                  {progress.map((stat) => (
                    <Status
                      key={stat.id}
                      setIsComplete={setIsComplete}
                      handleComplete={handleComplete}
                      setComplete={setComplete}
                      stat={stat}
                    ></Status>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 rounded-2xl bg-white">
              {isComplete ? (
                ""
              ) : (
                <div className="p-5">
                  <h1 className="font-bold text-2xl">Resolved Task</h1>
                  <div>
                    {complete.map((comp) => (
                      <Complete key={comp.id} comp={comp}></Complete>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadData;
