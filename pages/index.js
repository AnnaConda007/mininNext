import Link from 'next/link'
import Head from 'next/head'
import MainLayout from '/components/mainLayout'

export default function Index() {
    return (
        <MainLayout >
        <Head>
            <title>hello</title>
        </Head>
         <h1>Hello</h1>
            <Link href={'about'} ><p>about</p></Link>
        </MainLayout >

    )
}