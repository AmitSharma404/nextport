import Link from "next/link"

export const Footer = () => {
    return (
        <div className="text-center relative py-10">
            <h1 className="sm:text-6xl text-5xl font-normal mask-b-from-20%">AmitLabs.dev</h1>
            <p className="text-xs font-light bottom-0">Build by <Link href={"https://github.com/amitsharma404"} className="underline">Amit Sharma </Link>
            • Amitlabs.dev © {new Date().getFullYear()} • All rights reserved.</p>
        </div>
    )
}