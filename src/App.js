import React, { useRef, useState } from 'react';
import UpdateOrganizationModal from './components/UpdateOrganizationModal';

let data = [
  { id: 1, name: "Buxoro viloyat hokimligi", email: "Buxoro@gmail.com" },
  { id: 2, name: "Kogon tuman hokimligi", email: "Kogon@gmail.com" },
  { id: 3, name: "Vobkent tuman hokimligi", email: "Vobkent@gmail.com" },
  { id: 5, name: "Shofirkon tuman hokimligi", email: "Shofirkon@gmail.com" },
  { id: 6, name: "Olot tuman hokimligi", email: "Olot@gmail.com" },
];

function App() {
  const mainCheckboxref = useRef();
  const borderColorChange = useRef();
  const [isOrgModalUpdate, setIsOrgModalUpdate] = useState({ open: false, obj: {} });
  const [orgNames, setOrgNames] = useState([]);
  const [openOption, setOpenOption] = useState(false);

  const changeHandler = (e) => {
    let checked_input_checkbox = document.querySelectorAll('.checked_input_checkbox');
    if (e.target.checked) {
      checked_input_checkbox.forEach(item => {
        item.checked = true;
      })
      setOrgNames(data);
    } else {
      checked_input_checkbox.forEach(item => {
        item.checked = false;
      })
      setOrgNames([]);
    }
  }

  const changeHandlerOtherCheckbox = (e, item) => {
    if (orgNames.find(con => con.name === item.name)) {
      let arr = orgNames.filter(orgName => {
        return orgName.name !== item.name
      })
      mainCheckboxref.current.checked = false;
      setOrgNames(arr);
    } else {
      [...orgNames, item].length === data.length ? mainCheckboxref.current.checked = true : mainCheckboxref.current.checked = false;
      setOrgNames([...orgNames, item]);
    }
  }

  return (
    <>
      <div className="App">
        <div className="input_checkbox_container">
          <div className="input_checkbox_wrapper">
            <div className="input_checkbox_wrapper_flex">
              <input
                type="text"
                readOnly
                className='main_input_data'
                placeholder='Tashkilot nomlari'
                onClick={() => setOpenOption(prev => !prev)}
                value={orgNames.length === 0 ? "Tashkilot tanlanmagan" : orgNames.length + " ta tashkilot tanlangan"}
              />
              {openOption ? (
                <i className="material-icons downIcon">&#xe316;</i>
              ) : (
                <i className="material-icons downIcon">&#xe313;</i>
              )}
            </div>
            {/* all org name */}
            {openOption && (
              <ul className="input_checkbox_items">
                <div className='all_checked_data' ref={borderColorChange} style={{ borderBottom: data?.length === orgNames?.length ? "1px solid crimson" : "1px solid lightgray" }}>
                  <input
                    type="checkbox"
                    className='checked_input_checkbox_all'
                    ref={mainCheckboxref}
                    onChange={(e) => changeHandler(e)}
                    defaultChecked={data?.length === orgNames?.length}

                  />
                  <span>Hammasini tanlash</span>
                </div>
                {data.map((item, index) => (
                  <li key={index} className='input_checkbox_item' onDoubleClick={() => setIsOrgModalUpdate({ open: true, obj: item })}>
                    <span className='checked_input'>
                      <input
                        type="checkbox"
                        className='checked_input_checkbox'
                        onChange={(e) => changeHandlerOtherCheckbox(e, item)}
                        defaultChecked={orgNames.find(con => con.name === item.name)}
                      />
                      <span>{item.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {isOrgModalUpdate.open && (
        <UpdateOrganizationModal
          setIsOrgModalUpdate={setIsOrgModalUpdate}
        />
      )}
    </>
  );
}

export default App;
