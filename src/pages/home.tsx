import { gql, useQuery } from '@apollo/client';
import SearchIcon from '@mui/icons-material/Search';
import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import {  useNavigate, useSearchParams } from 'react-router-dom';
// import KelasKata from '../util/kelasKata';



export default function Home() {
    let [searchParams] = useSearchParams();
    const search = searchParams.get("search")
    const [tempSearch, setTempSearch] = useState(search || "")
    const nav = useNavigate()
    const { data, error, loading } = useQuery(gql`
    query SearchQuery($query: String!) {
        search(query: $query) {
            _id
            lexem
            definition
            example
            homonym_number
            phonetic_form
            example_gloss
            part_of_speech
            sense_number
            sub_entry
            related_words_id
            relatedWords {
                _id
                related_words_id
                sub_entry
                definition
               
                
              }
        }
        }

    `, {
        variables: {
            query: search
        }
    })

    useEffect(() => {
        if (search == null) {
            nav("?search=")
        }
    }, [search])

    return (
        <div style={{
            marginTop: "5vh",
            minHeight: "100vh"
        }}>
            <div style={{
                display: "grid",
                placeItems: "center"
            }}>
                <div style={{
                    backgroundColor: "#D9D9D9",
                    boxShadow: "1px 1px 5px 2px rgba(0,0,0,0.5)",
                    paddingTop: ".5rem",
                    paddingBottom: ".5rem",
                    width: "70%",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center"
                }}>
                    <input defaultValue={search || ""} value={tempSearch} onChange={(ev) => {
                        setTempSearch(ev.target.value)
                    }} onKeyDown={(ev) => {
                        if (ev.key == "Enter") {
                            nav("?" + new URLSearchParams({
                                search: tempSearch
                            }).toString())
                        }
                    }} style={{
                        all: "unset",
                        width: "100%",
                        height: "100%",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                        color: "white",
                        fontFamily: "'Poppins', sans-serif"
                    }} />
                    <div style={{
                        justifySelf: "flex-end",
                        marginRight: "1rem"
                    }}>
                        <SearchIcon htmlColor="blue" />
                    </div>
                </div>

            </div>
            <div style={{
                marginRight: "3rem",
                marginLeft: "3rem",
                marginTop: "2rem",
                display :"flex",
                flexDirection :"column",
            }}>
                {
                    tempSearch?.length == 0 ? <></> : loading ?  <Skeleton variant="rectangular" width={"100%"} height={118} /> :error ? <p>{error.message}</p> : data.search.map((el : any) => 
                    <div className="kataItem" onClick={() => {
                        nav("/"+el._id)
                    }} >
                        <p>{el.lexem || el.sub_entry}</p>
                    </div>)
                }
               


                
            </div>

        </div>
    )
}