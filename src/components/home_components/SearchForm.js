import { useState } from 'react';

function SearchForm(props){
    let [value, setValue] = useState('');
    let setName = props.setName;

    function handleChange(e){
        setValue(e.target.value);
    }

    function handleClick(e){
        if(value === ''){
            setValue('example');
        }
        else{
            setName(value);
        }
        e.preventDefault();
    }

    return(
        <form>
            <input 
                type="text"
                name="name"
                placeholder="Search user..."
                onChange={handleChange}
                value={value}
            />
            <input 
                type="submit" 
                value="Search"
                onClick={handleClick}    
            />
        </form>
    );
}

export default SearchForm;