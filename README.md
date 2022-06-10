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
    
    [] imgItem onClick conditional rendering to show description I made for it
        [] may need to use true false boolean onClick for info
    [] may want to create a component for the like button 
        [] axios.put to update like count
            [] update gallery to represent total likes

   

[] Update README File