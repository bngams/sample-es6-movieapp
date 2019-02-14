import { AppComponent } from "./app-component.js";
import { MovieCard } from "./movie-card.js";

const TEMPLATE = `
<!-- LIST -->
<div id="movie-list">
</div>
`;

export class MovieList extends AppComponent {
    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.movieContainer = this.querySelector('#movie-list');
    }

    bindEvents() {
        this.handleMovieCreateEvent();
    }

    handleMovieCreateEvent() {
        document.addEventListener('add-movie', (e) => {
            console.log('movie to add', e.detail);
            this.movieContainer.appendChild(new MovieCard(e.detail));
        })
    }
}