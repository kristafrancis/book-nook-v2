import React from 'react';

const Star = (props) => {
    const changeGrade = (e) => {
        props.changeGradeIndex(e.target.value);
    }

    return (
        <label className='star'>
            <input
            type='radio'
            name='rating'
            id={props.grade}
            value={props.index}
            className='stars_radio-input'
            onClick={changeGrade}
            />
            <svg
             width="58" 
             height="58" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="#393939" 
             strokeWidth="1" 
             strokeLinecap="round" 
             strokeLinejoin="round" 
             style={props.style}
             >
               <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
             </svg>
        </label>
    );
}

export default Star;