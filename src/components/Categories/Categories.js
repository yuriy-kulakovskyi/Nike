import './Categories.scss';
import workout from './img/workout.png';
import run from './img/run.png';
import football from './img/football.png';
function Categories(){
    return(
        <div className="Categories">
            <p>Buy by category</p>
            <div className='Categories__container'>
            <div className="category__col">
                <div className="category__row">
                    <div className="category__title">
                        <p>WORKOUT</p>
                    </div>
                    <div className="category__pic">
                        <img alt="sport" src={workout}></img>
                    </div>
                </div>
                <div className="category__row">
                <div className="category__pic">
                        <img alt="sport" src={run}></img>
                     
                    </div>
                    <div className="category__title">
                        <p>RUN</p>
                    </div>
                </div>
                <div className="category__row">
                    <div className="category__title">
                        <p>FOOTBALL</p>
                    </div>
                    <div className="category__pic">
                        <img alt="sport" src={football}></img>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Categories;