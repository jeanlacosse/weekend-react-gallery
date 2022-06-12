# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).


TODO
    [x] npm install
        [x] add nodemon npm install nodemon --global
    [x] npm run server/client

[x]IMGS
    [x] add some to the public/images file
        [x] 100x100 px best size
        [x]modify modules/data.js with:
            [x] id, title, description, path for

[x] components create
    [x] app
    [x] export each and import into app
    [x] GalleryList
        [x] create UL list and add item component
            [x] map over the array
    [x] GalleryItem
        [x] create LI to place into the list

[]APP
    [x]Axios.get from /gallery
        [x]pulls the items from the array
            [x] runs the GalleryList .map, which runs the Gallery Item 
                [x] appends all to DOM
    
    [x] imgItem onClick conditional rendering to show description I made for it
        [x] may need to use true false boolean onClick for info
    [x] may want to create a component for the like button 
        [x] axios.put to update like count
            [x] update gallery to represent total likes

   
STRETCH
[x] move data into SQL file
    [X] DB react_gallery
    [X] Create sql file to store that info
        [X] create table 'gallery'
        [X] values (id, path, description, likes)
    [x] pool.query w/ sqlText to get from DB

[x] form component 
    [x] able to add a new gallery item
        [x] needs all input fields of the DB
    [x] axios post
    [x] router.post + pool.query

[] Delete component
    [] add btn into galleryItem for delete
    [] deconstruct to send back deleted id
        [] axios delete + router.delete + pool.query

[] material UI
    [] source in html
    [] use their componenets to add styling

[] Update README File