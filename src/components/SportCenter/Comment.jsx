import { useEffect, useState } from "react";
import StarEmpty from "../../assets/star.svg";
import Star from "../../assets/star-fill.svg";
import HalfStar from "../../assets/star-half.svg";
import UserPhoto from "../../assets/avatar-default.jpg";
import Delete from "../../assets/trash3-fill.svg";
import Swal from 'sweetalert2';

const Comment = ({comment, page, setComments, loggedUser, idSportCenter, setLastPage}) => {
    const stars = [];
    const URL = import.meta.env.VITE_DB;
    const starsFactory = () => {
        for(let i = 1; i <= comment.rating/2 ; i++) { //1
            stars.push("fill");
        }
        for(let j = 0; j < comment.rating%2 ; j++) {
            stars.push("half");
        }
        for(let k = stars.length; k < 5; k++) {
            stars.push("empty");
        }
    }
    starsFactory();

    const fetchDeleteComment = async ()=> {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${URL}api/comments/${comment._id}`,{
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const updateResponse = await fetch(`${URL}api/comments/sportcenter/${idSportCenter}/${page}`);
            const data = await updateResponse.json();
            setComments(data.comments);
            setLastPage(data.pages);
            Swal.fire({
                icon: 'success',
                title: 'Genial!',
                confirmButtonColor: '#71B641',
                text: 'El comentario fue borrado con éxito!', //Poner el mensaje del backend
            });
        }
        catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                confirmButtonColor: '#71B641',
                text: "Algo salió mal", //Poner el mensaje del backend
            });
        }
    }

    const handleDelete = () => {
        Swal.fire({
            title: 'Seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#71B641',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar',
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                fetchDeleteComment();
            }
        })
    }

    return (
        <article className="my-2 comment-border p-3 rounded-3 w-100">
            <div className="d-flex justify-content-between flex-wrap position-relative">
                <div className="d-flex gap-3 flex-column flex-md-row align-items-md-center justify-content-md-between">
                    <div className="d-flex comment-header justify-content-start align-items-center gap-1 gap-md-3">
                        <div className="comment-header-portrait">
                            <img src={comment.userId.photo.url || UserPhoto} alt="profile img" className="comment-header-img"/>
                        </div>
                        <h3 className="comment-username">{comment.userId.username}</h3>
                    </div>
                    <div className="d-flex align-items-center">
                        {
                            stars.map((star,index) => {
                                if(star === "fill") return <img src={Star} alt="filled star" key={index}/>;
                                if(star === "half") return <img src={HalfStar} alt="half star" key={index}/>;
                                if(star === "empty") return <img src={StarEmpty} alt="empty star" key={index}/>;
                            })
                        }
                    </div>
                </div>
                <div className="delete-comment-button">
                    {
                        (loggedUser && (comment.userId.email === loggedUser.email))&&<img src={Delete} alt="delete comment" onClick={handleDelete} className="trash"></img>
                    }
                </div>
            </div>
            <div className="my-3">
                <p>{comment.text}</p>
            </div>
        </article>
    );
}

export default Comment;