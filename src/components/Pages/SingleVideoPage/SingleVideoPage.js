import '../../Layouts/RightBar.css';
import './SingleVideoPage.css'
import { useContext } from 'react';
import Layout from '../../Layouts/Layout';
import { VideoLibraryContext } from '../../../contexts/VideoLibraryContext';
import { useParams } from 'react-router-dom';
import ColumnProductList from '../../Card/ColumnProductList/ColumnProductList';
import { BinIcon, Clock2Icon, ClockIcon, CrossIcon, EditIcon, PenIcon, PlayListAddIcon, PlayListIcon, PlusIcon } from '../../Icons';
import { Box, ChakraProvider, Flex, Input } from '@chakra-ui/react';
import {
    Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor, Portal, Button} from '@chakra-ui/react'

const SingleVideoPage = () => {
    const { videoID } = useParams();
    const { videos, dispatchVideos, videoActions, dispatchVideoActions } = useContext(VideoLibraryContext);

    const currVideo = videos.videos.find(({_id})=> 
        _id === +videoID
    );

    const presentInWatchList = videos.watchLater.find(item => item === +videoID);
    const moreVideoList = videos.videos.filter(({_id})=>_id !== +videoID).slice(1,6);

    const watchListClickHandler = (event) => {
        event.stopPropagation();
        if(!presentInWatchList){
            dispatchVideos({type: 'ADD_TO_WATCHLIST', payload: currVideo._id});
        }else{
            dispatchVideos({type: 'REMOVE_FROM_WATCHLIST', payload: currVideo._id});
        }
    }

    let videoNotes = [];
    for(let key in videoActions.notes){
        if(key === videoID){
            videoNotes = videoActions.notes[key];
        }
    }

    const editItemHandler = (index) => {

    }

    const deleteItemHandler = (index) => {
        dispatchVideoActions({type: 'DELETE_NOTE', payload: {id: videoID, index: index}});
    } 

    return <Layout>
        <div className='mainDiv'>
            <div className='centerDiv'>
                <div>
                    <iframe src={currVideo?.src} className='yt-embed'>
                    </iframe>
                </div>
                <div className='videoInfo'>
                    <div className='videoInfo-left'>
                        <span className='videoInfo-img-span'>
                            <img src={currVideo?.thumbnail} alt={currVideo?.title} className='videoInfo-img'/>
                        </span>
                        <span>{currVideo?.title}</span>
                    </div>
                    <div className='videoInfo-right'>
                        <div onClick={watchListClickHandler}>
                            { presentInWatchList ? <Clock2Icon className='videoInfo-svg' /> : <ClockIcon className='videoInfo-svg' />}
                        </div>

                        <ChakraProvider>
                        <Popover>
                        <PopoverTrigger>
                            <Button><PlayListAddIcon className='videoInfo-svg' /></Button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>Add to Playlist</PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverBody>
                                <Input type="text" placeholder='Playlist Name'/>
                                <Input type='text' placeholder='Playlist caption'/>
                                <Button colorScheme='blue'>Create New Playlist</Button>
                            </PopoverBody>
                            <PopoverFooter>
                                {
                                    videoActions.playlist.map(item => {
                                        return <Flex alignItems={'center'}>
                                            <Box>{item.name}</Box>
                                            <CrossIcon className='actioncross'/>
                                        </Flex>
                                    })
                                }
                            </PopoverFooter>
                            </PopoverContent>
                        </Portal>
                        </Popover>

                    <Popover>
                    <PopoverTrigger>
                        <Button><PlayListIcon className='videoInfo-svg' /></Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Add Note</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Input placeholder='Enter Note' />
                            <Button colorScheme='blue'>Add Note</Button>
                        </PopoverBody>
                        </PopoverContent>
                    </Portal>
                    </Popover>
                        </ChakraProvider>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <div className='mynotes'>
                        <div className='mynotes-text'>My Notes</div>
                        <div><PlusIcon className='videoInfo-svg' /></div>
                    </div>
                    {videoNotes.length > 0 && videoNotes.map((item, index)=><div className='notes-content' key={index}>
                        <span className='notes-text'>{item}</span>
                        <div className='notes-action'>
                            <div onClick={()=>editItemHandler(index)}><PenIcon className='videoInfo-svg' /></div>
                            <div onClick={()=>deleteItemHandler(index)}><BinIcon className='videoInfo-svg' /></div>
                        </div>
                    </div>)}
                </div>
            </div>

            <div className='rightSideBar'>
                <h3>More Videos:</h3>
                <ColumnProductList data={moreVideoList} />
            </div>
        </div>
    </Layout>
}

export default SingleVideoPage;