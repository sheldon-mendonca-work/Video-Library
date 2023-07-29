import { useContext } from 'react';
import Layout from '../../Layouts/Layout';
import { VideoLibraryContext } from '../../../contexts/VideoLibraryContext';
import ProductListCard from '../../Card/ProductListCard/ProductListCard';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const { videos } = useContext(VideoLibraryContext);

    const getCategory = () => {
        let tempVideos = videos.videos;
        tempVideos = tempVideos.filter(({category})=>(category === categoryName));
        return tempVideos;
    }

    return <Layout>
        <h2 className='heading2'>{categoryName}</h2>
        <ProductListCard data={getCategory()} type='video'/>
    </Layout>
}

export default CategoryPage;