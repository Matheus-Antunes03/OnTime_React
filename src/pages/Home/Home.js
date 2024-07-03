import React, { useState, useEffect } from "react";
import { Start } from "../../components/Start";
import styled from 'styled-components';
import axios from "axios";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer";

const Container = styled.div`
    #cards{
        display: flex;
        justify-content: space-around;
    }
`

export function Home() {
//    const [pokemon, setPokemon] = useState([]);

//    useEffect(() => {
//        const fetchPokemon = async () => {
//            try {
//                const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
//                setPokemon(response.data.results);
//                
//            } catch (error) {
//                console.log(error);
//            }
//        };

//        fetchPokemon();
//    }, []);

//    const Container = styled.div`
//    boby{
 //       background: rgb(255,68,0);
//        background: linear-gradient(90deg, rgba(255,68,0,1) 0%, rgba(255,145,77,1) 100%);
//    }
//`;

    return (
        <>
            <Container>
                <Start/>
                <div id="cards">
                    <Card/>
                    <Card/>
                </div>
                
                <div>
                    <ul>
                        {
    //                        pokemon.map((poke) => {
    //                            return <li>{poke.name}</li>
    //                        })
                        }
                    </ul>
                </div>
                <Footer/>
            </Container>
        </>
    );
}