import { useContext } from "react";
import ProductListCard from "../../Card/ProductListCard/ProductListCard";
import Layout from "../../Layouts/Layout"
import './PlaylistPage.css'
import { VideoLibraryContext } from "../../../contexts/VideoLibraryContext";
import { useParams } from "react-router-dom";

const SinglePlaylist = () => {
    const { playlistID } = useParams();
    const { videos, videoActions } = useContext(VideoLibraryContext);

    const currPlaylist = videoActions.playlist.find(({_id})=>_id === +playlistID)

    let songs = [];

    if(currPlaylist !== undefined){
        songs = currPlaylist.songs.map(item => videos.videos.find(({_id})=>_id === +item))
    }

    return <Layout>
        <div className="playlist-title">
            <div className='playlist-heading'>{currPlaylist?.name}</div>
            <div>{currPlaylist?.caption}</div>
        </div>
        <ProductListCard data={songs} type='playlistVideo'/>
    </Layout>
};

export default SinglePlaylist;