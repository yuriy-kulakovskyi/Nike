import './Main.scss';
import Sneakers from './Sneakers/Sneakers';
import ArrowRight from './img/arrowright.svg';
import ArrowLeft from './img/arrowleft.svg';
const sneakersList=[
    {title:"Blazer Low", price:"$20.99", img:'https://s3-alpha-sig.figma.com/img/401b/5ce4/9679e3ff5f2f10f7f1ca640e5d812a06?Expires=1666569600&Signature=D7KBXWN06Cen~p1LP9C6vHMsXqhDC0kstP134YGWOTjTDVC4HNY2d~DlsxFmcidzv7XkE~Y-qFdhMdM6KD5rHGDsmYP6RhR8Kz2U-8ViBo2FBaYSjDuAyfOz3Jz3Pq0YuswHlo9U1PPvwoYl57R2WtAD~wIcUKuKapT~h12U-4S~QQDwgdTDXlWX0txNl~UI28mGwlwFbWOXNX4DWMbnmSU086A3uDfP8KR163fbZ5amigUJjgukvWbonbbyEX3153qqUoqChTgV1TsKTiC6Q~emS6-bOmwUmUPi1xRsTqRXxjfaoVwNUPT5vKGWQFqPM4h0ZNsN2mFOg9y7PYe4OA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
    {title:"Court Low", price:"$20.99", img:'https://s3-alpha-sig.figma.com/img/106c/edab/b65dc12d785f6c50cfa6fb38077e30c2?Expires=1666569600&Signature=XPL7T6WP4uy1hIxZ04T9dHsGQ-gm~zY1OVoTH1-MGFe6QQwTh1Y8HUCbgkeWw-mpViKgbBDBvDSvXTnOWCuh2zzvfiWctYbkoXF61RqiF4E48QlQyEvJnEQiFth7JT1ri7sy-BIuyeMEZBsKgAbXgphV4zM4XRfEsERYCu5tZQD2BC9T4qai8QHck2OXyV1ejQqSXgpRMzJAlV-aI5rLIY-55nOOTBS4xKkLcl3wlBGxtjgc2ZTMG0tFuzSZrxo6R961TmxEwuRrYMEZZS2bRrRNrpacIC2dla5PWc9H6xHy~a7LboC-Hd~jS7gdI0S9clM8Ahmbo8k89E4s1pKzpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    {title:"Waffle Wmn", price:"$20.99", img:'https://s3-alpha-sig.figma.com/img/1db9/e997/6d9eea47644dda0a980248d3a714f9e5?Expires=1666569600&Signature=BhyeLClWibzvrzITyawqoUtVAFjvJ5spKS--ZBROuhtmpMOWg5HFXghygfpiXM9hOVypjtXbdIW84S67rNCdNL2vP~Ny9ntDOhO2RalxGQxhhTJZ7robHkocXGOdDlul7lL2ogi8-cata3hO29UagM0w4hdTCdliqFMltcd2ABwtYkIse-i5bBQ~jQb~ewz60RXYzWsV~m7sRMtihzpLAiGX4K70K8hNZxyonte~qPaK7KTfpAMr9LW7A-DLNo6e2EK74KeTwDw7YQsWLQJKSizYPHsAls-iBDxYq7NQ90l61BFDmuZyMOxHTXsiOWTaCg89eZ~8be84QW77g3wljw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
];


function Main(){
    return(
        <div className="Main">
            <div className="main__row">
                <h3>Top sneakers</h3>

                <div className="btns__main">
                    <div className="left__btn">
                        <img src={ArrowRight} alt="arrow right"></img>
                    </div>
                    <div className="right__btn">
                        <img alt='arrow left' src={ArrowLeft}></img>
                    </div>
                </div>
            </div>
            <div className="sneakers__container">
                {sneakersList.map(item=> <Sneakers title={item.title} img={item.img} price={item.price} />)}
            </div>
          

        </div>
    )
}
export default Main;