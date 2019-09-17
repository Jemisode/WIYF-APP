import React from "react";

const ListButtons = () => (

    <div className="col-xs-6">
        <button type="button" className="btn btn-primary" onClick={ handleEdit }>Edit</button>
    </div>

    <div className="col-xs-6"> 
        <button type="button" className="btn btn-primary" onClick={ handleNewSearch }>New Search</button>
    </div>
);

export default ListButtons;