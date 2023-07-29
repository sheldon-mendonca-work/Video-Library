import { useContext } from "react";
import ProductListCard from "../../Card/ProductListCard/ProductListCard";
import { PlusIcon } from "../../Icons";
import Layout from "../../Layouts/Layout"
import './PlaylistPage.css'
import { VideoLibraryContext } from "../../../contexts/VideoLibraryContext";
const PlaylistPage = () => {

    const { videoActions, dispatchVideoActions } = useContext(VideoLibraryContext);

    return <Layout>
        <div className="playlist-title">
            <div className='playlist-heading'>PlayLists</div>
            <div className='playlist-add-div'><PlusIcon className='playlist-add' /></div>
        </div>
        <ProductListCard data={videoActions.playlist} type='playlist'/>
    </Layout>
};

export default PlaylistPage;