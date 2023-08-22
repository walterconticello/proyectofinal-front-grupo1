import { Button, Form, Modal } from "react-bootstrap";
import "./stars.css";
import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";
import Swal from 'sweetalert2'

const NewComment = ({show, onHide, idSportCenter, page, setComments}) => {
    
    const URL = import.meta.env.VITE_DB;
    
    const postComment = async (comment) => {
        try{
            comment.rating = parseInt(comment.rating);
            comment.user = {
                username: "diego_vacapaz5",
                email: "diegovca@hotmail.com1",
                photo: ""
            }
            const response = await fetch(`${URL}comments2`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(comment),
            });

            const updateResponse = await  fetch(`${URL}comments${page}`);
            const data = await updateResponse.json();
            setComments([...data]);

            Swal.fire({
                icon: 'success',
                title: 'Genial!',
                confirmButtonColor: '#71B641',
                text: 'Tu comentario se guardo con éxito', //Poner el mensaje del backend
            });

        }
        catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                confirmButtonColor: '#71B641',
                text: 'Algo salió mal', //Poner el mensaje del backend
            });
        }
    }

    const commentSchema = Yup.object().shape({
        text: Yup.string().required("Requerido").min(5, "Comentario muy corto").max(500,"Comentario muy largo").trim(),
        rating: Yup.number().required("Requerido").positive("Debe ser positivo").integer("Debe ser un entero").min(0, "Rating muy corto").max(10,"Rating muy largo"),
        sportCenterId: Yup.string(),
        userId: Yup.string(),
    });

    const initialValues = {
        text: "",
        rating: 0,
        sportCenterId: idSportCenter,
        userId: "AJSndfjkasndkjasn", //Sacar el Id desde el context
    }

    const formik = useFormik({
        initialValues,
        validationSchema: commentSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values)=>{
            postComment(values);
            formik.resetForm();
            onHide();
        }
    });

    return (
        <>
            <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Comentá tu experiencia
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit} noValidate>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="commentArea">Escribe tu reseña:</Form.Label>
                            <Form.Control as="textarea" id="commentArea" maxLength={500} minLength={5} required placeholder="Escribe un comentario aquí..." rows={5} {...formik.getFieldProps("text")} className={`newcomment-text ${clsx(
                                "form-control",
                                {
                                    "is-invalid": formik.touched.text && formik.errors.text,
                                },
                                {
                                    "is-valid": formik.touched.text && !formik.errors.text,
                                }
                            )}`}/>
                            {formik.touched.text && formik.errors.text && (
                            <div className="text-danger fw-bolder my-2">
                                <span rol="alert">{formik.errors.text}</span>
                            </div>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex flex-row align-items-center flex-nowrap">
                            <Form.Label>Califícanos:</Form.Label>
                            <fieldset {...formik.getFieldProps("rating")} className={`rating ${clsx(
                                "form-control",
                                {
                                    "is-invalid": formik.touched.rating && formik.errors.rating,
                                },
                                {
                                    "is-valid": formik.touched.rating && !formik.errors.ratin,
                                }
                            )}`}>
                                <input type="radio" id="star10" name="rating" value="10"/><label htmlFor="star10" className="full" title="Awesome"></label>
                                <input type="radio" id="star9" name="rating" value="9"/><label htmlFor="star9" className="half"></label>
                                <input type="radio" id="star8" name="rating" value="8"/><label htmlFor="star8" className="full"></label>
                                <input type="radio" id="star7" name="rating" value="7"/><label htmlFor="star7" className="half"></label>
                                <input type="radio" id="star6" name="rating" value="6"/><label htmlFor="star6" className="full"></label>
                                <input type="radio" id="star5" name="rating" value="5"/><label htmlFor="star5" className="half"></label>
                                <input type="radio" id="star4" name="rating" value="4"/><label htmlFor="star4" className="full"></label>
                                <input type="radio" id="star3" name="rating" value="3"/><label htmlFor="star3" className="half"></label>
                                <input type="radio" id="star2" name="rating" value="2"/><label htmlFor="star2" className="full"></label>
                                <input type="radio" id="star1" name="rating" value="1"/><label htmlFor="star1" className="half"></label>
                            </fieldset>
                            {formik.touched.rating && formik.errors.rating && (
                            <div className="text-danger fw-bolder my-2">
                                <span rol="alert">{formik.errors.rating}</span>
                            </div>
                            )}
                        </Form.Group>
                        <Form.Group className="d-flex flex-column flex-md-row justify-content-md-end gap-3">
                            <Button variant="outline-danger" className="btn-reservation" type="button" onClick={()=>{formik.resetForm(); onHide()}}>Cerrar</Button>
                            <Button variant="outline-success" className="btn-reservation" type="submit">Comentar</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NewComment;