import { useState } from "react";
import Cookie from "js-cookie";


const Index = () => {

  const cookies = Cookie.getJSON('rememberCheckbox');
  let [checkbox, setCheckbox] = useState((cookies ? cookies.value : false))

  const setRememberMe = (state) => {
    Cookie.set("rememberCheckbox", { value: state });
    setCheckbox(state)
  };

  return (
    <div>
      remember me
      <input
        type="checkbox"
        value={checkbox}
        checked={checkbox}
        onChange={e => setRememberMe(e.target.checked)}
      />
    </div>
  );
};

export default Index;
