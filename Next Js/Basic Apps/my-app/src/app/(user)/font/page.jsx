export const metadata = {
    title : "Font Page",
    description : "In this page we will how to apply mutile fonts to a next page ... "
}
import { Geist } from 'next/font/google'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
})
 
const geist = Geist({
  subsets: ['latin'],
})

function page() {
    return (
        <>
            <div className={geist.className}>
                This page is to Geist font ...
            </div>
            <div className={roboto.className}>
                This page is to Roboto Font font ...
            </div>
        </>
    )
}

export default page
