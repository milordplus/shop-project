function Footer() {
    return <footer className="page-footer orange lighten-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="https://github.com/milordplus/shop-project" rel="noreferrer" target="_blank">Repo</a>
            </div>
        </div>
    </footer>
}

export {Footer}