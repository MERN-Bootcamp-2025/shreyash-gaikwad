import "./SearchBar.css"
import { useState } from "react";


function SearchBar({onSubmit}){
    const [term,setTerm] = useState('');

    // const handleClick =()=>{
    //     onSubmit('cars');
    // };

    const handelOnSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term);
    };

    const handelChange =(event)=>{
        // console.log(event);
        setTerm(event.target.value);
    }

    return(
        <div className="search-bar">
            <form className="" onSubmit={handelOnSubmit}>
                <label>Enter Search Term</label>
            <input value={term} onChange={handelChange}/>
            </form>
            {/* <button onClick={handleClick}>Click me</button> */}
        </div>)
}

export default SearchBar;