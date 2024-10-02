import './NavBar.css';

export default function NavBar(){
    return(
        <header className='Nav-bar'>
            <h1 className='name'>Amer Samman</h1>
            <div className='space'></div>
            <ul>
                <li className='btn-navbar'>About</li>
                <li className='btn-navbar'>Experience</li>
                <li className='btn-navbar'>Projects</li>
                <li className='btn-navbar'>Contact</li>
            </ul>
            

        </header>

    ) 
        
    
}