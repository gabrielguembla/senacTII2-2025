import { Fragment, useState } from 'react'

import './App.css'

const searchBar = window.document.querySelector("#searchBar");
const btn = window.document.querySelector("#btn");
const result = window.document.querySelector("#result");

function App() {

  const animes = [
    {
      id: 1,
      animeTitle: "Naruto",
      releaseDate: "2002",
      releaseStatus: "Finished"
    },
    {
      id: 2,
      animeTitle: "One Piece",
      releaseDate: "1999",
      releaseStatus: "Ongoing"
    },
    {
      id: 3,
      animeTitle: "Dragon Ball Z",
      releaseDate: "1989",
      releaseStatus: "Finished"
    },
    {
      id: 4,
      animeTitle: "Attack on Titan",
      releaseDate: "2013",
      releaseStatus: "Finished"
    },
    {
      id: 5,
      animeTitle: "Demon Slayer",
      releaseDate: "2019",
      releaseStatus: "Ongoing"
    },
    {
      id: 6,
      animeTitle: "My Hero Academia",
      releaseDate: "2016",
      releaseStatus: "Finished"
    },
    {
      id: 7,
      animeTitle: "Jujutsu Kaisen",
      releaseDate: "2020",
      releaseStatus: "Ongoing"
    },
    {
      id: 8,
      animeTitle: "Death Note",
      releaseDate: "2006",
      releaseStatus: "Finished"
    },
    {
      id: 9,
      animeTitle: "Fullmetal Alchemist: Brotherhood",
      releaseDate: "2009",
      releaseStatus: "Finished"
    },
    {
      id: 10,
      animeTitle: "Hunter x Hunter",
      releaseDate: "2011",
      releaseStatus: "Hiatus"
    }
  ];

  console.log(animes);

  const [searchQuery, setSearchQuery] = useState('');



  const filterAnimes = animes.filter(anime => {

    return anime.id.includes(Number(searchQuery));


  });




  return (
    <>
      <form action="">
        <label htmlFor="searchBar"></label>
        <input type="text" name="searchBar" id="searchBar" placeholder='Search by Id' onChange={(e) => setSearchQuery(e.target.value)}/>

        {/* <button type="button" id='button' >Pequisar</button> */}

      </form>

      <section>
        <h2>Animes Informations</h2>

        <div id="result">


        </div>



      </section>



    </>





  )
}

export default App
