import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    #footer{
        margin-top: 100px;
        width: 100%;
        height: 400px;
        border-radius: 70px 70px 0 0;
        background: rgb(255,68,0);
        background: linear-gradient(90deg, rgba(255,68,0,1) 25%, rgba(255,165,110,1) 95%);
    }
`

export function Footer() {
    return (
        <>
            <Container>
                <div id="footer">
                </div>
            </Container>
        </>
    );
}