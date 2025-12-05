function HeaderComponent (){
    return <>
        <header className="d-flex justify-content-around p-3">
            <div>
                Logo Comming Soon ...
            </div>
            <div>
                <ul className="list-unstyled d-flex">
                    <li className="me-5">Home</li>
                    <li className="me-5">About</li>
                    <li className="me-5">Shop</li>
                    <li className="me-5">Contact</li>
                </ul>
            </div>
            <div>
                <button className="btn btn-warning">Sign Up</button>
            </div>
        </header>
    </>

}
export default HeaderComponent;