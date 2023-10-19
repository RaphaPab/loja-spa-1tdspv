import React from "react"


export default function ProdutoSlug({params})
{
    return(
        <div>
            <h1>
                Produtos: {params.slug}
            </h1>
        </div>

    )
}