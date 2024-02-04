import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Container, Menu, PageBody } from './AppStyled';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import MenuItem from './components/MenuItem/Index.jsx';
import PrivateRoute from './components/PrivateRoute';
import Cart from './components/Cart/Index.jsx';
import 'react-tooltip/dist/react-tooltip.css'

import { Tooltip as ReactTooltip } from 'react-tooltip';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Loja" icon="assets/store.png" link="/" />
                    <MenuItem title="Pedidos" icon="assets/order.png" link="/orders" />
                    <MenuItem title="Meu Perfil" icon="assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <h1>Ola, {name}. <br></br> seja bem-vindo</h1>

                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/orders" element={<PrivateRoute><div>Pedidos</div></PrivateRoute>} />
                        <Route path="/profile" element={<PrivateRoute><div>Perfil</div></PrivateRoute>} />
                        <Route path="/tela2/:nome" element={<Tela2Screen />} />
                    </Routes>
                </PageBody>
                <Cart />
                <ReactTooltip id="tip-top" place="top" effect="solid"/>
                <ReactTooltip id="tip-right" place="right" effect="solid"/>

            </Container>
        </BrowserRouter>
    );
}
