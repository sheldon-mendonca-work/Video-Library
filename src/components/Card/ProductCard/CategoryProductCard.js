import { useNavigate } from 'react-router-dom';
import './ProductCard.css'

export default function CategoryProductCard(props){
    const { item } = props;
    const { thumbnail, category } = item;

    const navigate = useNavigate();
    
    const categoryClickHandler = () => {
        navigate(`/category/name/${category}`);
    }

    return <div className="productcard-card" onClick={categoryClickHandler}>
        <div className="productcard-img">
            <img src={thumbnail} alt={category} className="productcard-card-img"/>
        </div>
        <div className="productcard-content">
            <h4 className="productcard-card-name">{category}</h4>
        </div>
    </div>
}