import Python from '../assets/python.svg'
import Pandas from '../assets/pandas.svg'
import Matplotlib from '../assets/matplotlib.svg'
import Git from '../assets/git.svg'
import Html from '../assets/html.svg'
import R from '../assets/R.svg'
import Stata from '../assets/stata.svg'
import Numpy from '../assets/numpy.svg'
import Sklearn from '../assets/scikitlearn.svg'
import Tensorflow from '../assets/tensorflow.svg'
import Seaborn from '../assets/seaborn.svg'
import Css from '../assets/css.svg'
import Typescript from '../assets/typescript.svg'
import Reactsymbol from '../assets/react.svg'
import Jupyter from '../assets/jupyter.svg'
import Colab from '../assets/colab.svg'


interface Props {

}

const Skills_Test = () => {
  return (
      <div className="skills-container" id="skills">
            <h2 className="page-title">Skills</h2>
            <div className= "skills-outer-card">
                <div className= "skills-inner-card">
                    <div className = "row1">
                        <div className="col1"><h2>Stem</h2></div>
                        <div className= "col2"><h2>Leaf</h2></div>
                    </div>
                    <div className="row">
                        <div className="col1"><h2 className = "s-style">Primary Languages</h2></div>
                        <div className= "col2">
                            <div className="icon"><div className="d-style"><img src={Python}></img><span className="caption">Python</span></div></div>
                            <div className="icon"><div className="d-style"><img src={R}></img><span className="caption">R</span></div></div>
                            <div className="icon"><div className="d-style"><img src={Stata}></img><span className="caption">Stata</span></div></div>
                        </div>
                    </div>
                    <div className= "row">
                        <div className="col1"><h2 className = "s-style">Machine Learning</h2></div>
                        <div className= "col2">
                            <div className="icon"><div className="d-style"><img src={Pandas}></img><span className="caption">Pandas</span></div></div>
                            <div className="icon"><div className="d-style"><img src={Numpy}></img><span className="caption">Numpy</span></div></div>
                            <div className="icon"><div className="d-style"><img src={Sklearn}></img><span className="caption">Sklearn</span></div></div>
                            <div className="icon"><div className="d-style"><img src={Tensorflow}></img><span className="caption">Tensorflow</span></div></div>
                        </div>
                    </div>
                    <div className= "row">
                        <div className="col1"><h2 className = "s-style">Visualization</h2></div>
                        <div className= "col2">
                            <div className="icon"><div className="d9 d-style"><img src={Matplotlib}></img><span className="caption">Matplotlib</span></div></div>
                            <div className="icon"><div className="d10 d-style"><img src={Seaborn}></img><span className="caption">Seaborn</span></div></div>
                        </div>
                    </div>
                    <div className= "row">
                        <div className="col1"><h2 className = "s-style">General</h2></div>
                        <div className= "col2">
                            <div className="icon"><div className="d14 d-style"><img src={Jupyter}></img><span className="caption">Jupyter</span></div></div>
                            <div className="icon"><div className="d15 d-style"><img src={Colab}></img><span className="caption">Colab</span></div></div>
                            <div className="icon"><div className="d13 d-style"><img src={Git}></img><span className="caption">Git</span></div></div>
                        </div>
                    </div>
                    <div className= "row bottom">
                        <div className="col1"><h2 className = "s-style">Web</h2></div>
                        <div className= "col2">
                            <div className="icon"><div className="d17 d-style"><img src={Html}></img><span className="caption">HTML</span></div></div>
                            <div className="icon"><div className="d18 d-style"><img src={Css}></img><span className="caption">CSS</span></div></div>
                            <div className="icon"><div className="d19 d-style"><img src={Typescript}></img><span className="caption">Typescript</span></div></div>
                            <div className="icon"><div className="d20 d-style"><img src={Reactsymbol}></img><span className="caption">React</span></div></div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  )
};

export default Skills_Test;