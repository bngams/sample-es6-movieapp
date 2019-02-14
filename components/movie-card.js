import { AppComponent } from "./app-component.js";

const TEMPLATE = `
    <!-- CARD (square) -->
    <div class="movie-card mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
            <h2 class="movie-name mdl-card__title-text">Update</h2>
        </div>
        <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View Updates
            </a>
        </div>
    </div>
`;

export class MovieCard extends AppComponent {

    constructor(movie) {
        super();
        this.movie = movie;
    }

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.movieName = this.querySelector('.movie-name');
    }

    onReady() {
        this.change();
    }

    change() {
        this.movieName.innerHTML = this.movie;
    }
}