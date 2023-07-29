import { useContext } from "react";
import Layout from "../../Layouts/Layout"
import { VideoLibraryContext } from "../../../contexts/VideoLibraryContext";
import ProductListCard from "../../Card/ProductListCard/ProductListCard";

const WatchLater = () => {
    const { videos } = useContext(VideoLibraryContext);

    let videoList = videos.watchLater.map(item => {
        return videos.videos.find(({_id})=>_id === item);
    });

    return <Layout>
        <h2 className='heading2'>Watch Later</h2>
        <ProductListCard data={videoList} type="videos" />
    </Layout>
};

export default WatchLater;