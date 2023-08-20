const Comment = ({comment}) => {
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
                    <h3>{comment.rating}</h3>
                </div>
            </div>
            <div className="my-3">
                <p>{comment.text}</p>
            </div>
        </article>
    );
}

export default Comment;