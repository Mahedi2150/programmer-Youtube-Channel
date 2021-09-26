import React from "react";

const AddCart = (props) => {

    const { programmer } = props;
    return (
        <div>
            {
                programmer.map(person =>

                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={person.img}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                ></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <small className="card-title">{person.name}</small>
                                </div>
                            </div>
                        </div>
                    </div>


                )

            }
        </div>
    );
};

export default AddCart;
