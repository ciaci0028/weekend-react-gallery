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
            <h1>These are a few of my favorite things!</h1>
            <ImageList className="container" sx={{ width: 1500, height: 1350 }} variant="woven" cols={3} gap={8}>
                {galleryList.map((pic) => (
                <ImageListItem key={pic.id}>
                    <img
                        src={`${pic.path}?w=161&fit=crop&auto=format`}
                        srcSet={`${pic.path}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={pic.description}
                        loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
};

export default GalleryList;



