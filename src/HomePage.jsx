import { Link } from 'react-router-dom';
import './HomePage.css'

export default function HomePage() {

    return (
        <div className="homepage-container">
            <h1>Welcome to the Minesweeper Game!</h1>
            <p>Choose your difficulty level to start the game.</p>
            <div>
                <Link to='/rules' className="rules-link">
                    Click Here For Rules!
                </Link>
                <div>
                    <Link to='/game/easy' className="difficulty-link easy">
                        Easy
                    </Link>
                    <Link to='/game/medium' className="difficulty-link medium">
                        Medium
                    </Link>
                    <Link to='/game/hard' className="difficulty-link hard">
                        Hard
                    </Link>
                </div>
            </div>
            
        </div>
    );
}