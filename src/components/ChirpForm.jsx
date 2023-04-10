import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ChirpForm = (props) => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        props.setChirps([{ id: uuidv4(), name: username, message }, ...props.chirps]);
        setUsername("");
        setMessage("");
    };

    return (
        <div className="card bg-dark border border-1 border-light-50 m-1 shadow-lg">
            <div className="card-body">
                <form>
                    <div className="row mb-1">
                        <div className="col-2">
                            <img
                                src="https://picsum.photos/50/50"
                                className="rounded-circle"
                            />
                        </div>
                        <div className="col-10 d-flex justify-content-between align-items-end">
                            <div className="card-title text-light">
                                <h5 className="m-0">
                                    <input
                                        value={username}
                                        className="bg-dark border-0 text-light"
                                        placeholder="Enter your username"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-12 text-start input-group">
                            <textarea
                                value={message}
                                className="form-control bg-dark text-light border-0 rows-3"
                                placeholder="What's happening?"
                                rows="5"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className="mt-3 d-flex justify-content-end">
                            <button className="btn btn-light" onClick={handleClick}>
                                Chirp
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChirpForm;