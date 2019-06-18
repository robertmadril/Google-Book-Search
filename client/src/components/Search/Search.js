import React from "react";
import Button from "../Button";

function Search() {
    return (
    <div className="container">
        <form>
            <div className="form-group row">
                <label for="lgFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">Book Search</label>
                <div className="col-sm-10">
                        <input type="email" class="form-control form-control-lg" id="lgFormGroupInput" placeholder="Search"/>
                </div>
            </div>
            <Button text="Search"></Button>
        </form>

    </div>
            );
        };
        
export default Search;