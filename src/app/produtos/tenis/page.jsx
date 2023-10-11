import Image from 'next/image'
import Link from 'next/link'
export default function Tenis(){
    return(
        <div>
            <h1>Tênis</h1>

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod iure officia minima nulla illum ad culpa unde inventore ex consequatur, repudiandae natus ipsa exercitationem consequuntur neque, obcaecati voluptatem expedita.</p>
                <p><Link href="/">Voltar....</Link> </p>
            </div>



            <figure>
              <Image src = "/imagens/tenis.jpg" alt= "Tênis" width={320}
              height={320}/>

            </figure>
        </div>
    )
}