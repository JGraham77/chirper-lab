import { useState } from "react";
import Card from "./components/Card";
import ChirpForm from "./components/ChirpForm";
import { v4 as uuidv4 } from "uuid";

const App = () => {
    const [chirps, setChirps] = useState([
        {
            id: uuidv4(),
            name: "Mitzi",
            message: "Why is my food not ready!"
        },
        {
            id: uuidv4(),
            name: "Josh",
            message: "This is Chirper!"
        },
        {
            id: uuidv4(),
            name: "Andrew",
            message: "Lunatic is at it again!"
        }
    ]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <ChirpForm chirps={chirps} setChirps={setChirps} />
            </div>
            <div className="row">
                {chirps.map((chirp) => (
                    <Card
                        key={chirp.id}
                        name={chirp.name}
                        message={chirp.message}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;