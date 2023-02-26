import React from "react";
import Header from "../Header/Header";
import "./Body.css";

export default class Body extends React.Component {
  public state = {
    interval: 0,
    count: 15,
    isStarted: false,
  };

  public startTimer = (): void => {
    this.setState({
      isStarted: !this.state.isStarted,
    });

    if (!this.state.isStarted) {
      this.myTimer();
      this.setState({
        interval: Number(
          setInterval(() => {
            this.myTimer();
          }, 1000)
        ),
      });
    } else clearInterval(this.state.interval);
    return;
  };

  public myTimer = (): void => {
    if (this.state.count > 0)
      this.setState({
        count: this.state.count - 1,
      });
    else {
      clearInterval(this.state.interval);
      this.setState({
        count: 15,
        isStarted: !this.state.isStarted,
      });
    }
  };

  public render = (): JSX.Element => (
    <div className="body-container">
      <Header time={this.state.count} />

      <button
        className={`timerStart ${this.state.isStarted ? "isStop" : "isStart"}`}
        onClick={this.startTimer}
      >
        {this.state.isStarted ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
}
