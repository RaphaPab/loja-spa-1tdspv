import Image from 'next/image'


export default function Home() {
  return (
    <>
      <h1>HOME</h1>

        <div>
            


            <figure>
              <Image src = "/imagens/roupas.jpg" alt= "Prateleira" width={320}
              height={320}/>

            </figure>
        </div>

    </>
  )
}
