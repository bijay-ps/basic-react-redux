import React from 'react';
import { useDispatch } from "react-redux";

const BtnComponent = ({label, amount}) => {
	const dispatch = useDispatch()

	function handleSubmitBtnClick() {
		if (label === 'EMI') {
			dispatch({type: 'Spend', payload: amount});
		} else if (label === 'Salary') {
			dispatch({ type: 'Receive', payload: amount})
		}
	}

	return (
		<div className="flex flex-col justify-between bg-china-rose h-36 w-80 border-2 rounded-md p-4 text-white">
			<div className="flex justify-between">
				<span className="underline">{label}</span>
				<span> {amount} </span>
			</div>
			<div className="flex justify-center">
				<button type="button" className="bg-yellow-red border-2 p-2 h-10 w-32 underline text-base" onClick={handleSubmitBtnClick} >Submit</button>
			</div>
		</div>
	);
};

export default BtnComponent;