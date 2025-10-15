import React from "react";
import ai from "../assets/ai.png";
import { useShopContext } from "../contexts/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Ai() {
  let { showSearch, setShowSearch } = useShopContext();
  let navigate = useNavigate();
  function speak(message) {
    let utterence = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterence);
  }
  const speechRecognition =
    window.speechRecognition || window.webkitSpeechRecognition;
  const recognition = new speechRecognition();
  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript.trim();
    if (
      transcript.toLowerCase().includes("search") &&
      transcript.toLowerCase().includes("open") &&
      !showSearch
    ) {
      setShowSearch(true);
      speak("Opening search");
      navigate("/collection");
    } else if (
      transcript.toLowerCase().includes("search") &&
      transcript.toLowerCase().includes("close") &&
      showSearch
    ) {
      setShowSearch(false);
      speak("closing search");
    } else if (
      transcript.toLowerCase().includes("collection") ||
      transcript.toLowerCase().includes("collections") ||
      transcript.toLowerCase().includes("products") ||
      transcript.toLowerCase().includes("product")
    ) {
      speak("Opening collection page");
      navigate("/collection");
    } else if (
      transcript.toLowerCase().includes("aboutus") ||
      transcript.toLowerCase().includes("about") ||
      transcript.toLowerCase().includes("aboutpage") ||
      transcript.toLowerCase().includes("about page")
    ) {
      speak("opening about page");
      navigate("/about");
    } else if (
      transcript.toLowerCase().includes("home") ||
      transcript.toLowerCase().includes("homepage") ||
      transcript.toLowerCase().includes("home page")
    ) {
      speak("Opening home page");
      navigate("/");
    } else if (
      transcript.toLowerCase().includes("caat") ||
      transcript.toLowerCase().includes("kaat") ||
      transcript.toLowerCase().includes("cart")
    ) {
      speak("Opening cart page");
      navigate("/cart");
    } else if (
      transcript.toLowerCase().includes("contact") ||
      transcript.toLowerCase().includes("contacts") ||
      transcript.toLowerCase().includes("contactpage")
    ) {
      speak("opening contact page");
      navigate("/contact");
    } else if (
      transcript.toLowerCase().includes("order") ||
      transcript.toLowerCase().includes("orders") ||
      transcript.toLowerCase().includes("myorders")
    ) {
      speak("Opening Orders");
      navigate("/order");
    } else {
      speak("Try Again");
      toast.error("Try Again");
    }
  };

  return (
    <div className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]">
      <img
        src={ai}
        alt=""
        className="w-[80px] cursor-pointer"
        onClick={() => recognition.start()}
      />
    </div>
  );
}

export default Ai;
