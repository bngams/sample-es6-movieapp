import { AppComponent } from "./app-component.js";

const TEMPLATE = `
    <!-- FORM -->
    <form id="movie-form">
        <!-- Textfiled -->
        <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="movie-title-input">
            <label class="mdl-textfield__label" for="sample1">Text...</label>
        </div>
        <!-- Colored raised button -->
        <button type="button" id="movie-form-submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            OK
        </button>
    </form>
`;

export class MovieForm extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.inputTitle = this.querySelector('#movie-title-input');
        this.submitBtn = this.querySelector('#movie-form-submit');
    }

    bindEvents() {
        this.submitEvent();
    }

    submitEvent() {
        // listen click on submit btn
        this.submitBtn.addEventListener('click', () => {
            // submit logic
            // get value
            let title = this.inputTitle.value;
            // create custom event
            let event = new CustomEvent('add-movie', { detail: title });
            // dispatch event
            document.dispatchEvent(event);
        });
    }


}