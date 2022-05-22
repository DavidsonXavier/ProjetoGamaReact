import React from "react";
import { Link } from "react-router-dom";

import * as S from './HeaderStyled'

export default function Header() {
    return (
        <S.cabecalho id="cabecalho">
            <S.nav>
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/repos'}><li>Repositorio</li></Link>
                </ul>
            </S.nav>
        </S.cabecalho>
    )
}