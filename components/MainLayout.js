import Link from 'next/link'
export default function MainLayout({children}){
    return(
        <>
        <nav>
                <Link href={'/about'}><p>MainLayout</p></Link> 
        </nav>
        <main>
            {children}
        </main>
        </>
    )
}

/*
 */