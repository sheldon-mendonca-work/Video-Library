import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import SingleVideoPage from "../Pages/SingleVideoPage/SingleVideoPage";
import ExplorePage from "../Pages/ExplorePage/ExplorePage";
import PlaylistPage from "../Pages/PlaylistPage/PlaylistPage";
import WatchLater from "../Pages/WatchLater/WatchLater";
import SinglePlaylist from "../Pages/PlaylistPage/SinglePlaylist";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/name/:categoryName" element={<CategoryPage />} />
        <Route path="/videos" element={<ExplorePage />} />
        <Route path="/video/:videoID" element={<SingleVideoPage />}/>
        <Route path="/playlist" element={<PlaylistPage />}/>
        <Route path="/playlist/:playlistID" element={<SinglePlaylist />}/>
        <Route path="/watchLater" element={<WatchLater />}/>
        <Route path="*" element={<HomePage />} />
    </Routes>
}

export default AllRoutes;