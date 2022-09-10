import "./about.css"
import Feature1 from "./feature1";

const About = () => {
  return (
    <>
      <div className="aboutmango">
        <div className="aboutmango1">
          आमों की प्रजाति को मेंगीफेरा कहा जाता है। इस फल की प्रजाति पहले केवल
          भारतीय उपमहाद्वीप <br/>में मिलती थी, इसके बाद धीरे धीरे अन्य देशों में
          फैलने लगी। इसका सबसे अधिक उत्पादन भारत में होता है। यह भारत, पाकिस्तान
          और फिलीपींस में राष्ट्रीय फल माना जाता है<br /> और बांग्लादेश में इसके पेड़
          को राष्ट्रीय पेड़ का दर्जा प्राप्त है।
        </div>
        <div className="aboutmango2">
          हमरे यहाँ सभी प्रकार के आम है<br /> 1.दसहरी <br />2.लंगड़ा <br />3.मालदा<br />5.हाफुस  <br></br>4.चौसा 
        </div>
        
      </div>
      <div className="aboutmango3">
        
      <Feature1 />
      </div>
    </>
  );
};

export default About;
