import { useContext } from "react";
import Layout from "../../Layouts/Layout"
import { VideoLibraryContext } from "../../../contexts/VideoLibraryContext";
import ProductListCard from "../../Card/ProductListCard/ProductListCard";

const ExplorePage = () => {
    const { videos } = useContext(VideoLibraryContext);
    const getVideoData = () => {
        let videoList = videos.videos;
        const search = videos.search.trim().toLowerCase();

        if(search.length > 0){
            videoList = videoList.filter(({title})=>title.toLowerCase().indexOf(search) !== -1)
        }

        return videoList;
    }

    return <Layout>
        <h2 className='heading2'>Explore</h2>
        <ProductListCard data={getVideoData()} type='video' />
    </Layout>
};

export default ExplorePage;