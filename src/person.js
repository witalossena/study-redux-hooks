import React from 'react';
import { useSelector } from 'react-redux'



export default function Person() {
    const courses = useSelector(state => state.name);

    return (
        <div className="container">
            <ul>
            {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
        </div>
    );
}
