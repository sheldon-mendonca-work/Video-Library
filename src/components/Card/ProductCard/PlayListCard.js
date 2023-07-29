import { useNavigate } from 'react-router-dom';
import './ProductCard.css'
import { CrossIcon2 } from '../../Icons';
import { useContext } from 'react';
import { VideoLibraryContext } from '../../../contexts/VideoLibraryContext';

export default function PlayListCard(props){
    const { item } = props;
    const { _id, name, thumbnail, caption } = item;

    const navigate = useNavigate();
    const { dispatchVideoActions } = useContext(VideoLibraryContext);
    const playlistClickHandler = () => {
        navigate(`/playlist/${_id}`);
    }

    const deletePlayListHandler = (event) => {
        event.stopPropagation();
        dispatchVideoActions({type: 'DELETE_PLAYLIST', payload: _id})
    }

    return <div className="productcard-card" onClick={playlistClickHandler}>
        <div className="productcard-img">
            <img src={thumbnail} alt={name} className="productcard-card-img"/>
        </div>
        <div className="playlist-content">
            <div className="playlist-name">{name}</div>
            <div className="playlist-caption">{caption}</div>
        </div>
        <div onClick={deletePlayListHandler}><CrossIcon2 className='productcard-cross' /></div>
    </div>
}