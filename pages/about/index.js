import { MainLayout } from '/components/mainLayout'
import Router from 'next/router'
export default function About() {
    return (
        <MainLayout>
            <h1>About</h1><button onClick={() => Router.push('/posts')}>
                go to posts
            </button>
        </MainLayout>

    )
}