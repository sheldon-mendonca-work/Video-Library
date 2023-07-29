import CategoryProductCard from '../ProductCard/CategoryProductCard';
import PlayListCard from '../ProductCard/PlayListCard';
import VideoProductCard from '../ProductCard/VideoProductCard';
import './ProductListCard.css';

export default function ProductListCard (props){
    const { data, type } = props;

    return <section className="productlist-section">
        <div className="productlist-list">
            { data.length === 0 && <h3>No items on data...</h3> }
            {
                data.length > 0 && data.map((item) => {
                    if(type === 'category') { 
                        return <CategoryProductCard key={item._id} item={item} /> 
                    }else if(type === 'playlist') { 
                        return <PlayListCard key={item._id} item={item} /> 
                    }else if(type === 'playlistVideo'){
                        return <VideoProductCard key={item._id} item={item} type={type}/>
                    }else {
                        return <VideoProductCard key={item._id} item={item} type={type}/>
                    }
                })
            }
        </div>
    </section>
}