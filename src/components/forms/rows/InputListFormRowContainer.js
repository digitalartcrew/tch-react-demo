import React, { useState } from "react";
import InputListFormRow from "../rows/InputListFormRow";
import Button from "react-bootstrap/Button";

const InputListFormRowContainer = ({
	titleOfRow,
	addBtnTitle,
	handleChange,
}) => {
	const [rowCount, setRowCount] = useState(0);

	return (
		<>
			{Array.from(Array(rowCount)).map((rowData) => (
				<>
					<h4>{titleOfRow}</h4>
					<InputListFormRow
						rowCount={rowCount + 1}
						handleChange={handleChange}
					/>
				</>
			))}
			<Button onClick={() => setRowCount(rowCount + 1)}>{addBtnTitle}</Button>
		</>
	);
};

export default InputListFormRowContainer;
