import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action";

function App() {
  const myState = useSelector((state) => state.countNumbers);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App" style={{ background: "black" }}>
        <h1 style={{ color: "white", fontSize: "2.3rem" }}>Redux Practice</h1>
      </div>

      <div
        style={{
          margin: "auto",
          width: "50%",
          border: "2px solid red",
          height: "300px",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "20%",
            padding: "10px",
            marginTop: "30px",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              width: "40px",
              background: "red",
              color: "white",
              fontSize: "1.5rem",
            }}
            onClick={() => dispatch(decNumber())}
          >
            -
          </button>
          <input
            type="text"
            value={myState}
            style={{
              width: "50px",
              textAlign: "center",
              fontSize: "1.5rem",
              margin: "0 10px 0 10px",
            }}
          />
          <button
            style={{
              cursor: "pointer",
              width: "40px",
              background: "blue",
              color: "white",
              fontSize: "1.5rem",
            }}
            onClick={() => dispatch(incNumber())}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
