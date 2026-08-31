import { Fragment, useState } from 'react'

import './App.css'

// const searchBar = window.document.querySelector("#searchBar");
// const btn = window.document.querySelector("#btn");
// const result = window.document.querySelector("#result");

function App() {

  const animess = [
    {
      id: 1,
      animeTitle: "Naruto",
      animeReleaseDate: "2002",
      animeReleaseStatus: "Finished"
    },
    {
      id: 2,
      animeTitle: "One Piece",
      animeReleaseDate: "1999",
      animeReleaseStatus: "Ongoing"
    },
    {
      id: 3,
      animeTitle: "Dragon Ball Z",
      animeReleaseDate: "1989",
      animeReleaseStatus: "Finished"
    },
    {
      id: 4,
      animeTitle: "Attack on Titan",
      animeReleaseDate: "2013",
      animeReleaseStatus: "Finished"
    },
    {
      id: 5,
      animeTitle: "Demon Slayer",
      animeReleaseDate: "2019",
      animeReleaseStatus: "Ongoing"
    },
    {
      id: 6,
      animeTitle: "My Hero Academia",
      animeReleaseDate: "2016",
      animeReleaseStatus: "Finished"
    },
    {
      id: 7,
      animeTitle: "Jujutsu Kaisen",
      animeReleaseDate: "2020",
      animeReleaseStatus: "Ongoing"
    },
    {
      id: 8,
      animeTitle: "Death Note",
      animeReleaseDate: "2006",
      animeReleaseStatus: "Finished"
    },
    {
      id: 9,
      animeTitle: "Fullmetal Alchemist: Brotherhood",
      animeReleaseDate: "2009",
      animeReleaseStatus: "Finished"
    },
    {
      id: 10,
      animeTitle: "Hunter x Hunter",
      animeReleaseDate: "2011",
      animeReleaseStatus: "Hiatus"
    }
  ];

  // console.log(animess);

  const [animes, setAnimes] = useState(animess);

  // localStorage.setItem('animes', JSON.stringify(animes));

  const [id, setId] = useState("");
  const [animeTitle, setAnimeTitle] = useState("");
  const [animeReleaseDate, setAnimeReleaseDate] = useState("");
  const [animeReleaseStatus, setAnimeReleaseStatus] = useState("");
  const [editingAnime, setEditingAnime] = useState(null);


  // function handleSubmit1(event) {
  //   event.preventDefault();

  //   const newAnime = [
  //     ...animess,
  //     {
  //       id: Date.now(),
  //       animeTitle: animeTitle,
  //       releaseDate: animeReleaseDate,
  //       releaseStatus: animeReleaseStatus,


  //     }

  //   ]

  //   setAnimes([newAnime])

  //   console.log(newAnime);
  //   console.log(animes);



  // };

  function handleSubmit2(event) {
    event.preventDefault();

    if (editingAnime) {
      const updatedAnime = animes.map((anime) =>
        anime.id === editingAnime.id
          ? {
            ...anime,
            animeTitle: animeTitle,
            animeReleaseDate: animeReleaseDate,
            animeReleaseStatus: animeReleaseStatus
          } : anime

      );


      setAnimes(updatedAnime);
      setEditingAnime(null);
      console.log(animes);  // Entender o porquê desse console.log não está saindo atualizado
      console.log(animes);// Entender o porquê desse console.log não está saindo atualizado

    } else {

      const newAnime = {

        id: id,
        animeTitle: animeTitle,
        animeReleaseDate: animeReleaseDate,
        animeReleaseStatus: animeReleaseStatus

      };

      setAnimes([...animes, newAnime]);

      console.log(newAnime);
      console.log(animes);// Entender também do porquê desse console.log não está saindo atualizado

    }
    console.log(animes);
    setId("");
    setAnimeTitle("");
    setAnimeReleaseDate("");
    setAnimeReleaseStatus("");

  }

  function handleDelete(id) {
    const updatedAnimes = animes.filter(
      anime => anime.id !== id

    );

    setAnimes(updatedAnimes);
    console.log(animes);


  }

  function handleEdit(anime) {
    setId(anime.id);
    setAnimeTitle(anime.animeTitle);
    setAnimeReleaseDate(anime.animeReleaseDate);
    setAnimeReleaseStatus(anime.animeReleaseStatus);

    setEditingAnime(anime);



  }


  return (
    <Fragment>

      <h1>Anime CRUD</h1>
      <p>My React CRUD with Local Storage</p>

      <form onSubmit={handleSubmit2}>
        <label htmlFor="animeId">Anime's Id</label>
        <input type="text"
          name="id"
          id="id"
          placeholder='Write the name of anime... '
          value={id}
          onChange={(event) => setId(Number(event.target.value))}
        />

        <label htmlFor="animeName">Anime Name</label>
        <input type="text"
          name="animeName"
          id="animeName"
          placeholder='Write the name of anime... '
          value={animeTitle}
          onChange={event => setAnimeTitle(event.target.value)} />

        <label htmlFor="releaseDate">Release Date</label>
        <input type="text"
          name="releaseDate"
          id="releaseDate"
          placeholder='Types release date...'
          value={animeReleaseDate}
          onChange={event => setAnimeReleaseDate(event.target.value)} />

        <label htmlFor="releaseStatus">Release Status</label>
        <input type="text"
          name="releaseStatus"
          id="releaseStatus"
          placeholder='Types release status...'
          value={animeReleaseStatus}
          onChange={event => setAnimeReleaseStatus(event.target.value)} />

        <button type="submmit" id='addBtn' > {(editingAnime) ? "Updating Anime" : "Add Anime"}</button>

      </form>

      <section>

        <h2>Anime List</h2>
        {animes.map(anime => (
          <section key={anime.id}>
            <h3>{anime.animeTitle}</h3>
            <p>{anime.animeReleaseDate}</p>
            <p>{anime.animeReleaseStatus}</p>



            <button type="button" onClick={() => handleEdit(anime)}>
              Edit
            </button>

            <button type="button" onClick={() => handleDelete(anime.id)}>
              Delete
            </button>

          </section>

        ))}


      </section>
    </Fragment>

  )
}

export default App
