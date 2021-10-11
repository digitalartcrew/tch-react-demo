import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { BsPencilSquare, BsXSquareFill } from "react-icons/bs";

const InputListFormRow = ({ rowCount, handleChange, controlId }) => {
	return (
		<Row className="input-list-form-row">
			<div className="input-list-form-row__inputs">
				<div className="dot">{rowCount + 1}</div>
				<div className="input-list-form-row__input">
					<Form.Group controlId={`inputListFormRow.${controlId}`}>
						<Form.Control as="input" rows={3} onChange={handleChange} />
					</Form.Group>
				</div>

				<div className="input-list-form-row__btn-container">
					<Button className="input-list-form-row__action-btn">
						<BsPencilSquare />
					</Button>
					<Button className="input-list-form-row__action-btn">
						<BsXSquareFill />
					</Button>
				</div>
			</div>
		</Row>
	);
};

export default InputListFormRow;
