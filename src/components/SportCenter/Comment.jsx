import { useEffect, useState } from "react";
import StarEmpty from "../../assets/star.svg";
import Star from "../../assets/star-fill.svg";
import HalfStar from "../../assets/star-half.svg";

const Comment = ({comment}) => {
    const stars = [];

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


    return (
        <article className="my-2 comment-border p-3 rounded-3 w-100">
            <div className="d-flex justify-content-between">
                <div className="d-flex comment-header justify-content-start align-items-center gap-3">
                    <div className="comment-header-portrait">
                        <img src={comment.user.photo} alt="profile img" className="comment-header-img"/>
                    </div>
                    <h3>{comment.user.username}</h3>
                </div>
                <div className="d-flex align-items-center">
                    {comment.rating}
                    {
                        stars.map((star) => {
                            if(star === "fill") return <img src={Star} alt="filled star" />;
                            if(star === "half") return <img src={HalfStar} alt="half star" />;
                            if(star === "empty") return <img src={StarEmpty} alt="empty star" />;
                        })
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