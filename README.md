 # Pokemon App
 > Website: https://main--stupendous-dasik-cde05e.netlify.app/

 > Problem statment
 Coding Assessment –
Given an API for Pokémon listing. Make two pages in Vue/React. On the first page, display cards for each Pokémon with name and image. On click of the Name of the Pokémon, redirect to second page where some important details of the Pokémon are being displayed like Name, Image, Level, HP, Abilities, Attacks etc.

API link : `https://api.pokemontcg.io/v2/cards?page=1&pageSize=100`
1. Upload the code on Git Hub. Share the link for the same.
2. Deploy your project on some free hosting platforms such as Netlify or Heroku. AWS EC2 will also be fine. Share the URL also.
3. Please write clean codes with proper indention.
4. Please keep in mind that it is a front-end task. Make proper UI and implement proper UX.

BONUS POINTS (Not Mandatory)
It would be great if using the same API, you can enable a pagination on the screen one. Else, you can only display the first 100 Pokémon in the manner asked above.

> # Solving Apporach 

1. create a new react app using `npx create-react-app pokemons`.
2. Make components directories.
3. Create Three functional component and export them in App component .
4. 1st is `Card.js` &  2nd one is `CardDetails.js`.
5. Inside `Card.js` a UI Componenet & other one is show the entire Details of Card.
6. Using Fetch API method to fetch the details using the given link and show all data in `Card.js` component
7. If You click on any card you redirect to `CardDatils.js` and show all the data.

