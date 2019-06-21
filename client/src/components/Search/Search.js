import React from "react";

function Search({ q, handleInputChange, handleFormSubmit }) {
    return (
        <div className="container">
            <form>
                <div className="form-group row">
                    <label for="lgFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">Book Search</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            id="Title"
                            type="text"
                            value={q}
                            placeholder="Search"
                            name="q"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <button onClick={handleFormSubmit} type="button" className="btn btn-primary">Search</button>
            </form>

        </div>
    );
};

export default Search;