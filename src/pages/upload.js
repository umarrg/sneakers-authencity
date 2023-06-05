import * as React from "react";
import ml5 from 'ml5';



export default function Upload() {
  const [image, setImage] = React.useState("");
  React.useEffect(() => {
    let classifier;

    const loadModel = async () => {
      classifier = await ml5.imageClassifier('MobileNet', () => {
        console.log('Model loaded!');
      });
    };

    const classifyImage = () => {
      const imageElement = document.getElementById('image');
      classifier.classify(imageElement, (error, results) => {
        if (error) {
          console.error(error);
        } else {
          console.log(results);
          // Handle the classification results here
        }
      });
    };

    loadModel();

    // Example usage: classify the image when a button is clicked
    const classifyButton = document.getElementById('classify-button');
    classifyButton.addEventListener('click', classifyImage);

    // Clean up event listeners when the component is unmounted
    return () => {
      classifyButton.removeEventListener('click', classifyImage);
    };
  }, []);


  const handleImage = (e) => {
    classifier.classify(e.target.value, (error, results) => {
      if (error) {
        console.error("err", error);
      } else {
        console.log("yes", results);
        // Handle the classification results here
      }
    });
  };

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores
      vel, et officiis voluptate aut nostrum eum obcaecati cupiditate inventore
      in dolorem dignissimos aliquid quia adipisci sed reprehenderit veritatis
      eaque? s

      <div>
        <img id="image" src="../../public/vercel.svg" alt="Image" />
        <button id="classify-button">Classify</button>
        <input type="file" onChange={handleImage} />
      </div>
    </div>
  );
}
