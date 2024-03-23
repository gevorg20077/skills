import Skills from '../Skills/Skills'
import './octopus.css'
const Octopus = () => {
  return (
    <div className='container'>
      <div className="octopus">
        <Skills />
        <div className="body"></div>
        <div className="head">
          <div class="eyes"></div>
        </div>
      </div>
      <div className="variants">
        <p className="now">Now</p>
        <p className="aYearLater">1 year later</p>
      </div>
    </div >
  )
}

export default Octopus