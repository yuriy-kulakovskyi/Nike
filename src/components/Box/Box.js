import './Box.css'

function Box(props){
    return(
        <div className="Box">
            <div className="Card">
                <div className="Card_h2">
                    <h2>{props.title}</h2>
                    <div>on your first purchase</div>
                    <div className="buy_now">Buy now</div>
                </div>
                <img src={props.img}/>
            </div>
        </div>
    )
}

export default Box;