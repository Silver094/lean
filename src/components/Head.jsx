import './head.css'
import logo from '../assets/user.png'
function Head() {
  return (
    <div className="head">
      <div class="text-container">
        THE <span class="highlight">PRODUCT</span> PLATFORM
    </div>
    <div className='right'>
    <button class="dropbtn">Learn </button>
    <button class="dropbtn">Practice</button>
    <img src={logo} />
    </div>
    </div>
  )
}

export default Head;
