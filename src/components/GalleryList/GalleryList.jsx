import GalleryItem from '../GalleryItem/GalleryItem';
import {ImageList, ImageListItem} from '@mui/material';
import GalleryForm from '../GalleryForm/GalleryForm'

function GalleryList ({galleryList, addLike, addNewPic, deletePic}) {
    console.log('GalleryList', galleryList);
    return (
        <div>
            <GalleryForm 
                addNewPic={addNewPic}
            />
            <h1 className="likeText">These are a few of my favorite things!</h1>
            <ImageList className="container" sx={{ width: 1500, height: 1350 }} variant="masonry" cols={3} gap={8}>
                {galleryList.map((pic) => (
                    <GalleryItem 
                        key={pic.id}
                        pic={pic}
                        addLike={addLike}
                        deletePic={deletePic}
                    />
                ))}
            </ImageList>
        </div>
    )
};

export default GalleryList;



