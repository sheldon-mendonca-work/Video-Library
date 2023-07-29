import { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../backend/categories";
import { videos } from "../backend/videos";

export const VideoLibraryContext = createContext();

const initCategoryData = categories;
const initVideoData = videos;

const initVideoState = {
    videos : initVideoData,
    watchLater : [],
    search: "",
}

const initCategoryState = {
    category: initCategoryData
}

const initActionsState = {
    notes: { "19": ["Hello", "New Note"]},
    playlist: [
        {
            _id: 1,
            name: 'Music Videos',
            caption: 'my favourites', 
            thumbnail: 'https://picsum.photos/300/174',
            songs: [ 19, 20, 21]
        }
    ]
}

const videoReducerFunction = (state, action) => {
    
    if(action.type === "ADD_TO_WATCHLIST"){
        const newWatchLater = state.watchLater.concat(action.payload);
        return {...state, watchLater: newWatchLater};
    };

    if(action.type === "REMOVE_FROM_WATCHLIST"){
        const newWatchLater = state.watchLater.filter(item => item !== action.payload)
        return {...state, watchLater: newWatchLater};
    };

    if(action.type === "UPDATE_SEARCH"){
        return {...state, search: action.payload};
    };

    return state;
}

const categoryReducerFunction = (state, action) => {
    switch (action.type) {
        case "value":
            
            break;
    
        default:
            return state;
    }
}

const actionsReducerFunction = (state, action) => {
    if(action.type === "DELETE_NOTE"){
        const newNotes = state.notes[action.payload.id].splice(action.payload.index, 1);
        let newState = state;
        newState.notes[action.payload.id] = newNotes;
        console.log(newState)
        return {...state, state: newState};
    }

    if(action.type === "ADD_NOTE"){
        const present = false;
        for(let key in state.notes){
            if(key === action.payload.id){
                present = true;
            break;}
        }
        return {...state, state: newState};
    }
    return state;
}

export const VideoLibraryProvider = ({children}) => {
    const navigate = useNavigate();

    const [ videos, dispatchVideos ] = useReducer(videoReducerFunction, initVideoState);
    const [ categories, dispatchCategories ] = useReducer(categoryReducerFunction, initCategoryState);
    const [ videoActions, dispatchVideoActions ] = useReducer(actionsReducerFunction, initActionsState);

    return <VideoLibraryContext.Provider value={{ videos, dispatchVideos, categories, dispatchCategories, videoActions, dispatchVideoActions }}>
        {children}
    </VideoLibraryContext.Provider>
};