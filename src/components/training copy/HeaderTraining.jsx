import { Link, Outlet } from "react-router-dom";

function HeaderTraining(){
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-light">
            <div className="container-fluid">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link to="/training/venue-list" className="nav-link" >VENUE LIST</Link>
                        {/* <a href="/" className="nav-link" >Counter Component</a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/training/venue-add" className="nav-link">VENUE ADD</Link>
                        {/* <a href="/fruit" className="nav-link">Fruit Component</a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/training/cohort-list" className="nav-link">COHORT LIST</Link>
                        {/* <a href="/fruit" className="nav-link">Fruit Component</a> */}
                    </li>
                    <li className="nav-item">
                        <Link to="/training/cohort-add" className="nav-link">COHORT ADD</Link>
                        {/* <a href="/fruit" className="nav-link">Fruit Component</a> */}
                    </li>  
                                    
                </ul>

            </div>
        </nav>
        <Outlet></Outlet>
        </>
    );
}

export default HeaderTraining;