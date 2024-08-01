import { useState } from "react";

function Card({id , name ,info ,image ,price ,removeTour}){
 
    const [seemore , setSeemore] = useState(false);

    const  description =  seemore ? info : `${info.substring(0, 200)}...`;
    
    function seemoreHandler(){
        setSeemore(!seemore);
    }

    return(
        <div className="card">
           <div>
            <img src={image} className="image"></img>
           </div>
           <div className="tour-info">      
            <h4 className="tour-name">{name}</h4>
            <h4 className="tour-price">{price}</h4>
          
           <div className="description">
            {description}
            <span onClick={seemoreHandler} className="seemore">
                {seemore ? `See Less` : `See More`}
            </span>
           </div>
           </div>
           <div>
            <button onClick={()=> removeTour(id)} className="btn-red"> 
                Not Intrested
            </button>
           </div>

        </div>
    );

}

export default Card;