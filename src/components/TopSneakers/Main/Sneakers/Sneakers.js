import './Sneakers.scss';
import ArrowTop from './arrowtop.svg';
function Sneakers(props){
    return(
        <div className="Sneakers">
            <div className="sneakers__row">
                <div className="card__sneakers">
                    <div className="card__main">
                    <div className="card__pic">
                    <img alt="shoe" src={props.img}></img>
                    </div>
                    <div className="sneakers__info">
                    <h4>{props.title}</h4>
                    <div className="card__row">
                    <p className="price__sneakers">{props.price}</p>
                    <div className="btn">
                        <img src={ArrowTop} alt="arrow top">

                        </img>
                    </div>
                    </div>
                    </div>
                    </div>  
                

                </div>
            </div>
        </div>
    )
}
export default Sneakers;