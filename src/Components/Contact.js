import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div class="container">
        <h1>Contact</h1>
        <div class="card container">
          <p class="container" align="right">
            <p>
              Nicholas P. Wilde,
              <br />
              No. 1955,
              <br />
              Cypress Grove Lane,
              <br />
              Zootopia.
            </p>
          </p>
          <p class="container" lign="left">
            <p>
              e-mail:
              <br />
              example@email.com
            </p>
            <p>
              Telephone:
              <br />
              555-16-2239
            </p>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
