import React from "react";

class TogglerC extends React.Component {
  state = {
    isToggled: false
  };

  toggleClick = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    const { isToggled } = this.state;

    return (
      <div>
        <button onClick={this.toggleClick}>
          {!isToggled ? "Показать" : "Скрыть"}
        </button>
        {isToggled && <p>Описание</p>}
      </div>
    );
  }
}

export default TogglerC;
