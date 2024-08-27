import "regenerator-runtime/runtime";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const App = () => {
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const copyToClipBoard = () => {
    setCopied(transcript);
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>
          A Speech-to-Text Converter built with React that allows users to
          transcribe spoken words into written text in real-time. It leverages
          browser APIs for voice recognition and provides a clean, intuitive
          interface for seamless transcription. Ideal for accessibility,
          note-taking, and hands-free tasks...
        </p>

        <div className="main-content">{transcript}</div>

        <div className="btn-style">
          <button onClick={copyToClipBoard}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
