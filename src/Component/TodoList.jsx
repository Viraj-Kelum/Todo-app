import { useState } from "react";
import { ToastContainer } from 'react-toastify';

export const TodoList = ({ data, onComplete, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  const todoStatus = () => {
    const updatedStatus = !isCompleted;
    setIsCompleted(updatedStatus);
    onComplete(data.id, updatedStatus);
  };

  return (
    <div>
      <div className="btn text-white col-12 bg-black mt-2 mb-4">
        <div className="col-12">
          <div className="row">
            <div className="col-6 text-start">
              {data.isCompleted ? (
                <span className="badge text-bg-success">Completed</span>
              ) : (
                <span className="badge text-bg-danger">In completed</span>
              )}
            </div>
            <div className="col-6 text-end">
              <span className="badge">{data.date}</span>
            </div>
          </div>
        </div>
        <div className="text-start"></div>
        <div className="text-start"></div>

        <label className="fs-5 col-12 text-white">{data.todoTitle}</label>

        <div className="col-lg-6 offset-lg-3 ">
          <hr></hr>
          <label>Details</label>
          <p className="col-12">{data.todoDetails}</p>
          <div className="col-12 mt-3 mb-3">
            <div className="row">
              <div className="col-6 d-grid">
                <button
                  className="btn btn-success d-grid"
                  onClick={() => todoStatus()}
                >
                  {isCompleted ? "Incomplete" : "Complete"}
                </button>
              </div>
              <div className="col-6 d-grid">
                <button
                  className="btn btn-danger d-grid"
                  onClick={() => onDelete(data.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
