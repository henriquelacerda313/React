function Layout({children}){
    return(
        
        <div>

    <header>
        <p>meu site</p>
    </header>
        <main>
            {children}
        </main>
    


        </div>
    );
}

export default Layout;