class UserCard extends HTMLElement { // (1)
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = /*HTML*/`
        <div>Nombre:
          <slot name="username"></slot>
        </div>
        <div>Cumpleaños:
          <slot name="birthday"></slot>
        </div>
        <fieldset>
          <legend>Otra información</legend>
          <slot></slot>
        </fieldset>
        `;
    } 
}
customElements.define("user-card", UserCard);