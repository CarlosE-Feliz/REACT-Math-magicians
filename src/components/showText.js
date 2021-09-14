import React from 'react';

class ShowText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <>
        <>
          <h1 className="title">Welcome, Math Magicians!</h1>
        </>
        <div className="showData">
          <p>
            {' '}
            {result}
            {' '}
          </p>
        </div>
      </>
    );
  }
}
export default ShowText;
