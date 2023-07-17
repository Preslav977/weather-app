# weather-app

## Result

![weather-project](https://github.com/Preslav977/todo/assets/119291608/5a2b456d-19b5-4949-ad7a-d7c9b68abae7)

## About this project

The project idea was to create a simple weather app, that user can search by location for example a city, and it will show in the screen the weather.

Using promises, with queries to fetch the URL from the Weather API, the project itself was not complex.

This is the current result of the Weather application, it was created with vanilla JavaScript, HTML and CSS using a webpack.

Here is the link to the live preview of the project:

https://preslav977.github.io/weather-app/

## 1.Objective

First objective was to fetch the URL query using a function, and that will return a project and after promise was resolved another promise, to create JSON format data.

After the promise was resolved, i will be using the data to process it.

The second objective was a function that will process the data from the API, which i will create a object, which i will handle the values from the API that i will require
later for the DOM.

The next thing is function, to show on the screen the current weather (weather condition, city, local-time, the degrees, feels like degrees, humidity, chance of rain, and wind speed), using textContent of the

variables, that i select using querySelectors to show the values of the screen and the weather conditions using the image src.

Since i am applying solid principle, i create another function, that will handle the data for the seven days weather, with creation of the object that will contain only

the necessary data, and a function that will show on the screen the weather (morning temperatures, afternoon temperatures and the weather conditions)
So if the user wants to input (search for) a city, these function will be called on the submit event.

I created a functionality, that it will search the user location, first by IP using the API query, and after this function returns a resolve promise, i am going to pass as

parameter the input, which then i will fetch another query using it for the weather after it's resolved, it will return the user location city and this data will be used to show on the screen.

That's why i created two separate function to show the current weather and the seven days weather, this will continue to be shown until the Free Plan of API has expired then it will be showing only three days.

Lastly i implemented a feature, that can convert the weather degrees from Fahrenheit to Celsius and vice versa, using the textContents.

The styling of the project was simplistic and i use the weather API icons.

## My personal objectives

My personal objectives in this project were, that i learned to use and understand a promise, even if it's barely surfaced in this project.

I used the new syntax of the asynchronous code, since using then it would be a little awkward, since i had to catch after i resolve the promise to get data, and using catch again.

The interesting thing is using async keyword would turn any function into asynchronous, and will return an promise, which then using await, until this promise has been resolved only then await will executed.

The project was not that hard, but i had some troubles with the promises at first, which i did in tested environment to to understand them better.

I struggled a bit in one problem, that since i had created a global object, and i am getting the data only after the fetch function it's called, i had to some way re-use,

that object to avoid code duplication, which resolved using the same object again, which caused exactly code duplication, but allowed me to show on the screen the weather.
So it was either a scope problem or i didn't know how to split these two functions that are asynchronous.

I was debating if i should create the HTML using JavaScript, to avoid querySelecting all these variables, but then again it saved me time from creating these functions.

## Notes and lessons learned

I learned about the promises even if i have some trouble here and there, i learned one interesting thing that if you return an promise and using then to console log the value, without to call json method
i wasn't able to resolve the promise

The most important thing was also, if i need to resolve a returned promise, i have to resolve this promise and call JSON method to make it this format, so then i would use it.

Using async and await also really interesting, if the promise was not resolved, the await, wouldn't not be called and if i have a variable to save the data, until the promise is not resolved i am not getting this data.

Another interesting this was, that the functionality i created to fetch first using the query of IP for in the Weather IP, which will get and return data depending on the country.

And then, after that promise was resolved, i passed as parameter the input, that is also going to be used in the next function that will fetch, the current weather for the city.

Using await, to create a variables to save the data, with the function calls was really powerful.

Like i said i had a problem, that my object was empty maybe if i did an event or something to process the API data, then to save the values in the object, then i would probably could separate my functions

instead of one big block like right now.

But then again, since i am using for the first time promises, i couldn't divide the function without fetching the data again, which will cause a problem later.

Other that than, it helped me even if i did code duplication, i showed on the screen the weather by first loading the app successfully.

I haven't been using the promise constructor at all, it would be good to see in what scenarios i need to create a XMLHttpRequest.

## Things to improve when visiting the project

The first thing, i would approve is to think off some way to reduce the variables, i need to query to show on the screen the values such as degrees.

Then the problem i had with the functions, which i didn't apply the single responsibility principle there.
|
So i can do two functions one for the weather, that i am going to process the data then for the seven days weather.

And another two function to show on the scree the weather.

I could improve my logic for the promises, since i am thinking it's that good at the moment.

Maybe adding some new icons or animated SVGs in the future for the weather conditions.

And finally to try to apply using the MVC patter since i think i didn't use it very well here.
