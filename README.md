# ![Alt text](https://storage.googleapis.com/www.b8one.com/b8one-smile.svg) B8ONE Tech Team Interview 

```* FrontEnd Coding Challenge```

## Instructions

To get started, first you should clone the repository

```git clone https://github.com/costamatheus97/teste-b8one```

And then run

```npm install``` or ```yarn```

to install the dependencies

## Technology used

* ReactJS, because i like way more using states and components, more functionalities and less code;
* Styled-components, because reutilizing the component makes the code cleaner;
* Axios;

## The Challenge

Build a SPA (Single Page Application) to list all heroes related to a given event name *(Allowing input a list of events should be a plus)* .

User should filter by:
  * Hero name
  * Comic name

User should order by:
  * Event date
  * Comic name
  * Hero name

The list should be paginated by default 20 itens by page and have a default order (descending) by event date.

*An event detail page should be a plus.*

## Validation checklist 

1. **How do you think**

At first I struggled to get the difference between marvel events and comics, so I decided to make it different but with all the functionalities.

• In the homepage I made a search engine in which you can search events, it returns a detailed page of the event with the event thumbnail, description and all featured comics and characters, the comics and characters are clickable and redirects you to its detailed page. To do that i pushed the form value to a state, and joined the state value with '+' to use it as a parameter and get the data of that event from the Marvel API. 

• Then I did a character page with all the characters, which you can filter by comics. I managed to do that by getting the character data from the api and adding +20 or -20 offset as you navigate on the pages, because you are limited to 100 results per API call. As for the filter, I passed the comic id as a prop to the button and then added it to a state with a handleClick function, with the id ready, I used it as a parameter to get the characters related to that comic.

• In the comic page it's basically the same as the character page, but it renders the comics with character filters.

• I also did detailed pages for the events, characters and comics, which you have the thumbnail, name, description and featured comics/characters, the last one is clickable and redirects you to its detailed page.

• All routes are dynamic to make the navigation easier.

2. **Solution**

• Ran out of time and couldn't think of a solution to sort by event properties.

3. **Vulnerability**

• When you filter the comics/characters, the prev page/next page buttons keeps changing the offset by 20, as if it were without filters, easily fixed by adjusting the function with conditionals. 

• The homepage search engine is not checking for errors, also easily fixed by conditionals with the http codes returned by the API.
