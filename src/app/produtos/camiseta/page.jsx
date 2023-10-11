import Image from 'next/image'
import Link from 'next/link'

export default function Camiseta(){
    return(
        <div>
            <h1> Camiseta</h1>

            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, delectus. Et iusto praesentium accusamus quisquam magni doloremque maxime exercitationem. Totam, at? Quae quam eaque quod atque unde eius libero dolor.</p>
                <p><Link href="/">Voltar....</Link> </p>
            </div>
            <figure>
              <Image src = "/public/imagens/camiseta.jpg" alt= "Camiseta" width={320}
              height={320}/>

            </figure>
        </div>
    )
}