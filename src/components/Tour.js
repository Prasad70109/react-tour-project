import Card from "./Card";

function Tour({tours ,removeTour}){

    return(
        <div className="container">
            <div>
                <h1 className="title">Plan with Love</h1>
            </div>

            <div className="cards">
            {
                tours.map((tour) => {
                    return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                })
            }
            </div>

        </div>
    );
}

export default Tour;