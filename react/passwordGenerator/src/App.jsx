/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(character);
    }

    setPassword(pass)

  }, [length, number, char, setPassword]);

  const copyToClipBoard=useCallback( ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password] )

  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto text-center shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyToClipBoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            COPY
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center justify-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Numbers</label>

            <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Characters</label>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
