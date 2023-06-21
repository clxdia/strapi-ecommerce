import Image from "next/image";
import React from "react";
import magazines from "../../../../data/magazines";

export default async function MagazinePage({ params: { magazineId } }) {
  const magazine = magazines.find((magazine) => {
    return magazine.id === magazineId;
  });
  return (
    <main className="mb-[7rem]">
      <div className="w-[100%] h-auto">
        <Image src={magazine.pic} alt="/" className="w-[100%]" />
      </div>
      <div className="md:h-[5rem] h-[6rem] relative bg-coral w-[100%] justify-center mx-auto">
        <div className="bg-background p-5 md:w-[90%] md:mt-[2rem] mt-[2.5rem] w-[90%] left-0 right-0 absolute m-auto  text-center">
          <p className="font-work font-[300] text-[0.8rem]">INSIDER</p>
          <h1 className="font-work font-[500] text-[1.5rem] mt-2">
            {magazine.title}
          </h1>
          <p className="font-cursive text-[0.9rem] mt-2">
            Fugiat ad et ad est deserunt aute aliquip culpa consequat do cillum
            laborum officia.
          </p>
        </div>
      </div>

      <p className="text-center mt-[10rem] text-[0.8rem]">{magazine.date}</p>
      <div className="p-6 font-crimson text-[1.1rem]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          felis hendrerit, hendrerit orci auctor, suscipit sapien. In efficitur
          finibus enim, vitae fringilla diam aliquam aliquam.
          <br />
          <br />
          Cras congue risus eget nulla mollis, quis luctus neque rhoncus. Mauris
          mattis urna non vestibulum sollicitudin. Morbi posuere mollis lacus
          sit amet elementum. Phasellus molestie, orci et bibendum vehicula,
          diam erat ultrices lorem, id rhoncus lacus ipsum vitae libero.
          <br />
          <br />
          Nam feugiat enim quam, posuere imperdiet lorem lacinia in. Maecenas
          accumsan et nisl vel tincidunt. Praesent gravida, tellus eget sagittis
          aliquam, metus urna maximus lectus, nec tempor eros odio vitae sapien.
          Aliquam et augue eu massa imperdiet viverra nec in lorem. In fringilla
          metus a egestas suscipit. Vivamus consectetur pulvinar mauris, sed
          dignissim massa posuere suscipit. Quisque dictum nec felis ut
          molestie. Curabitur vel finibus enim, at pretium sem. Donec dignissim
          rutrum magna sit amet bibendum. Maecenas eget tincidunt eros, at
          pharetra erat. Donec sollicitudin, arcu non condimentum ultrices,
          augue velit lacinia ipsum, ut suscipit sapien ante vitae enim. Duis
          blandit neque sed semper sodales.
          <br />
          <br />
          Cras lectus libero, ullamcorper eu ipsum eget, suscipit finibus orci.
          Sed at facilisis magna. Aenean viverra finibus ipsum non dignissim.
          Proin tempor ligula vitae fermentum pretium. Quisque venenatis congue
          dolor, non dapibus mauris euismod dictum. Donec sed consectetur massa,
          et posuere urna.
          <br />
          <br />
          Curabitur eleifend sapien elit, ut sollicitudin enim sagittis sit
          amet. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Fusce sed eros imperdiet, dignissim
          dolor eu, pretium arcu. Etiam ultrices faucibus metus, a dictum dui
          dapibus id. Curabitur eu orci vel justo vestibulum vestibulum. Mauris
          malesuada erat mattis libero rhoncus, cursus placerat enim
          ullamcorper. Duis dolor sem, blandit id eleifend vel, mollis a sem.
          <br />
          <br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. In gravida nibh eu metus pellentesque
          condimentum. In ut enim tellus.
          <br />
          <br />
          Duis nec vestibulum eros. Nulla faucibus condimentum rhoncus.
          Phasellus id aliquam quam, vel venenatis urna. Aenean in laoreet dui,
          vel facilisis tortor. Vestibulum at massa dui. Nullam eget massa
          massa. In ornare nec lorem nec pulvinar. Maecenas aliquam maximus
          posuere. Donec tincidunt nibh quis sapien accumsan suscipit. Morbi sed
          varius diam. Curabitur pulvinar, mauris id tristique hendrerit, ipsum
          erat dapibus leo, nec ornare dolor quam id metus. Duis porttitor
          ligula eu tellus tempus viverra. Proin velit ante, dignissim mollis
          quam at, faucibus vestibulum orci.
          <br />
          <br />
          Donec sodales, tellus et luctus interdum, purus diam tincidunt sem, in
          condimentum turpis justo scelerisque neque. Ut cursus erat viverra,
          suscipit lectus eu, molestie justo. Curabitur et purus maximus nisl
          hendrerit aliquet bibendum in felis. Vestibulum a lectus non libero
          fermentum ornare. Phasellus ac vehicula ex, eu congue odio.
          Pellentesque nibh dui, consequat et nibh pharetra, scelerisque
          ultricies sem. Aliquam erat volutpat. Nam aliquet fringilla aliquam.
          Pellentesque nec eleifend odio, vitae pharetra diam. Integer quis
          nulla semper, faucibus felis ut, egestas augue. Aliquam eget nulla id
          libero accumsan commodo. Integer eleifend enim in sem faucibus varius.
          <br />
          <br />
          Quisque nec dui et felis porttitor tempor in eget urna. Vestibulum
          ultricies ut turpis porta convallis. Aliquam enim sapien, volutpat ac
          consequat id, imperdiet eget tellus. Nullam pharetra eleifend nulla,
          sit amet rhoncus eros placerat nec.
          <br />
          <br />
          Ut nec tortor molestie, fermentum magna quis, tincidunt nunc. Aliquam
          scelerisque venenatis mi, vel pellentesque mauris consequat in.
          Aliquam eu mauris accumsan, pulvinar enim nec, pulvinar nisl. Nunc
          porta leo at ipsum porttitor, vitae ultrices lacus faucibus. Cras non
          augue sagittis, sollicitudin dui id, tincidunt felis. Proin dictum et
          urna porttitor cursus. Nulla venenatis mattis faucibus. In malesuada
          nulla sed sagittis ornare.
        </p>
      </div>
    </main>
  );
}
