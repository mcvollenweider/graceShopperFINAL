//Replace the photos with yours and add a short bio. -Dan

import React from "react";
import dan from "./images/Daniel_Rivera.jpg";
import aboutUs from "./images/Challenges-of-Fintech-EDM.png";
import evan from "./images/Evan.jpg";
import christian from "./images/Christian.jpg";


function About() {
  return (
    <div>
      <div
        className="bg-image"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28313.jpg?size=626&ext=jpg",
          backgroundSize: "500%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <br></br>
          <br></br>

          <div class="container">
            <div class="row justify-content-start">
              
              <div className="text-white">
              <img
                    src={aboutUs}
                    alt="about us"
                    style={{
                      maxWidth: "40%",
                      height: "auto",
                      maxHeight: "100%",
                    }}
                  />
                <h1 className="row justify-content-center text-white"> About us </h1>
                <br></br>
                <br></br>
                
                <div>
                  {" "}
                  
                  <p className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                 
                </div>
              </div>
            </div>
            <div class="row justify-content-evenly">
              
              <div class="col-4 text-white">
                <div className="img-fluid ">
                  <h1></h1>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <img
                    src={christian}
                    alt="christian"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "100%",
                    }}
                  />
                  <br></br>
                  <br></br>
                  <br></br>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
           
            <div class="row justify-content-evenly">
              <div class="col-4 text-white">
                <div className="img-fluid ">
                  <img
                    src={evan}
                    alt="evan"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "100%",
                    }}
                  />
                  <br></br>
                  <br></br>
                  <br></br>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
              <div class="col-4"></div>
            </div>
            <div class="row justify-content-evenly">
              <div class="col-4 text-white">
                <div className="img-fluid ">
                  <img
                    src={dan}
                    alt="world"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "100%",
                    }}
                  />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default About;
