# Software Engineering vue.js take home exercise

We’ve prepared a small project that is related to the work you would be doing in this position, but slimmed down so that it takes a reasonable amount of time. You’ll have four days to complete the exercise, so you can work on it at your convenience. We anticipate it should take you 3 - 4 hours to complete. 

Feel free to use whatever tools you feel most comfortable with, and let us know if you have any clarifying questions. When you’re finished, add all the Vue.js code you wrote to a GitHub repository. Reviewers should be able to `npm install` on your project and run it locally.  

## The project
We've exposed all the necessary data through APIs (not part of this repo). It's your job to build out the front-end, according to the specifications provided. Clone this repo for a vue.js boilerplate and some components. We've made some assumptions about the structure of this project. If you think it can be improved, feel free to make those changes. 

The designer on the project has created Axure prototypes that provide information around spacing, fonts and font-sizes. The high-fidelity mockups provide the final look and feel. 
*Note: some details might be missing! Work as best you can with this imperfect information. If you get stuck, feel free to reach out.*
 **You only need to build out the areas you see in the high-fidelity mockup.**


## Requirements & considerations
- Use Vue.js to build two pages of this website (Home, and About). Users should be able to use the navigation in the top right corner to travel between pages. The logo should link to the homepage.
- Use a CSS framework. We've imported Bulma, but if you prefer something else, swap it out.
- The content should stack on mobile (be mobile friendly).
- Items that look like links can be empty <a> tags for this assignment, if a link wasn't provided in the endpoint.
- No mobile menu is necessary. 
- Replace this README.md with instructions on how to get your project started.

## Assets
- [Axure prototypes](https://gxyvka.axshare.com/#id=cd771af8-97e7-433d-aad7-9fd6fae9ae9f)
- [High-fidelity mockups](https://drive.google.com/drive/folders/1_uhzX3P2QbcgW-G34YbMU9y7_vDFba7h)

## Endpoints
- [Homepage](https://locations-staging-admin.phila.gov/love-park/wp-json/pages/v2/archive?id=4
)
- [About us](https://locations-staging-admin.phila.gov/love-park/wp-json/pages/v2/archive?id=7
)
- [Contact information](https://locations-staging-admin.phila.gov/love-park/wp-json/locations/v1/connect)
- [Main menu](https://locations-staging-admin.phila.gov/love-park/wp-json/menus/v1/menus/main-menu)

## Local dev 
1. Clone this repo.
2. `npm install`
3. `npm run serve`