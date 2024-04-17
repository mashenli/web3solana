import React from "react";
import { useNavigate } from "react-router-dom";

import "./notFound.scss";
import image404 from "@/assets/404.gif";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page NotFoundPage">
      <div className="pageInner">
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div
                    className="four_zero_four_bg"
                    style={{ backgroundImage: `url(${image404})` }}
                  >
                    <h1 className="text-center ">404</h1>
                  </div>

                  <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>
                    <p>the page you are looking for not avaible!</p>
                    <div
                      className="link_404 csp"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Go to Home
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
