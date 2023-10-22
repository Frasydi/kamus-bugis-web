import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const nav = useNavigate()
    return (
        <nav style={{
            position: "sticky",
            top: 0,
            left: 0,
            right: 0,
            height: "14vh",
            backgroundColor: "#264ECA"
        }}>
            <div style={{
                // width :"60%",
                display: "flex",
                width :"2rem",
                position :"absolute",
                left : 10,
                top : "50%",
                transform : "translateY(-50%)",
                alignItems :"center",
                gap : ".2rem",
                
            }} >
                <img className="img"  src="/Tutwuri.png" />
                <img className="img" src="/Unismuh.png" />
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
                justifyContent: "space-around"
            }}>

                <div onClick={() => {
                    nav("/?search=")
                }} style={{
                    display: "flex",
                    color: "white",
                    fontWeight: "bold",
                    gap: "1rem"
                }}>
                    <img src="/Vector.png" style={{
                        aspectRatio: "1/1",
                        objectFit: "contain",
                        width : "1rem"
                    }} />
                    <p style={{
                        fontSize: "1rem",
                        fontFamily: "'Poppins', sans-serif"
                    }}>Kamus Bahasa Bugis</p>
                </div>
            </div>
        </nav>
    )
}