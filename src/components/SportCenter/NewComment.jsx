import { Button, Form, Modal } from "react-bootstrap";
import "./stars.css";
import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";

const NewComment = ({show, onHide}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hola");
    }


    return (
        <>
            <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Comentá tu experiencia
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Escribe tu reseña:</Form.Label>
                            <Form.Control as="textarea" maxLength={500} minLength={5} required placeholder="Escribe un comentario aquí..." className="newcomment-text" rows={5} />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicPassword">
                            <Form.Label>Califícanos:</Form.Label>
                            <fieldset class="rating">
                                <input type="radio" id="star10" name="rating" value="10"/><label for="star10" class="full" title="Awesome"></label>
                                <input type="radio" id="star9" name="rating" value="9"/><label for="star9" class="half"></label>
                                <input type="radio" id="star8" name="rating" value="8"/><label for="star8" class="full"></label>
                                <input type="radio" id="star7" name="rating" value="7"/><label for="star7" class="half"></label>
                                <input type="radio" id="star6" name="rating" value="6"/><label for="star6" class="full"></label>
                                <input type="radio" id="star5" name="rating" value="5"/><label for="star5" class="half"></label>
                                <input type="radio" id="star4" name="rating" value="4"/><label for="star4" class="full"></label>
                                <input type="radio" id="star3" name="rating" value="3"/><label for="star3" class="half"></label>
                                <input type="radio" id="star2" name="rating" value="2"/><label for="star2" class="full"></label>
                                <input type="radio" id="star1" name="rating" value="1"/><label for="star1" class="half"></label>
                            </fieldset>
                        </Form.Group>
                        <Form.Group className="d-flex flex-column flex-md-row justify-content-md-end gap-3">
                            <Button variant="outline-danger" className="btn-reservation" type="button" onClick={onHide}>Cerrar</Button>
                            <Button variant="outline-success" className="btn-reservation" type="submit">Comentar</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NewComment;