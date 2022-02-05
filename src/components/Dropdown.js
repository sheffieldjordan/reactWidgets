import React, {useState, useEffect, useRef} from "react";

const Dropdown = ({options, selected, onSelectedChange, label}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            /* if the clicked element was inside the Component, return; 
            otherwise set open to false, closing the dropdown.*/  
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false); 
          };
        document.body.addEventListener("click", onBodyClick, { capture: true });
            return() => {
                document.body.removeEventListener('click', onBodyClick, { capture: true });
            }
      }, []); // empty array means it only runs once, when component is rendered

    const renderedOptions = options.map((option) => {
        
        if (option.value === selected.value) {
            return null;
        }
        
        return (
            <div 
                key={option.value} 
                className="item" 
                onClick={()=> {
                    onSelectedChange(option)}
                }>
                {option.label}
            </div>
        );
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => {
                   
                    setOpen(!open)}
                } 
                className={`ui selection dropdown ${open ? 'visible active' : ''}`} // if open==true, add vis-act to className
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;