import React, { useState } from 'react';
import { useDispatch } from "react-redux";

const EditAmount = ({label}) => {
	const [val, setVal] = useState(0);
	const dispatch = useDispatch();

	function handleSubmitBtnClick() {
		if (label === 'Spend') {
			dispatch({type: 'Spend', payload: val})
			setVal('')
		} else if (label === 'Receive') {
			dispatch({ type: 'Receive', payload: val})
			setVal('')
		}
	}

	function updateInputVal(e) {
		setVal(e.target.value);
	}
	return (
		<div className="flex flex-col justify-between bg-china-rose h-48 w-80 border-2 rounded-md p-4 underline text-white">
			<span>{label}</span>
			<input type="number" className='bg-white p-4 h-10 border-b-4 border-black text-black' min="1" max="10000" value={val} onChange={updateInputVal}/>
			<div className="flex justify-center">
				<button type="button" className="bg-yellow-red border-2 p-2 h-10 w-32 text-base" onClick={handleSubmitBtnClick} >Submit</button>
			</div>
		</div>
	);
}

export default EditAmount;