function Header() {
    return <nav className="orange">
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">
                React Shop
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <a href="https://github.com/milordplus/shop-project" target='_blank' rel="noreferrer">Repo</a>
                </li>
            </ul>
        </div>
    </nav>
}

export {Header}