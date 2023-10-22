import { gql, useQuery } from "@apollo/client"
import { useNavigate, useParams } from "react-router-dom"
import KelasKata from "../util/kelasKata"
import { Skeleton } from '@mui/material';

export default function DetailLema() {
    const param = useParams()
    const nav  = useNavigate()
    const { data, loading, error } = useQuery(gql`
    query getWordId($id : String!){
        word(id: $id) {
          _id
          related_words_id
          lexem
          homonym_number
          sub_entry
          phonetic_form
          part_of_speech
          sense_number
          definition
          example
          example_gloss
          relatedWords {
            _id
            related_words_id
            lexem
            homonym_number
            sub_entry
            phonetic_form
            part_of_speech
            sense_number
            definition
            example
            example_gloss
            relatedWords {
              _id
              related_words_id
              lexem
              homonym_number
              sub_entry
              phonetic_form
              part_of_speech
              sense_number
              definition
              example
              example_gloss
              
            }
          }
        }
      }
      `, {
    variables: {
      id: param.id
    }
  })
    return(
        <div style={{
            minHeight :"100vh"
        }}>
        {
                   loading ?  <Skeleton variant="rectangular" width={"100%"} height={118} /> :error ? <p>{error.message}</p> : <div style={{
                        border: "1px solid black",
                        borderRadius: "1rem",
                        marginBottom :"2rem"
                    }}>
                          

                       
                        <p style={{
                            fontFamily: "'Poppins', sans-serif",
                            textAlign: "center",
                            fontSize: "2rem",
                            fontWeight: "bold"
                        }}>{data.word.lexem || data.word.sub_entry}</p>
                        <p style={{
                            fontFamily: "'Poppins', sans-serif",
                            textAlign: "center",
                            fontSize: "2rem",
                        }}>{data.word.phonetic_form}</p>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "2rem",
                            flexWrap :"wrap"
                        }}>
                            {
                                Object.keys(KelasKata).map((el) => <div style={{
                                    paddingLeft: ".5rem",
                                    paddingRight: ".5rem",
                                    border: "1.5px solid #264ECA",
                                    backgroundColor: el === data.word.part_of_speech ? "#264ECA" : "transparent",
                                    color: el === data.word.part_of_speech ? "white" : "#264ECA",
                                    paddingTop: ".5rem",
                                    paddingBottom: ".5rem",
                                    
                                    
                                }} className='kelasKataItem' >{KelasKata[el as keyof typeof KelasKata]}</div>)
                            }
                        </div>
                        <div style={{
                            marginLeft: "2rem",

                            fontFamily: "'Poppins', sans-serif",
                        }}>
                            <p style={{
                                fontWeight: "bold",
                            }}>Definisi</p>
                            <div>

                                {
                                    data.word.definition.map((el: any, ind: number) => <p>{ind + 1}. {el}</p>)
                                }
                            </div>
                        </div>

                        <div style={{
                            marginLeft: "2rem",
                            marginRight: "2rem",
                            fontFamily: "'Poppins', sans-serif",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around"
                        }}>
                            <div style={{
                                width: "50%"
                            }}>
                                <p style={{
                                    fontWeight: "bold",
                                }}>Contoh</p>
                                <div>

                                    {
                                        data.word.example.map((el: any, ind: number) => <p>{ind + 1}. {el}</p>)
                                    }
                                </div>
                            </div>
                            <div style={{
                                width: "50%"
                            }}>
                                <p style={{
                                    fontWeight: "bold",
                                }}>Arti Contoh</p>
                                <div>

                                    {
                                        data.word.example_gloss.map((el: any, ind: number) => <p>{ind + 1}. {el}</p>)
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            data.word.relatedWords.length > 0 &&<div style={{
                                marginLeft: "2rem",
                                marginRight: "2rem",
                                fontFamily: "'Poppins', sans-serif",
                            }}>
                                <p style={{
                                    fontWeight: "bold",
                                }}>Relasi</p>
                                <div style={{
                                    display :"flex",
                                    flexWrap :"wrap"
                                }}>
                                    {
                                        data.word.relatedWords?.map((el: any, ind: number) => <p onClick={() => {
                                            nav("/"+el._id)
                                        }} style={{
                                            color: "blue",
                                            cursor: "pointer",
    
                                        }} >{el.lexem || el.sub_entry}{ind == data.word.relatedWords.length - 1 ? " " : ","}&nbsp; </p>)
                                    }
                                </div>
                            </div>
                        }
                        
                        {data.word.related_words_id != null &&  <p style={{
                            fontFamily: "'Poppins', sans-serif",
                            textAlign: "center",
                            fontSize: "20px",
                            fontWeight: "bold",
                            color : "blue",
                            cursor :"pointer"
                        }} onClick={() => {
                            nav("/"+data.word.related_words_id)
                        }}> Lihat Asal Lema
                        </p> }


                    </div> 
                }
        </div>
    )
}