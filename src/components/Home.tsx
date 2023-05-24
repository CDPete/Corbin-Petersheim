import Pdf from "../prints/Corbin_Petersheim_Resume.pdf";

interface Props {

  }
  
  const Home = () => {
    return (
        <div className="home-container" id="home">
            <div className="titlecard">
                <h1 className="site-title">Hi, I'm Corbin Petersheim</h1>
                <p className="intro">I'm an aspiring data scientist</p>
                <div className="btns">
                  <a className="link" href= {Pdf} target="_blank"><button className="btn">Resume</button></a>
                  
                  
                  <a className="link" href="#"><button className="btn">Publications</button></a>
                  
                </div>
            </div>
            <div className="icon-scroll"></div>
        </div>
    )
  };
  
  export default Home;
  