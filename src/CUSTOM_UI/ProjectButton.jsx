import React from "react";

const ProjectButton = () => {
  return (
    <div>
      <style>{`
button {
    cursor: none; 
  }
  
.learn-more {
 position: relative;
 display: inline-block;

 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 background: transparent;
 padding: 0;
 font-size: inherit;
 font-family: inherit;
}
.learn-more {
 width: 12rem;
 height: auto;
}

.learn-more .circleb {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: relative;
 display: block;
 margin: 0;
 width: 3rem;
 height: 3rem;
 background: #282936;
 border-radius: 1.625rem;
}

.learn-more .circleb .icon {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}

.learn-more .circleb .icon.arrowm {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 left: 0.625rem;
 width: 1.125rem;
 height: 0.125rem;
 background: none;
}

.learn-more .circleb .icon.arrowm::before {
 position: absolute;
 content: "";
 top: -0.29rem;
 right: 0.0625rem;
 width: 0.625rem;
 height: 0.625rem;
 border-top: 0.125rem solid #fff;
 border-right: 0.125rem solid #fff;
 transform: rotate(45deg);
}

.learn-more .button-textm {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 padding: 0.75rem 0;
 margin: 0 0 0 1.85rem;
 color: #282936;
 font-weight: 700;
 line-height: 1.6;
 text-align: center;
 text-transform: uppercase;
}

.learn-more:hover .circleb {
 width: 100%;
}

.learn-more:hover .circleb .icon.arrowm {
 background: #fff;
 transform: translate(1rem, 0);
}

.learn-more:hover .button-textm {
 color: #fff;
}`}</style>

      <button className="learn-more ">
        <span className="circleb" aria-hidden="true">
          <span className="icon arrowm"></span>
        </span>
        <span className="button-textm">Explore more</span>
      </button>
    </div>
  );
};

export default ProjectButton;
