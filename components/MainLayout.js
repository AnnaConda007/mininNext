import Link from 'next/link'
export default function MainLayout({children}){
    return(
        <>
        <nav>
                <Link href={'/about'}><p>Вот этот текст не отслеживается при его изменении</p></Link> 
        </nav>
        <main>
            {children}
        </main>
        </>
    )
}

/*
 */