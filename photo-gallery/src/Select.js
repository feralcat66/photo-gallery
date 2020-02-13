import React, { Component } from 'react';

export default class Select extends Component {
    render() {
        return (
            <section className="options">
            <select className="creature-filter" onChange={this.props.handleChangeCallback}>
              <option value="" defaultValue>
                All
              </option>
              <option value="narwhal">Narwhal</option>
              <option value="unicorn">Unicorn</option>
              <option value="rhino">Rhino</option>
              <option value="unilego">Unilego</option>
              <option value="triceratops">Triceratops</option><option value="markhor">Markhor</option><option value="mouflon">Mouflon</option><option value="addax">Addax</option><option value="chameleon">Chameleon</option><option value="lizard">Lizard</option><option value="dragon">Dragon</option>
            </select>
          </section>
        )
    }
}