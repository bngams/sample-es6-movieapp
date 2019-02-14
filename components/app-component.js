// inherit from JS HTMLElement class
export class AppComponent extends HTMLElement {

    // Overriding from HTMLElement
    // called on display
    connectedCallback() {
        this.display(); // template
        this.bindElements(); // binding html elements from template
        this.bindEvents(); // binding events
        this.onReady(); // when component is ready
    }

    display() { }
    bindEvents() { }
    bindElements() { }
    onReady() { }
}