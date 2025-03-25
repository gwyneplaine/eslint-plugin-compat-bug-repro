globalThis.HTMLElement.attachInternals();

const x = globalThis.HTMLElement;
new x().attachInternals();

const foo = document.createElement('custom-element');
foo.attachInternals();

class y extends HTMLElement {
    cosntructor () {
        this.attachInternals();
    }
}

new y().attachInternals();