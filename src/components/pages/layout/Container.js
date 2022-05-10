import './style.css'

function Container({ children }) {
    return <main className="container">
        {children}
    </main>
}

export default Container