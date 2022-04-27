import './App.css';
import React, { useReducer, useState } from 'react';
import Input from './SemiControlledInput'

function reducer(state, action) {
  switch (action.type) {
    case '+魔攻':
      return { ...state, "魔攻": state["魔攻"] + 0.1 };
    case '-魔攻':
      return { ...state, "魔攻": state["魔攻"] - 0.1 };
    case 'set魔攻':
      return { ...state, "魔攻": action.value }
    case '+魔傷':
      return { ...state, "魔傷": state["魔傷"] + 0.1 };
    case '-魔傷':
      return { ...state, "魔傷": state["魔傷"] - 0.1 };
    case 'set魔傷':
      return { ...state, "魔傷": action.value }
    case '+B傷':
      return { ...state, "B傷": state["B傷"] + 0.1 };
    case '-B傷':
      return { ...state, "B傷": state["B傷"] - 0.1 };
    case 'setB傷':
      return { ...state, "B傷": action.value }
    case '+爆傷':
      return { ...state, "爆傷": state["爆傷"] + 0.1 };
    case '-爆傷':
      return { ...state, "爆傷": state["爆傷"] - 0.1 };
    case 'set爆傷':
      return { ...state, "爆傷": action.value }
    case '+終傷':
      return { ...state, "終傷": state["終傷"] + 0.1 };
    case '-終傷':
      return { ...state, "終傷": state["終傷"] - 0.1 };
    case 'set終傷':
      return { ...state, "終傷": action.value }
    case 'set吃滿藥':
      return {
        ...state,
        "魔攻": state["魔攻"] + 0.3,
        "魔傷": state["魔傷"] + 0.3,
        "B傷": state["B傷"] + 0.3,
        "爆傷": state["爆傷"] + 0.3,
      }
    case 'set取消滿藥':
      return {
        ...state,
        "魔攻": state["魔攻"] - 0.3,
        "魔傷": state["魔傷"] - 0.3,
        "B傷": state["B傷"] - 0.3,
        "爆傷": state["爆傷"] - 0.3,
      }
    case 'set滿狀態':
      return {
        ...state,
        "魔攻": state["魔攻"] + 0.3,
        "魔傷": state["魔傷"] + 0.55,
        "B傷": state["B傷"] + 0.25,
        "爆傷": state["爆傷"] + 0.3,
      }
    case 'set取消滿狀態':
      return {
        ...state,
        "魔攻": state["魔攻"] - 0.3,
        "魔傷": state["魔傷"] - 0.55,
        "B傷": state["B傷"] - 0.25,
        "爆傷": state["爆傷"] - 0.3,
      }
    case 'set技能倍率':
      return { ...state, "技能倍率": action.value }
    case 'set表攻':
      return { ...state, "表攻": action.value }
    default:
      throw new Error();
  }
}

function App() {
  const [滿藥, set滿藥] = useState(false)
  const [滿狀態, set滿狀態] = useState(false)
  const [s, dispatch] = useReducer(reducer, {
    "表攻": 30000,
    "魔攻": 1.1,
    "魔傷": 1,
    "B傷": 1,
    "爆傷": 3.4,
    "終傷": 0.5,
    "技能倍率": 1.5
  });

  let finalDamage = s["表攻"] * s["技能倍率"] * (1 + s["終傷"]) * (1 + s["魔傷"]) * (1 + s["魔攻"] + s["技能倍率"] * s["B傷"]) * (1.2 + s["爆傷"])
  let w = {
    "魔攻":
      ((1 + s["魔攻"] + 0.1 + s["技能倍率"] * s["B傷"]) - (1 + s["魔攻"] + s["技能倍率"] * s["B傷"]))
      / (1 + s["魔攻"] + s["技能倍率"] * s["B傷"]) * finalDamage,
    "魔傷":
      ((1 + s["魔傷"] + 0.1) - (1 + s["魔傷"])) / ((1 + s["魔傷"])) * finalDamage,
    "B傷":
      ((1 + s["魔攻"] + s["技能倍率"] * (s["B傷"] + 0.1)) - (1 + s["魔攻"] + s["技能倍率"] * s["B傷"]))
      / ((1 + s["魔攻"] + s["技能倍率"] * s["B傷"])) * finalDamage,
    "爆傷": ((1.2 + s["爆傷"] + 0.1) - (1.2 + s["爆傷"])) / ((1.2 + s["爆傷"])) * finalDamage,
    "終傷": ((1 + s["終傷"] + 0.1) - (1 + s["終傷"])) / ((1 + s["終傷"])) * finalDamage,
  }
  let 卡頂 = finalDamage > 10000000
  let damageStyle = 卡頂 ? { color: "red" } : {}
  return <div>
    <div>
      <label for="滿藥">滿30%藥</label>
      <input type="checkbox" id="滿藥" value={滿藥} onChange={() => {
        if (滿藥) { //取消滿藥
          dispatch({ type: "set取消滿藥" })
        } else { //打勾滿藥
          dispatch({ type: "set吃滿藥" })
        }
        set滿藥(!滿藥)
      }} />
      <label for="滿狀態">滿狀態</label>
      <input type="checkbox" id="滿狀態" value={滿狀態} onChange={() => {
        if (滿狀態) { //取消滿狀態
          dispatch({ type: "set取消滿狀態" })
        } else { //打勾滿狀態
          dispatch({ type: "set滿狀態" })
        }
        set滿狀態(!滿狀態)
      }} />
    </div>
    <div style={{ display: 'flex' }}>
      {
        Object.keys(s).map((key) => {
          return <div key={key} style={{ margin: '20px' }}>
            <div>
              {key !== "表攻" && key !== "技能倍率" ? <button onClick={() => {
                dispatch({ type: `+${key}` })
              }}>
                +
              </button> : <></>}
              {key}
              {key !== "表攻" && key !== "技能倍率" ? <button onClick={() => {
                dispatch({ type: `-${key}` })
              }}>
                -
              </button> : <></>}
            </div>

            <Input value={s[key].toFixed(2)} onChange={(e) => {
              dispatch({ type: `set${key}`, value: Number(e.target.value) })
            }} />
            <br />
            {key !== "表攻" && key !== "技能倍率" ?
              <>+10%可增加 {key !== "表攻" && key !== "技能倍率" ? w[key].toFixed(2) : ""} 傷害</>
              : <></>}
          </div>
        })
      }
    </div>
    <div style={damageStyle}>可能打出的技能傷害: {finalDamage.toFixed(2)}</div>
  </div>

}

export default App;
