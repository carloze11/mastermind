<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]](LICENSE.txt)
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/carloze11/mastermind">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Mastermind</h3>

  <p align="center">
  A <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">code-breaking game</a> originally designed in 1970 by Mordecai Meirowitz.  
    <br />
    <a href="https://github.com/carloze11/mastermind"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/carloze11/mastermind">View Demo</a>
    ·
    <a href="https://github.com/carloze11/mastermind/issues">Report Bug</a>
    ·
    <a href="https://github.com/carloze11/mastermind/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Project Screen Shot][project-screenshot] <!-- (https://example.com) -->

A "Mastermind" clone built using the MERN (MongoDB, Express.js, React, and Node.js) stack. Players are able to create an account and have their game session information stored to the database. The goal of this project was to create a fully functional version of Mastermind to be played in a web browser. This game follows the traditional rules of Mastermind with some caveats. In this clone, the player tries to guess a secret code, represented by different colored marbles, that has been randomly generated using the Random Generator API. The player makes guesses, and the game provides feedback in the form of black and white marbles, indicating the number of correct marbles in the correct position and the correct marble in the wrong position, respectively. The player has ten attempts to guess the correct code before time runs outs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![MongoDB][mongodb.com]][mongodb-url]
-   [![Express][express.js]][express-url]
-   [![React][react]][express-url]
-   [![Node][node.js]][node-url]
-   [![JavaScript][javascript.com]][javascript-url]
-   ![html5]
-   ![css3]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these next steps.

### Prerequisites

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/carloze11/mastermind.git
    ```
2. Change directory to the backend
    ```sh
    cd backend
    ```
3. Install NPM packages
    ```sh
    npm install
    ```
4. Enter your desired port, MongoDB connection string, and JWT secret in `.env`
    ```js
    PORT = "ENTER PORT VALUE";
    MONGO_URI = "ENTER CONNECTION STRING";
    SECRET = "ENTER JWT SECRET";
    ```
5. Start the server
    ```sh
    npm run dev
    ```
6. Start a new terminal and change directory to the frontend
    ```sh
    cd frontend
    ```
7. Install NPM packages
    ```sh
    npm install
    ```
8. Run the app
    ```sh
    npm run start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [ ] Allow users to delete account
-   [ ] Change game difficulty
-   [ ] Allow for 2-player sessions
-   [ ] Add marble placement sounds

See the [open issues](https://github.com/carloze11/mastermind/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Carlos A. Estrada - [@carlosestrawda](https://twitter.com/carlosestrawda) - cestrada1109@gmail.com

Project Link: [https://github.com/carloze11/mastermind](https://github.com/carloze11/mastermind)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   The online community for helping me throughout my 'self-taught' journey!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/carloze11/mastermind.svg?style=for-the-badge
[contributors-url]: https://github.com/carloze11/mastermind/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/carloze11/mastermind.svg?style=for-the-badge
[forks-url]: https://github.com/carloze11/mastermind/network/members
[stars-shield]: https://img.shields.io/github/stars/carloze11/mastermind.svg?style=for-the-badge
[stars-url]: https://github.com/carloze11/mastermind/stargazers
[issues-shield]: https://img.shields.io/github/issues/carloze11/mastermind.svg?style=for-the-badge
[issues-url]: https://github.com/carloze11/mastermind/issues
[license-shield]: https://img.shields.io/github/license/carloze11/mastermind.svg?style=for-the-badge
[license-url]: https://github.com/carloze11/mastermind/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/carlosxestrada
[project-screenshot]: /frontend/public/mastermind-screenshot.png
[node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en/
[express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express-url]: https://expressjs.com/
[npm]: https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white
[npm-url]: https://www.npmjs.com/
[mongodb.com]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/
[react]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[javascript.com]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[javascript-url]: https://www.javascript.com/
[html5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[css3]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
