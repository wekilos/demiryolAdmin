import React from "react";
export default class Myclock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: this.props.rawTime.split(":")[0],
      minutes: this.props.rawTime.split(":")[1],
      seconds: this.props.rawTime.split(":")[2],
      half: this.props.rawTime.split(" ")[1],
      hourRotation: 0,
      minuteRotation: 0,
      secondRotation: 0
    };
  }
  componentWillMount() {
    this.intervalID = setInterval(() => this.updateTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  updateTime() {
    this.setState({
      hours: this.props.rawTime.split(":")[0],
      minutes: this.props.rawTime.split(":")[1],
      seconds: this.props.rawTime.split(":")[2],
      half: this.props.time.split(" ")[1]
    });
  }

  render() {
    // console.log("kokoko", this.props.rawTime.split(" ")[1]);

    return (
      <>
        <div className="w-full flex justify-end fixed z-50 top-[80px] right-1">
          {/* <h1 id="headline">(GMT+5) </h1> */}
          <div id="countdown" className="w-auto flex-inline ">
            <ul className="w-[200px] flex justify-evenly bg-blue text-white h-[40px] leading-[40px] font-sans font-[900] border-blue border-[1px] rounded-[4px] shadow-md shadow-[#c6ddf4]">
            
              <li className="text-[18px]">
                <span id="hours"></span>
                {this.state.hours} 
              </li>
              <li className="text-[18px]">
                <span id="minutes"></span>
                {this.state.minutes}
              </li>
              <li className="text-[18px]">
                <span id="seconds"></span>
                {this.state.seconds}
              </li>
              <li className="text-[18px]">
                <span id="seconds"></span>
                {this.state.half}
              </li >
                <li className="text-[18px]">
                <span id="days">(GMT+5)</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}