import React from 'react';

function AddUser(props) {
    return(
        <div>
            <form onSubmit={props.addUser}>
                <label>
                    Person Name:
                    <input value={props.username} type="text" name="name" onChange={props.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
    
export default AddUser;
