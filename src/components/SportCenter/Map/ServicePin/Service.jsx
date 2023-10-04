import "./Service.css";

const Service = ({img, isAvaiable, alt}) => {
    return (
        
        <div className="pin rounded-3 mx-2 p-1">
            <img src={img} alt={alt} />
        </div>

    );
}

export default Service;