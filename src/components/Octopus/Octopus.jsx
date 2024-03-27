import Skills from '../Skills/Skills'
import './octopus.scss'
const Octopus = () => {
  return (
    <div className='container'>
      <h1 className='name'>Gevorg Machkalyan</h1>
      <div className="octopus">
        <Skills />
        <div className="octopus__eyes"></div>
      </div>
      <div className="variants">
        <p className="variants__now">Now</p>
        <p className="variants__1_year_later">1 year later</p>
      </div>
    </div >
  )
}

export default Octopus