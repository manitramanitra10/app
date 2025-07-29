import { Metadata } from "next"

export const metadata: Metadata ={
    title: "Resto SpyZa",
    description: "reserver regarder tout hôtel disponible à Madagascar"
}
export default function ConnexionLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>){
    return(
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}