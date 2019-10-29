import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
       menuStatus: 'menu-close',
    }


  
      
    }
    handleClick =e=>{
      if(this.state.menuStatus === "menu-close"){
        this.setState({menuStatus:"menu-open"})
      } else {
        this.setState({menuStatus:"menu-close"})
      }

  }

  render(){
  return (
    <header>
      <nav className="nav_div">
          <h1 className='title'>Start Bootstrap</h1>
          <div className='ham_nav' onClick={this.handleClick}>
            <h4>Menu</h4>
            <img className='ham' src="https://icon-library.net/images/menu-icon-white-png/menu-icon-white-png-27.jpg"></img>
          </div>
          <ul>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
      </nav>
      <menu id='menu' className={this.state.menuStatus} >
        <ul className="dropdown-menu">
        <li>Services</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Team</li>
        <li>Contact</li>   
        </ul>
    </menu>
    <section>
      <h2>Welcome To Our Studio!</h2>
      <h1 className='greeting'>IT'S NICE TO MEET YOU</h1>
      <button className="tellmemore">TELL ME MORE</button>
    </section>
   
    </header>
  );
}
}

export default App;
