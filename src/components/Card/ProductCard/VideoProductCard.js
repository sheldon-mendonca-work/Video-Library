import { useContext } from 'react';
import './ProductCard.css'
import { VideoLibraryContext } from '../../../contexts/VideoLibraryContext';
import { Clock2Icon, ClockIcon, CrossIcon2 } from '../../Icons';
import { useNavigate } from 'react-router-dom';

export default function VideoProductCard(props){
    const { item, type } = props;
    const { _id, title, views, thumbnail, category, creator } = item;

    const { videos, dispatchVideos } = useContext(VideoLibraryContext);
    const navigate = useNavigate();

    const presentInWatchList = videos.watchLater.find(item => item === _id);

    const watchListClickHandler = (event) => {
        event.stopPropagation();
        if(!presentInWatchList){
            dispatchVideos({type: 'ADD_TO_WATCHLIST', payload: _id});
        }else{
            dispatchVideos({type: 'REMOVE_FROM_WATCHLIST', payload: _id});
        }
    }

    return <div className="productcard-card" onClick={()=>navigate(`/video/${_id}`)}>
        <div className="productcard-img">
            <img src={thumbnail} alt={title} className="productcard-card-img"/>
        </div>
        <div className="videoproductcard-content">
            <div className="videocard-pic-div">
                <span className="videocard-pic-span">
                    <img src={thumbnail} alt={creator}  className="videocard-pic"/>
                </span>
            </div>
            <div className='videocard-title'>{title}</div>
            <div className='videocard-category'>{category}</div>
            <div className='videocard-views'>{views} views | {creator}</div>
        </div>
        <div className='videocard-watch' onClick={watchListClickHandler}>
            <span>
                { presentInWatchList ? <Clock2Icon className='videocard-svg active' /> : <ClockIcon className='videocard-svg' />}
            </span>
        </div>
        {type !== 'video' && <div><CrossIcon2 className='productcard-cross' /></div>}
    </div>
}