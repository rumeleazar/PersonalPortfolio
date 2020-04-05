import recipeShare from "../images/RecipeShare.JPG";
import projectPortfolio from "../images/Portfolio.JPG";
import budgetApp from "../images/BudgetApp.JPG";
import movieHunt from "../images/moviehunt.JPG";

const ProjectList = [
  {
    id: 1,
    projectName: "Recipe Share",
    imageURL: recipeShare,
    projectDescription:
      "RecipeShare is a simple CRUD website project where you can create and share your recipes. This project is created using Flask as the backend and HTML,CSS, JavaScript, and jQuery on the front-end. ",
    github: "https://github.com/rumeleazar/FlaskSampleProject",
    site: "http://recipeshare.glitch.me/",
  },

  {
    id: 2,
    projectName: "Movie Hunt",
    imageURL: movieHunt,
    projectDescription:
      "This is a movie searching website created using REACT and is powered by the TMBd API. All data from that website came from the API. This project improved my REACT skils and introduced me to REACT router",
    github: "https://github.com/rumeleazar/MovieHunt",
    site: "https://mvhunt.netlify.com/",
  },

  {
    id: 3,
    projectName: "Personal Portfilio Website",
    imageURL: projectPortfolio,
    projectDescription:
      "Yes, this portfolio itself is also one of my personal projects. This portfolio is the showcase of my skills and project and is created using ReactJS and is my practice project while learning React",
    github: "https://github.com/rumeleazar/PersonalPortfolio",
  },

  {
    id: 4,
    projectName: "Budgetting App",
    imageURL: budgetApp,
    projectDescription:
      "This project is a clone of the budgetting app from a udemy course. The UI is just the same as that in the course, but the javascript code that is making the app function is 100% created by me",
    github: "https://github.com/rumeleazar/JavaScriptSimpleBudgettingApp",
    site: "https://dailybudgetcalculatorapp.netlify.com",
  },
];

export default ProjectList;
