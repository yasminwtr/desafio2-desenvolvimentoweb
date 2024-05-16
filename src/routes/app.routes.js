import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Vagas from "../pages/Vagas";
import Reservar from "../pages/Reservar";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Vagas />} />
            <Route path="/reservar" element={<Reservar />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes;