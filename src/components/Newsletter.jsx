//This code is operational
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'

function Newsletter() {
  return (
    <div>
    <div
          className="bg-image"
          style={{
            backgroundImage:
              "url('https://i2.wp.com/files.123freevectors.com/wp-content/original/115982-abstract-cool-blue-blurred-lights-background-design.jpg?w=800&q=95)",
            height: "66.5vh",
            backgroundSize: "100%",
          }}
        >
       <div
            class="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              height: "70vh",
              backgroundSize: "100%",
            }}
          >
      <div>
        <h1 className="text-center text-white p-5 mb-1 mb-md-0">Subscribe To Our Newsletter!</h1>
        <div className="container">
          <form >
            <div className="row pt-2 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
                <br/>
              </div>
              
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              
              <div className="text-center p-4 mb-1 mb-md-0">
                <button type="button" class="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
          </form>
          </div>
          
        </div>
        </div>
    </div>
    </div>
  )
}

export default Newsletter;

