export default function Footer() {
    return (
        <div style={{
            height: "15vh",

            paddingTop: "1rem",
            paddingBottom: "1rem",
            // backgroundColor: "#264ECA"
            backgroundColor: "#264ECA"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 1rem 0",
                // marginLeft : "20px",
                // marginRight : "20px",
                height: "100%",
                alignItems: "center",
            }}>
                <div style={{
                    width: "70%",
                    color :"white"
                }}>

                    <p style={{
                        fontSize: "0.6rem"
                    }}>
                        © Balai Bahasa Provinsi Sulawesi Selatan
                    </p>
                    <p style={{
                        fontSize: "0.6rem"
                    }}>
                        Badan Pengembangan dan Pembinaan Bahasa,
                        Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
                       
                    </p>
                    <p style={{
                        fontSize: "0.6rem"
                    }}>
                     bekerja sama dengan Program Studi Informatika Universitas Muhammadiyah Makassar   
                    </p>
                </div>
               
            </div>
        </div>
    )
}