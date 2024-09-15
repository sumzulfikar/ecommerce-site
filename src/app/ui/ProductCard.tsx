import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import data from "../lib/product-data.json"

function ProductCard() {
    return (
        <>
            {data.map((product: any, index: number) => (
                <Card shadow="sm" key={index}>
                    <CardHeader>{product.title}</CardHeader>
                    <CardBody className="overflow-visible p-0">{product.description}</CardBody>
                    <CardFooter className="text-small justify-between">{product.priceOriignal}</CardFooter>

                </Card>)
            )}
        </>
    )
}

export default ProductCard;