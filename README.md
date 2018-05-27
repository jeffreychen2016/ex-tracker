# The Ex-Tracker

## Description
The purpose of creating this app is to practice Jquery, Boostrap, and other web development components.  This app is designed to avoid running into ex, so it needs to display a comprehensive list of all locations that ex frequents.

## Screenshot
![Webpage](https://raw.githubusercontent.com/jeffreychen2016/ex-tracker/master/imgs/Screen%20Shot%202018-05-13%20at%2012.29.25%20PM.png
)

1. Upon arriving at the homepage, you will should see a section with information on your ex. and a list of all locations that your ex frequents, displayed as cards. You will also see a search bar that filters the results of the cards. On keypress or "filter" button, your input will be compared against with card title and description. Neither components match with your input will be filtered out. You will also see 4 button options for "time of day.", they can be also used to filter out location cards.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/ex-tracker/master/imgs/Screen%20Shot%202018-05-13%20at%2012.29.40%20PM.png
)

2. For the search bar, an auto-complete plugin was integrated. You just need to type in a part of location card title name or address, a list of tile card or address that contains your input will pop up. You can select from the drop down, and then either press enter "Enter" key or click on "filter" button to find the location cards that you want to find.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/ex-tracker/master/imgs/Screen%20Shot%202018-05-13%20at%2012.30.17%20PM.png
)

3. You can also find location cards by using the 4 time buttons. Cards that have same time will be kept, and the others will be filtered out.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/ex-tracker/master/imgs/Screen%20Shot%202018-05-13%20at%2012.30.33%20PM.png
)

4. When you hover on the image of each location card , a "View Map" button will slide down, you can click on the button to view the location in Google Map.

![Webpage](https://raw.githubusercontent.com/jeffreychen2016/ex-tracker/master/imgs/Screen%20Shot%202018-05-13%20at%2012.30.44%20PM.png
)

5. A Google Map will be displayed once you click on the 'View Map' button.

## How to Run
1. Clone down this repo and CD into project.
2. Install the http-server plugin via npm.
3. CD into the lib directory and run npm install via command line.
4. In the lib directory run the command grunt.
5. CD to the root of the directory and type hs to start the local http-server.
6. The terminal will give you a URL, such as http://127.0.0.1:8081, enter that address into your web browser.

## Contributors
[Jeffrey Chen](https://github.com/jeffreychen2016)




