Developers: 
To start up Live Server

- npm install 
- npm start 

To package project 

- npm run build

++++++++++++

Once the code is ready for public domain, you would need to run the "npm run build" command in
the terminal (must be in the root folder) to package the website

This is needed for the 3D as it will not work due to the public domain not being able to 
locate the 3D model without being packaged. It will appear in local server but public domain 
will show as an empty model. 

The base of the website will be "index.html" located in "./public/index.html" This file is 
important so please leave it in the same folder. Moving "index.html" outside of the public 
folder will break the site. (rewired is an option but everything works as is.)

index.html =
+ The file in the index.html that connects the .js pages will be line 16 
<div id="root"></div>

this will display the "index.js" located in "./src/components/index.js"

The public domain will display everything that is inputed into the "index.js" file. This 
supports the react and babylon.js 3D enviornment. You will noticed that the order of the 
sections are important to how they are displayed on the website. 

If you wanted to move a section above another, you would need to take the surrounding 
<section id="" class="">
<Title>
</section>

For the current layout, the sections should read: 
+ NavBar
    + NavBar.js
    + NavBar.css
+ App (3D Code)
    + App.js
    + App.css
+ Header (Story)
    + Header.js
    + Header.css
+ CollectionStory (GoldenBoyStory)
    + CollectionStory.js
    + CollectionStory.css
+ Utilities 
    + Utilities.js
    + Utilities.css
+ Artwork (Slider)
    + Artwork.js
    + Artwork.css
+ Allocations 
    + Allocations.js
    + Allocations.css
+ RoadMap 
    + RoadMap.js
    + RoadMap.css
+ Footer 
    + Footer.js
    + Footer.css

You will notice that some have different "id" and "className" tags. The sections with "id" 
tags are for menu items, so when a user uses the menu, it will drop down to that matching "id" 
tag. 

The ones with different "section-abc" className have different sytyling, mainly for the height 
of the section. 

On the top of the "index.js" page you will notice the first 12 lines are all import's. These 
are the locations of the pages that we have imported into the main "index.js" page. All of 
these sections will now display under the 'root' id tag that we saw earlier.

The pages will be located in the "components" folder which is located in "./src/components/" 
In the diagram above, the .js and .css files under the page title represent what makes that section. 

The assets for the project are in "assets" located in "./src/assets/" 

In the assets folder you will be able to locate the images used for the website. 


Smart Contract related content can be placed in "smart" located in './src/components/smart'. 

3D related content will be placed in "3D" located in './src/components/smart'. 
