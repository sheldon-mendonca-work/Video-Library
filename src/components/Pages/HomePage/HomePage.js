import { useContext } from 'react';
import Layout from '../../Layouts/Layout';
import { VideoLibraryContext } from '../../../contexts/VideoLibraryContext';
import ProductListCard from '../../Card/ProductListCard/ProductListCard';

const HomePage = () => {
    const { categories } = useContext(VideoLibraryContext);
    
    return <Layout>
        <h2 className='heading2'>Categories</h2>
        <ProductListCard data={categories.category} type='category'/>
    </Layout>
}

export default HomePage;