import { Link } from "react-router-dom";

function HeaderApp(){
    return (
        <>
        <nav className="navbar navbar-expand-sm  bg-dark navbar-dark ">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" >Counter Component</Link>
                        {/* <a href="/" className="nav-link" >Counter Component</a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/fruit" className="nav-link">Fruit Component</Link>
                        {/* <a href="/fruit" className="nav-link">Fruit Component</a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/todo" className="nav-link">TODO LIST Component</Link>
                        {/* <a href="/fruit" className="nav-link">Fruit Component</a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/ecommerce" className="nav-link">Ecommerce Component</Link>
                        {/* <a href="/ecommerce" className="nav-link">Ecommerce Component</a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/training" className="nav-link">Training Component</Link>
                        {/* <a href="/ecommerce" className="nav-link">Ecommerce Component</a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/training copy" className="nav-link">TrainingHttp Component</Link>
                        {/* <a href="/ecommerce" className="nav-link">Ecommerce Component</a> */}
                    </li>
                     <li className="nav-item">
                        <Link to="/fake-api" className="nav-link">JSON PLACEHOLDER</Link>
                        {/* <a href="/fruit" className="nav-link">Fruit Component</a> */}
                    </li>   
                </ul>

            </div>
        </nav>
        </>
    );
}

export default HeaderApp;