import GalleryItem from '../GalleryItem/GalleryItem';
import {ImageList, ImageListItem} from '@mui/material';

function GalleryList ({galleryList, addLike}) {
    console.log('GalleryList', galleryList);
    return (
        <div>
            <h1>These are a few of my favorite things!</h1>
            {galleryList.map((pic) => (
                <GalleryItem
                    key={pic.id}
                    pic={pic}
                    addLike={addLike}
                />
            ))}
        </div>
    )
};

export default GalleryList;


