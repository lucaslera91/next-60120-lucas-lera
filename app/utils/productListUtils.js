import React from "react";
import ProductList from "../Components/ProductList/ProductList";
import AdminItem from "../Components/ui/AdminItem/AdminItem";
import Card from "../Components/ui/Card/Card";
export const productListRenderMap = {
    catalog: Card,
    admin: AdminItem,
}