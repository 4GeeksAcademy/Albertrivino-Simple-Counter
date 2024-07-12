import React from 'react';

const Digit = ({ digit1, digit2, digit3, digit4, digit5, digit6, digit7 }) => {
  return (
    <div className="container text-center h-100 mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card">
            <img
              src="https://64.media.tumblr.com/1b2b774ce6f62fddf92aab29d1b3395e/tumblr_ocdanlcs5C1sr18cno1_500.gif"
              className="card-img-top img-fluid"
              alt="..."
              style={{ objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column justify-content-center align-items-center bg-dark text-white">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <i className="fa-regular fa-clock mx-3" style={{ fontSize: "60px", objectFit: "cover" }}></i>
                <h5 className="card-title" style={{ fontSize: "60px", objectFit: "cover" }}>
                  {digit1 % 10}{digit2 % 10}{digit3 % 10}{digit4 % 10}{digit5 % 10}{digit6 % 10}{digit7 % 10}
                </h5>
              </div>
              <p className="card-text" style={{ fontSize: "30px" }}>¡Apresúrate Precioso!</p>
              {/* <a href="#" className="btn btn-primary mt-auto mb-2">Reiniciar contador</a>
              <a href="#" className="btn btn-primary mt-auto mb-2">Pausar contador</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digit;