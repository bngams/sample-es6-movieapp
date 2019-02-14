import { MovieForm } from "./components/movie-form.js";
import { MovieList } from "./components/movie-list.js";
import { MovieCard } from "./components/movie-card.js";

// public class App
export class App {

    constructor() {
        console.log('Initializing App');
        this.init();
    }

    init() {
        customElements.define('movie-form', MovieForm)
        customElements.define('movie-list', MovieList)
        customElements.define('movie-card', MovieCard)
    }

}

new App();