import React, {useEffect} from 'react';
import logo from '../../static/logoFood.png';

const footerStyle = {
  padding: '20px',
  width: '100%',
  textAlign: 'center',
};

export default function HomePage() {
  return (
    <>
      
      <div className="row">
        <div className="col-md-6"><img src={logo} alt="Logo" /></div>
        <div className="col-md-6">
          <h1 style={{ marginLeft: "20%", paddingLeft: 0, textAlign: 'left', marginTop:"50%", fontSize:55}} >Uber Delivery</h1>
          <h1 > </h1>
          <p style={{marginLeft: "23%"}}>Amazing and Delicious Food in one place!</p>
        </div>
      </div>
      <footer style={footerStyle}>
        <blockquote className="blockquote text-center">
          <p><small>Made in 2022, by Samovila team</small></p>
          <div>
            Uber
          </div>
        </blockquote>
      </footer>
    </>
  );
}
