import "./SportCenterDetail.css";

const SportCenterDetail = ({sportCenter}) => {
    /*
      const sportCenter = {
    _id: "ObjectId(sportCenter)",
    name: "Sport Center",
    address: "Av. Perón 1226",
    location: `26°48'12.8"S 65°16'44.6"W`,
    photo: "",
    owner: "ObjectId(owner)",
    isActive: true,
  }*/
    
    return (
        <main className="container">
            <h1 className="text-center fs-1 text-green my-4">{sportCenter.name}</h1>
            <section className="d-flex gap-5 flex-column flex-md-row align-items-center">
                <article className="main-picture rounded-3">
                    <img src={sportCenter.photo} alt={`${sportCenter.name} photo`} />
                </article>
                <article>
                    <p>Dirección: {sportCenter.address}</p>
                </article>
            </section>
            <section></section>
        </main>
    );
}

export default SportCenterDetail;