import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function User({ user }) {
    const [myuser, setUser] = useState();
    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();




    const addCourse = () => {
        dispatch({ type: 'ADD_COURSE', title: myuser })
    }


    const teste = (e) => {
        setUser(e.target.value)
    }

    return (
        <div className="container">
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>

            <input type="text" onChange={teste} />



            <button type="button" onClick={addCourse}>
                adicionar curso
            </button>
        </div>

    );
}

