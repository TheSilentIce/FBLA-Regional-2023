import "../css/InformationSlide.css";

function InformationSlide( {title, information, img} ) {
    return (
        <>

            <h3 className="information-slide-title">
                { title }
            </h3>
            <div className="information-slide-container">
                <div>
                    {information}
                </div>
                <img src={img} className="information-slide-image"></img>
            </div>

        </>
    )
}

export default InformationSlide;