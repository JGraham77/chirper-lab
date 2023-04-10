import React from "react";

const Card = (props) => {
    return (
        <div className="card list-group bg-dark border border-1 border-light-50 m-1 shadow-lg">
            <div className="card-body">
                <div className="row mb-1">
                    <div className="col-2">
                        <img src="https://picsum.photos/50/50" className="rounded-circle" />
                    </div>
                    <div className="col-10 d-flex justify-content-between align-items-end">
                        <div className="card-title">
                            <h5 className="m-0 text-light">{props.name}</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-start">
                        <p className="card-text text-light">{props.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;