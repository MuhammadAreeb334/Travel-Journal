export default function Main(props) {
    return(
        <section className = "container">
            <div className = "img-container">
                <img  className = "main-img" src = {props.item.coverImg} />
            </div>
            <div className = "content-container">
                <div className = "location-container">
                    <i className = "fa-solid fa-location-dot location"></i>
                    <h4 className = "location-title">{props.item.location}</h4>
                    <a href = {props.item.googleMapLocation} target="_blank" className = "googleMap">{props.item.googleMap}</a>
                </div>
                <div>
                    <h1 className = "container-title">{props.item.title}</h1>
                    <h5 className = "date">{props.item.date}</h5>
                    <p className = "text">{props.item.text}</p>
                </div>
            </div>
            
        </section>
    )
}