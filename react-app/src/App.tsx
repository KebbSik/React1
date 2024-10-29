import { useState } from "react";
import "./App.css";
import produce from "immer";
import ExpandableText from "./components/ExpandableText/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxLength={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam
        distinctio praesentium. Inventore sapiente deserunt voluptatum natus,
        exercitationem nulla? Debitis esse ab quo ipsum a facilis nemo molestias
        fuga labore eaque sunt omnis obcaecati magnam blanditiis nihil, unde
        reprehenderit magni accusamus facere ea, libero quaerat tenetur at!
        Voluptate harum omnis et molestiae iusto maxime inventore, fugiat rem
        ipsum tenetur impedit, quaerat, nisi quos aperiam praesentium nulla!
        Consectetur laboriosam dolor repellat distinctio, libero maiores aliquid
        molestiae cupiditate praesentium veritatis ad dolorum. Obcaecati,
        tempora consequuntur repellat ab quis voluptas in eaque, dolorem veniam
        aspernatur unde, et cumque eos aliquid molestiae facere maiores
        consequatur laudantium dolore. Fuga enim consectetur veniam possimus
        omnis provident, aliquam adipisci tempore dicta in quasi beatae maiores
        odit placeat ratione corporis inventore laboriosam dolorem quia sequi
        neque eveniet. Id ducimus voluptas eveniet sunt accusantium possimus
        assumenda earum laudantium delectus dolore est sapiente pariatur quidem
        numquam officiis perferendis recusandae ad cum culpa, officia,
        voluptatum facilis porro placeat quia. Recusandae enim suscipit esse
        quis quae, consequatur neque fugiat, praesentium eligendi voluptate quam
        eaque sapiente animi atque quo est labore, nemo perferendis quidem.
        Omnis, sequi nobis laudantium, temporibus accusantium corrupti numquam
        assumenda inventore, eveniet dignissimos veniam ea quod iure? Ea, amet
        cum!
      </ExpandableText>
    </div>
  );
}

export default App;
