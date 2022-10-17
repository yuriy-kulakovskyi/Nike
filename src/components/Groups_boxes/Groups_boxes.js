import './Groups_boxes.css';
import Box from '../Box/Box';
import ImgOne from './Green.png'
import ImgTwo from './Nike-Shoe.png'

let shoes = [
  {title: "-20% Discount", img: ImgOne},
  {title: "-20% Discount", img: ImgTwo}
];

function Groups_boxes() {
  return (
    <div className="shoes_box">
        {shoes.map(item => <Box title={item.title} img={item.img} price={item.price}/>)}
    </div>
  );
}

export default Groups_boxes;
