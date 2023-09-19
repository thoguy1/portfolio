import React from 'react';
import './projects.css';
import Project0_Img from '../../assets/project0.png';
import Project1_Img from '../../assets/project1.png';
import Project2_Img from '../../assets/project2.png';
import Project3_Img from '../../assets/project3.png';
import Project4_Img from '../../assets/project4.png';
import Project5_Img from '../../assets/project5.png';


function Projects() {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Projects</h2>
      <span className="projectsDesc">These are the projects I built through out JavaScript Development course.</span>
      <div className="projectRows">
        <div className="projectRow">
          <a href="https://thoguy1.github.io/cat-walk/" target="_blank"><img src={Project0_Img} alt="cat-walk" className="projectsImg" /> </a>
          <p>This simple animation is one of the first projects I did during my JavaScript Development course to showcase a simple animation using JavaScript DOM.</p>
        </div>
        <div className="projectRow">
          <a href="https://thoguy1.github.io/Tic-Tac-Toe/" target="_blank"><img src={Project1_Img} alt="tictactoe" className="projectsImg" /> </a>
          <p>This is a Tic tac toe game which I built for a week 5 project during my JavaScript Development course. It lets players to enter their name and choose the symbol (X or O).</p>
        </div>
        <div className="projectRow">
          <a href="https://thoguy1.github.io/Todolist/" target="_blank"><img src={Project2_Img} alt="todolist" className="projectsImg" /> </a>
          <p>This is a TodoList app which I built for a week 6 project during my JavaScript Development course.</p>
        </div>
        <div className="projectRow">
          <a href="https://thoguy1.github.io/movie-search-db/" target="_blank"><img src={Project3_Img} alt="movie-search" className="projectsImg" /> </a>
          <p>This is a movie search web app that I built as a week 7 project. It lets the user to search movies by entering the movie names or parts of names. I fetches the data from TMDB API using AXIOS library. On week 8, we were required to recreate our movie search app on ReactJS as our project. This is the <a href="https://movie-search-db-react.netlify.app/" className="reactAppLink" target="_blank">React version</a> of this project.</p>
        </div>
        <div className="projectRow">
          <a href="https://thoguy1.github.io/weather-app/" target="_blank"><img src={Project4_Img} alt="" className="projectsImg" /> </a>
          <p>This is a weather app which I built for a week 7 project. It fetches data from Openweathermap API and display the current weather information for the searched city and a forcast for next 10 days.</p>
        </div>
        <div className="projectRow">
          <a href="https://thoguy1.github.io/jsd-final-project/" target="_blank"><img src={Project5_Img} alt="" className="projectsImg" /> </a>
          <p>This is a free to play games search website which I built for my final project. Users can search for game information based on various criteria and keep track of their favourite games using the localStorage feature. The app provides a practical demonstration of working with APIs, handling user interactions, and managing data persistence.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects;