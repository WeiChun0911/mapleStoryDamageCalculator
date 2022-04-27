import './App.css';
import React, { useReducer } from 'react';
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
    case 'set技能倍率':
      return { ...state, "技能倍率": action.value }
    case 'setB傷30藥':
      return { ...state, "B傷": state["B傷"] + 0.3 }
    case '取消B傷30藥':
      return { ...state, "B傷": state["B傷"] - 0.3 }
    case 'set爆傷30藥':
      return { ...state, "爆傷": state["爆傷"] + 0.3 }
    case '取消爆傷30藥':
      return { ...state, "爆傷": state["爆傷"] - 0.3 }
    case 'set攻擊30藥':
      return { ...state, "魔攻": state["魔攻"] + 0.3 }
    case '取消攻擊30藥':
      return { ...state, "魔攻": state["魔攻"] - 0.3 }
    case 'set傷害30藥':
      return { ...state, "魔傷": state["魔傷"] + 0.3 }
    case '取消傷害30藥':
      return { ...state, "魔傷": state["魔傷"] - 0.3 }
    case 'setB傷50藥':
      return { ...state, "B傷": state["B傷"] + 0.5 }
    case '取消B傷50藥':
      return { ...state, "B傷": state["B傷"] - 0.5 }
    case 'set攻擊50藥':
      return { ...state, "魔攻": state["魔攻"] + 0.5 }
    case '取消攻擊50藥':
      return { ...state, "魔攻": state["魔攻"] - 0.5 }
    case 'set湯寶3藥':
      return {
        ...state,
        "魔攻": state["魔攻"] + 0.2,
        "魔傷": state["魔傷"] + 0.2,
        "B傷": state["B傷"] + 0.2
      }
    case '取消湯寶3藥':
      return {
        ...state,
        "魔攻": state["魔攻"] - 0.2,
        "魔傷": state["魔傷"] - 0.2,
        "B傷": state["B傷"] - 0.2
      }
    case 'set進階祝福':
      return {
        ...state,
        "魔攻": state["魔攻"] + 0.35,
        "B傷": state["B傷"] + 0.15
      }
    case '取消進階祝福':
      return {
        ...state,
        "魔攻": state["魔攻"] - 0.35,
        "B傷": state["B傷"] - 0.15
      }
    case 'set最終極速':
      return {
        ...state,
        "B傷": state["B傷"] + 0.096
      }
    case '取消最終極速':
      return {
        ...state,
        "B傷": state["B傷"] - 0.096
      }
    case 'set憤怒':
      return {
        ...state,
        "魔攻": state["魔攻"] + 0.21,
      }
    case '取消憤怒':
      return {
        ...state,
        "魔攻": state["魔攻"] - 0.21,
      }
    case 'set戰鬥命令':
      return {
        ...state,
        "魔傷": state["魔傷"] + 0.15,
      }
    case '取消戰鬥命令':
      return {
        ...state,
        "魔傷": state["魔傷"] - 0.15,
      }
    case 'set精神強化(冰雷、火毒)':
      return {
        ...state,
        "魔傷": state["魔傷"] + 0.1,
      }
    case '取消精神強化(冰雷、火毒)':
      return {
        ...state,
        "魔傷": state["魔傷"] - 0.1,
      }
    case 'set團隊精神(夜光)':
      return {
        ...state,
        "魔攻": state["魔攻"] + 0.216,
      }
    case '取消團隊精神(夜光)':
      return {
        ...state,
        "魔攻": state["魔攻"] - 0.216,
      }
    case 'set潛水回來吧':
      return {
        ...state,
        "魔傷": state["魔傷"] + 0.15,
      }
    case '取消潛水回來吧':
      return {
        ...state,
        "魔傷": state["魔傷"] - 0.15,
      }
    case 'set灼熱地帶':
      return {
        ...state,
        "魔攻": state["魔攻"] + 0.2,
        "魔傷": state["魔傷"] + 0.05,
      }
    case '取消灼熱地帶':
      return {
        ...state,
        "魔攻": state["魔攻"] - 0.2,
        "魔傷": state["魔傷"] - 0.05,
      }
    default:
      throw new Error();
  }
}

function 藥reducer(state, action) {
  switch (action.type) {
    case 'setB傷30藥':
      return { ...state, "B傷30藥": true }
    case '取消B傷30藥':
      return { ...state, "B傷30藥": false }
    case 'set爆傷30藥':
      return { ...state, "爆傷30藥": true }
    case '取消爆傷30藥':
      return { ...state, "爆傷30藥": false }
    case 'set攻擊30藥':
      return { ...state, "攻擊30藥": true }
    case '取消攻擊30藥':
      return { ...state, "攻擊30藥": false }
    case 'set傷害30藥':
      return { ...state, "傷害30藥": true }
    case '取消傷害30藥':
      return { ...state, "傷害30藥": false }
    case 'setB傷50藥':
      return { ...state, "B傷50藥": true }
    case '取消B傷50藥':
      return { ...state, "B傷50藥": false }
    case 'set攻擊50藥':
      return { ...state, "攻擊50藥": true }
    case '取消攻擊50藥':
      return { ...state, "攻擊50藥": false }
    case 'set湯寶3藥':
      return { ...state, "湯寶3藥": true }
    case '取消湯寶3藥':
      return { ...state, "湯寶3藥": false }
    default:
      throw new Error();
  }
}

function 狀態reducer(state, action) {
  switch (action.type) {
    case 'set進階祝福':
      return { ...state, "進階祝福": true }
    case '取消進階祝福':
      return { ...state, "進階祝福": false }
    case 'set最終極速':
      return { ...state, "最終極速": true }
    case '取消最終極速':
      return { ...state, "最終極速": false }
    case 'set憤怒':
      return { ...state, "憤怒": true }
    case '取消憤怒':
      return { ...state, "憤怒": false }
    case 'set戰鬥命令':
      return { ...state, "戰鬥命令": true }
    case '取消戰鬥命令':
      return { ...state, "戰鬥命令": false }
    case 'set精神強化(冰雷、火毒)':
      return { ...state, "精神強化(冰雷、火毒)": true }
    case '取消精神強化(冰雷、火毒)':
      return { ...state, "精神強化(冰雷、火毒)": false }
    case 'set團隊精神(夜光)':
      return { ...state, "團隊精神(夜光)": true }
    case '取消團隊精神(夜光)':
      return { ...state, "團隊精神(夜光)": false }
    case 'set潛水回來吧':
      return { ...state, "潛水回來吧": true }
    case '取消潛水回來吧':
      return { ...state, "潛水回來吧": false }
    case 'set灼熱地帶':
      return { ...state, "灼熱地帶": true }
    case '取消灼熱地帶':
      return { ...state, "灼熱地帶": false }
    default:
      throw new Error();
  }
}


let 藥列表 = ['B傷30藥', '爆傷30藥', '傷害30藥', '攻擊30藥', '攻擊50藥', '湯寶3藥']
let 狀態列表 = ['進階祝福', '最終極速', '憤怒', '戰鬥命令', '精神強化(冰雷、火毒)', '團隊精神(夜光)', '潛水回來吧', '灼熱地帶']

function App() {
  const [狀態, dispatch狀態] = useReducer(狀態reducer, {
    '進階祝福': false,
    '最終極速': false,
    '憤怒': false,
    '戰鬥命令': false,
    '精神強化(冰雷、火毒)': false,
    '團隊精神(夜光)': false,
    '潛水回來吧': false,
    '灼熱地帶': false
  })
  const [藥, dispatch藥] = useReducer(藥reducer, {
    'B傷30藥': false,
    '爆傷30藥': false,
    '傷害30藥': false,
    '攻擊30藥': false,
    '攻擊50藥': false,
    '湯寶3藥': false
  })
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
  return <div >
    <h3>藥</h3>
    <div>
      {藥列表.map((藥名) => {
        return <div key={藥名} style={{ display: 'inline-block' }}>
          <label htmlFor={藥名}>{藥名}</label>
          <input type="checkbox" id={藥名} value={藥[藥名]} onChange={() => {
            if (藥[藥名]) { //取消
              dispatch({ type: `取消${藥名}` })
              dispatch藥({ type: `取消${藥名}` })
            } else { //打勾
              dispatch({ type: `set${藥名}` })
              dispatch藥({ type: `set${藥名}` })
            }
          }} />
        </div>
      })}
    </div>
    <h3>buff</h3>
    <div>
      {狀態列表.map((狀態名) => {
        return <div key={狀態名} style={{ display: 'inline-block' }}>
          <label htmlFor={狀態名}>{狀態名}</label>
          <input type="checkbox" id={狀態名} value={狀態[狀態名]} onChange={() => {
            if (狀態[狀態名]) { //取消
              dispatch({ type: `取消${狀態名}` })
              dispatch狀態({ type: `取消${狀態名}` })
            } else { //打勾
              dispatch({ type: `set${狀態名}` })
              dispatch狀態({ type: `set${狀態名}` })
            }
          }} />
        </div>
      })}
    </div>
    <div>
      {
        Object.keys(s).map((key) => {
          return <div key={key} style={{ margin: '10px' }}>
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
    <h3 style={damageStyle}>可能打出的技能傷害: {finalDamage.toFixed(2)}</h3>
  </div >

}

export default App;
