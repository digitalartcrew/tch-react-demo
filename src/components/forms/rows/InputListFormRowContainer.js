import React, { useState } from "react";
import InputListFormRow from "../rows/InputListFormRow";
import Button from "react-bootstrap/Button";

const InputListFormRowContainer = ({
	titleOfRow,
	addBtnTitle,
	handleChange,
}) => {
	const [rowCount, setRowCount] = useState(1);
	const [rows, setRows] = useState([]);

	const addRow = () => {
		setRowCount(rowCount + 1);
		setRows([...rows, <InputListFormRow rowCount={rowCount} />]);
	};

	return (
		<>
			<>
				<h4>{titleOfRow}</h4>
				{rows.map((row) => row)}
			</>
			<Button onClick={() => addRow()}>{addBtnTitle}</Button>
		</>
	);
};

export default InputListFormRowContainer;
