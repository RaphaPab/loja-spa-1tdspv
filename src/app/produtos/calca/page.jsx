import Link from 'next/link'
import Image from 'next/image'


export default function Calca(){
    return(
        <div>
            <h1> Calça</h1>

            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, delectus. Et iusto praesentium accusamus quisquam magni doloremque maxime exercitationem. Totam, at? Quae quam eaque quod atque unde eius libero dolor.</p>
                <p><Link href="/">Voltar....</Link> </p>
                <figure>
              <Image src = "/imagens/jeans.jpg" alt= "Calça Jeans" width={320}
              height={320}/>

            </figure>
            </div>
        </div>

    )
}